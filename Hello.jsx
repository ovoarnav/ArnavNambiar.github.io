import React from "react";

export default function Hello() {
  return (
    <section className="stack">
      <div className="hero">
        <h1>Hello.</h1>
        <p className="lead">
          Hi, my name is <strong>Arnav Nambiar</strong> and hello welcome to my website. I try and
          live my life with one simple goal: try and learn as much as possible and as a result I
          often over commit to things but its ok because its quite funny.
        </p>

        <div className="chips">
          <span className="chip">AI / Machine learning</span>
          <span className="chip">Statistical Modelling</span>
          <span className="chip">Optimization</span>
          <span className="chip">Modelling & Logic</span>
          <span className="chip">Applied Mathematics</span>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Entrepreneur / Researcher</h2>
          <p>
            Previously I have founded a start up <strong>BuildSafe</strong> focused on bringing AI powered
            enterprise resource planning solutions to the trade. More recently I am researching{" "}
            <strong>Neuro-Symbolic AI</strong> for sequential decision making.
          </p>
        </div>

        <div className="card">
          <h2>Why this site exists</h2>
          <p>
            The goal of this website is to show the journey of my life and my interests. I guess I should really
            be saying welcome to <strong>ARNAV’s SPACE</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
