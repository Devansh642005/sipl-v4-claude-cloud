/** Standard reducing-balance EMI maths. Illustrative only; the bank sets the real rate and terms. */
export function emi(principal: number, annualPct: number, years: number) {
  const r = annualPct / 12 / 100;
  const n = years * 12;
  if (r === 0) return principal / n;
  const f = Math.pow(1 + r, n);
  return (principal * r * f) / (f - 1);
}
export function loanFor(emiAmount: number, annualPct: number, years: number) {
  const r = annualPct / 12 / 100;
  const n = years * 12;
  if (r === 0) return emiAmount * n;
  const f = Math.pow(1 + r, n);
  return (emiAmount * (f - 1)) / (r * f);
}
export const inr = (v: number) =>
  "₹" + Math.round(v).toLocaleString("en-IN");
export const lakh = (v: number) =>
  v >= 1e7 ? `₹${(v / 1e7).toFixed(2)} crore` : `₹${(v / 1e5).toFixed(1)} lakh`;
