import React from "react";

const phases = [
  "Pre birth",
  "India",
  "Hong Kong (subplot)",
  "Tanzania",
  "Egypt",
  "India",
  "Kenya",
  "Ghana",
  "Canada",
  "Thailand",
  "Dubai",
  "San Fransico (the future)",
];

export default function Autobiography() {
  return (
    <section className="stack">
      <div className="hero">
        <h1>Autobiography</h1>
        <p className="lead">
          Who is Arnav Nambiar? How can someone that is so smart and funny be so strange and odd at the same time?
          That is the pressing question I have been grappling with my entire life.
        </p>
      </div>

      <div className="card">
        <p>
          This isn't going to be a typical autobiography. This is going to be something I write as I go.
          It will be honest: insecurities, times I messed up, and how I’m trying to change.
        </p>
        <p className="muted">
          I want this to be a living record. I’ll likely go deeper as I remember more.
        </p>
      </div>

      <div className="card">
        <h2>Phases</h2>
        <p className="muted">
          I broke it down into arcs and left room for the future. Right now I am living through the Dubai phase.
        </p>
        <div className="list">
          {phases.map((p) => (
            <div className="listItem" key={p}>
              <div className="listTitle">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
