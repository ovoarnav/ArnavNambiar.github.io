import React from "react";

export default function Research() {
  return (
    <section className="stack">
      <div className="hero">
        <h1>Research</h1>
        <p className="lead">
          I am terrible at school but I still have a somewhat self destructive desire to contribute to academia.
        </p>
      </div>

      <div className="card">
        <h2>BRIDGE / Catholic Crosscultural Services (Published)</h2>
        <p>
          I contributed data analysis using data science methodologies for Catholic Crosscultural Services.
          This work analyzed immigrant service usage in: Settlement, Health Care, Career, Language Training,
          and Language Assessment.
        </p>
        <p>
          The goal was to understand how new immigrants were using these services and provide data-informed
          policies for stakeholders.
        </p>
        <p className="muted">
          The publication is private. I will later attach the public website link for those interested.
        </p>
      </div>

      <div className="card">
        <h2>Informal research partnership with Prof. David Duvenaud</h2>
        <p>
          I spent the past semester analyzing a coordination problem and its associated complexity class:
          bureaucracy as a complexity class.
        </p>
        <p>
          In offices, not all employees are good actors at every moment. Some bad behaviour is permitted,
          some is not. When organizations change bureaucratic structure, they move the boundary of what
          behaviour is acceptable. That changes who counts as a good actor versus a bad actor, which creates
          a new coordination / complexity dynamic.
        </p>
        <p>
          I call this <strong>dynamical complexity</strong>, inspired by dynamical systems: behaviour whose state changes
          rapidly when dealing with a chaotic medium.
        </p>
        <p className="muted">
          Not published yet. I will include current drafts here later.
        </p>
      </div>

      <div className="card">
        <h2>Symbolic Action Model (SAM)</h2>
        <p>
          Modern LLMs are great at predicting the next word, which makes them amazing at communicating.
          But when humans do things (booking a flight, drinking water, etc) we do not create a long speech
          of what we are to do — we map out steps and then act them.
        </p>
        <p>
          This is why I believe multi agent systems fail: they do not map out steps symbolically, so they run
          into road blocks and hurdles. The goal of SAM is building a new type of model that predicts the next
          <strong> symbolic step</strong> vs the next word.
        </p>
        <p className="muted">
          Early stage. I am experimenting with Neuro-Symbolic Fusion Learning. It is still unstable, but it can
          outperform some baselines in my current tests.
        </p>
      </div>
    </section>
  );
}
