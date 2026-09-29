"use client";
import Image from "next/image";
import { useState } from "react";
import { towers, type Tower } from "@/data/flagship";
import { ImageViewer } from "./image-viewer";
export function ResidenceExplorer({ data = towers }: { data?: Tower[] }) {
  const [towerId, setTower] = useState("");
  const [floorId, setFloor] = useState("");
  const [residenceId, setResidence] = useState("");
  const tower = data.find((t) => t.id === towerId);
  const floors = tower?.status === "verified" ? tower.floors : [];
  const floor = floors.find((f) => f.id === floorId);
  const residence = floor?.residences.find((r) => r.id === residenceId);
  const context = [tower?.label, floor?.label, residence?.label]
    .filter(Boolean)
    .join(" / ");
  return (
    <section id="residences" className="section residences">
      <div className="residences-heading">
        <div>
          <span className="eyebrow red">THE RESIDENCE EXPLORER</span>
          <h2>
            Find your
            <br />
            <em>perspective.</em>
          </h2>
        </div>
        <p>Tower → Floor → Residence → Plan → Enquire</p>
      </div>
      <div className="residences-layout">
        <div className="residence-visual">
          <Image
            src="/assets/bedroom.webp"
            alt="Illustrative bedroom interior, not a residence floor plan"
            fill
            sizes="(max-width: 767px) 90vw, 50vw"
          />
          <span className="image-note">ARCHITECTURAL VISUALISATION</span>
        </div>
        <div className="residence-details residence-selectors">
          <label>
            Select tower
            <select
              value={towerId}
              onChange={(e) => {
                setTower(e.target.value);
                setFloor("");
                setResidence("");
              }}
            >
              <option value="">Choose a tower</option>
              {data.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                  {t.status === "unverified" ? " — unverified" : ""}
                </option>
              ))}
            </select>
          </label>
          <label>
            Select floor
            <select
              disabled={!floors.length}
              value={floorId}
              onChange={(e) => {
                setFloor(e.target.value);
                setResidence("");
              }}
            >
              <option value="">
                {floors.length
                  ? "Choose a floor"
                  : "Verified floor schedule pending"}
              </option>
              {floors.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Select residence
            <select
              disabled={!floor?.residences.length}
              value={residenceId}
              onChange={(e) => setResidence(e.target.value)}
            >
              <option value="">
                {floor?.residences.length
                  ? "Choose a residence"
                  : "Verified residence schedule pending"}
              </option>
              {floor?.residences.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>
          <div aria-live="polite">
            <p>
              {residence
                ? residence.label
                : "Residence details await company verification."}
            </p>
            {residence?.planImage ? (
              <ImageViewer
                src={residence.planImage}
                label={`${residence.label} verified plan`}
              />
            ) : (
              <p className="model-note">View plan · Verified plans pending</p>
            )}
          </div>
          <a
            className="arrow-link"
            href={`#enquire?project=Sri%20Krishna%20Vilas&residence=${encodeURIComponent(context)}`}
          >
            Enquire{residence ? " about this residence" : " about residences"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
          <small>
            No availability, prices, areas or floor inventory are published in
            this preview.
          </small>
          <ImageViewer
            src="/assets/bedroom.webp"
            label="Illustrative bedroom interior"
          />
        </div>
      </div>
    </section>
  );
}
