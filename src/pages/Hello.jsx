import React from "react";

export default function Hello() {
  return (
    <section className="stack">
      <div className="hero hero-center">
        <h1 className="hero-title">Hello.</h1>

        <p className="lead hero-text">
          Hi, my name is <strong>Arnav Nambiar</strong> and welcome to my website.
          I try to live my life with one simple goal: learn as much as possible.
          As a result, I often overcommit — but it’s okay, because it’s quite funny.
        </p>

        <div className="skills-block">
          <div className="skills-title">Skills</div>

          <div className="chips chips-center">
            <span className="chip">AI / Machine Learning</span>
            <span className="chip">Statistical Modelling</span>
            <span className="chip">Optimization</span>
            <span className="chip">Modelling & Logic</span>
            <span className="chip">Applied Mathematics</span>
          </div>
        </div>
      </div>

      <div className="card card-center">
        <h2>Why this site exists</h2>
        <p>
          The goal of this website is to show the journey of my life and my interests.
          I guess I should really be saying welcome to <strong>ARNAV’s SPACE</strong>.
        </p>
      </div>
    </section>
  );
}
