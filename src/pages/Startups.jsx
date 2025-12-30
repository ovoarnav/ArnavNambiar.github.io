import React from "react";

export default function Startups() {
  return (
    <section className="stack">
      <div className="hero">
        <h1>Startups</h1>
        <p className="lead">
          This section talks about the startups I have formed in my life.
        </p>
      </div>

      <div className="card">
        <h2>BuildSafe</h2>
        <p>
          <strong>BuildSafe</strong> is a startup focused on bringing AI-powered enterprise resource planning
          (ERP) solutions to the trades. The objective is to simplify operations for small trade businesses
          by turning messy workflows into structured, actionable systems.
        </p>
      </div>

      <div className="card">
        <h2>Pulsar</h2>
        <p>
          <strong>Pulsar</strong> is a new startup I am working on. The goal is to use neuro-symbolic AI to solve
          the multi-agent communication crisis.
        </p>
        <p>
          I have created a neuro-symbolic architecture for multi-agent work called{" "}
          <strong>Neuro-Symbolic Fusion Learning</strong>. The goal is to mimic organisational structures in
          corporate workforces in order to optimise agentic communication.
        </p>
        <p className="muted">
          This is my first deep tech venture. It has been interesting transitioning from a B2B SaaS to a deeper
          technical world where success is based on how well your code solves the problem vs how well you sell to clients.
        </p>
      </div>
    </section>
  );
}
