"use client";
import Link from "next/link";
import { useState } from "react";
import { emi, inr, lakh, loanFor } from "@/lib/emi";

function enquire(intent: string) {
  window.dispatchEvent(
    new CustomEvent("sipl-enquire", { detail: { project: "Sri Krishna Vilas", intent } }),
  );
}

function Range({
  label,
  value,
  min,
  max,
  step,
  onChange,
  fmt,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  fmt: (v: number) => string;
}) {
  return (
    <label className="tl-range">
      <span>
        {label}
        <b>{fmt(value)}</b>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  );
}

/** Household size + comfortable monthly payment -> loan size and a plan to look at. */
export function BudgetFinder() {
  const [people, setPeople] = useState(3);
  const [pay, setPay] = useState(30000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8.5);
  const loan = loanFor(pay, rate, years);
  const suggest =
    people <= 2 ? "1 or 1.5 BHK" : people === 3 ? "2 BHK" : people === 4 ? "2 or 3 BHK" : "3 BHK";
  return (
    <div className="tl-card sp-card">
      <div className="tl-form">
        <label className="tl-range">
          <span>
            People who will live there<b>{people >= 5 ? "5 or more" : people}</b>
          </span>
          <input type="range" min={1} max={5} step={1} value={people} onChange={(e) => setPeople(Number(e.target.value))} />
        </label>
        <Range label="Comfortable monthly payment" value={pay} min={10000} max={150000} step={2500} onChange={setPay} fmt={inr} />
        <Range label="Loan period" value={years} min={5} max={30} step={1} onChange={setYears} fmt={(v) => `${v} years`} />
        <Range label="Interest rate (illustrative)" value={rate} min={6} max={13} step={0.1} onChange={setRate} fmt={(v) => `${v.toFixed(1)}%`} />
      </div>
      <div className="tl-out">
        <p className="tl-k">A loan of about</p>
        <p className="tl-big">{lakh(loan)}</p>
        <p className="tl-k">could sit inside that payment. A plan to look at first:</p>
        <p className="tl-plan">{suggest}</p>
        <div className="s-actions">
          <Link href="/floor-plans" className="s-pill s-pill-solid">
            <span>See the plans</span>
          </Link>
          <button type="button" className="tl-link" onClick={() => enquire(`${suggest} plan`)}>
            Ask about {suggest}
          </button>
        </div>
        <p className="tl-note">
          Illustrative maths. Your bank decides the real rate and eligibility, and SIPL confirms current prices. This is
          not financial advice.
        </p>
      </div>
    </div>
  );
}

/** Plain EMI calculator. */
export function EmiPlanner() {
  const [loan, setLoan] = useState(3000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);
  const m = emi(loan, rate, years);
  const total = m * years * 12;
  return (
    <div className="tl-card sp-card">
      <div className="tl-form">
        <Range label="Loan amount" value={loan} min={500000} max={10000000} step={100000} onChange={setLoan} fmt={lakh} />
        <Range label="Interest rate (illustrative)" value={rate} min={6} max={13} step={0.1} onChange={setRate} fmt={(v) => `${v.toFixed(1)}%`} />
        <Range label="Loan period" value={years} min={5} max={30} step={1} onChange={setYears} fmt={(v) => `${v} years`} />
      </div>
      <div className="tl-out">
        <p className="tl-k">Monthly payment</p>
        <p className="tl-big">{inr(m)}</p>
        <dl className="tl-dl">
          <div>
            <dt>Total repaid</dt>
            <dd>{lakh(total)}</dd>
          </div>
          <div>
            <dt>Of which interest</dt>
            <dd>{lakh(total - loan)}</dd>
          </div>
        </dl>
        <p className="tl-note">Standard reducing-balance formula. Fees, insurance and the bank&apos;s terms are extra.</p>
      </div>
    </div>
  );
}

/** Rent over ten years against a monthly payment. Honest maths, no hype. */
export function RentVsEmi() {
  const [rent, setRent] = useState(15000);
  const [rise, setRise] = useState(5);
  const [pay, setPay] = useState(25000);
  let rentTotal = 0;
  for (let y = 0; y < 10; y++) rentTotal += rent * 12 * Math.pow(1 + rise / 100, y);
  const payTotal = pay * 12 * 10;
  return (
    <div className="tl-card sp-card">
      <div className="tl-form">
        <Range label="Rent you pay now, per month" value={rent} min={5000} max={100000} step={1000} onChange={setRent} fmt={inr} />
        <Range label="Yearly rent increase" value={rise} min={0} max={12} step={1} onChange={setRise} fmt={(v) => `${v}%`} />
        <Range label="Monthly loan payment (EMI)" value={pay} min={10000} max={150000} step={1000} onChange={setPay} fmt={inr} />
      </div>
      <div className="tl-out">
        <div className="tl-two">
          <div>
            <p className="tl-k">Rent over 10 years</p>
            <p className="tl-big">{lakh(rentTotal)}</p>
            <p className="tl-sub">and you own nothing at the end</p>
          </div>
          <div>
            <p className="tl-k">EMI over 10 years</p>
            <p className="tl-big">{lakh(payTotal)}</p>
            <p className="tl-sub">and part of the loan is already repaid</p>
          </div>
        </div>
        <p className="tl-note">
          Not a like-for-like comparison. A home needs a down payment, maintenance, taxes and repairs; rent does not.
          Use it to see the shape of the numbers, not to make the decision.
        </p>
      </div>
    </div>
  );
}

/** Rough loan eligibility. Banks usually cap total EMIs at a share of income; the share varies. */
export function Eligibility() {
  const [income, setIncome] = useState(80000);
  const [existing, setExisting] = useState(0);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8.5);
  const share = 0.45;
  const room = Math.max(0, income * share - existing);
  const loan = loanFor(room, rate, years);
  return (
    <div className="tl-card sp-card">
      <div className="tl-form">
        <Range label="Monthly take-home income (household)" value={income} min={20000} max={500000} step={5000} onChange={setIncome} fmt={inr} />
        <Range label="Existing loan payments per month" value={existing} min={0} max={150000} step={2500} onChange={setExisting} fmt={inr} />
        <Range label="Loan period" value={years} min={5} max={30} step={1} onChange={setYears} fmt={(v) => `${v} years`} />
        <Range label="Interest rate (illustrative)" value={rate} min={6} max={13} step={0.1} onChange={setRate} fmt={(v) => `${v.toFixed(1)}%`} />
      </div>
      <div className="tl-out">
        <p className="tl-k">A rough loan range to discuss with a bank</p>
        <p className="tl-big">up to {lakh(loan)}</p>
        <p className="tl-k">with a monthly payment of about {inr(room)}</p>
        <p className="tl-note">
          Assumes total loan payments of about 45% of income. Banks set their own limits, and look at credit history, age
          and the property. This is a conversation starter, not an offer or advice.
        </p>
      </div>
    </div>
  );
}
