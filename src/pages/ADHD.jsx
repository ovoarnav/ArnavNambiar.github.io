import React from "react";

const items = [
  { title: "AI", anchor: "ai", note: "Current obsession. I treat it as both a tool and a philosophical problem." },
  { title: "Machine learning", anchor: "ml", note: "Projects + certifications live here (as I add them)." },
  { title: "Data science (poll project)", anchor: "poll-project", note: "How I originally learned DS: Instagram polls → analysis → repeat. I learned an absurd amount from this." },
  { title: "Cognitive biases & the brain", note: "I got obsessed with why humans do what they do and the mechnaims behind thought." },
  { title: "Statistics", note: "The part of math that actually touches reality." },
  { title: "Actuarial science", note: "A real arc. Stressful, structured, and not for me long-term." },
  { title: "Math", note: "Yes. Still yes.I thought math would teach me the secrets of the universe." },
  { title: "Exoplanets", note: "There’s a water-world and a planet where it rains glass. Reality is unhinged. I think about the Fermi Paradox everyday" },
  { title: "Jurassic animals", note: "Titanoboa was particularly memorable." },
  { title: "People", note: "I got fascinated by personality, motives, and decision-making." },
  { title: "True crime", note: "A phase. I don’t know what that says about me." },
  { title: "Hypebeasting", note: "Fully influenced by early YouTube culture. Where would fasion be if not for Ricegum" },
  { title: "YouTube (RiceGum / David Dobrik)", note: "Possibly irreversible brain damage. Allegedly." },
  { title: "Random medical disorders", note: "Classic rabbit-hole behavior." },
  { title: "Skateboarding", note: "Short, intense phase. I remember reading Tony Hawk entire wikepedia page" },
  { title: "Photography", note: "I loved capturing worlds, I was just really bad at it." },
  { title: "Superheroes", note: "Spider-Man is my GOAT. Always. Superheroes represent morality + sacrifice." },
  { title: "Video games", note: "My parents discouraged it. I was mad then; in hindsight I’m grateful." },
  { title: "Food", note: "This was the arc where I got a bit fat." },
  { title: "Lego Ninjago", note: "I still think Kai should have been the Green Ninja." },
  { title: "Yu-Gi-Oh! GX", note: "Jaden Yuki arc weirdly parallel's my life. I hit Platinum in Duel Links in 2025 (top ~20% world wide)." },
  { title: "Cycling", note: "Multiple times. It keeps coming back." },
  { title: "Bakugan", note: "Classic TV show → toy marketing pipeline. I fell for it completely." },
  { title: "Ben 10", note: "I was obsessed with the idea that a kid could be a hero." },
  { title: "TV / Movies", note: "I’ve always loved the idea of stepping into a new world where anything is possible." },
];

export default function ADHD() {
  return (
    <section className="stack">
      <div className="hero">
        <h1>ADHD</h1>
        <p className="lead">
          Attention-Deficit / Hyperactivity Disorder.
        </p>
        <div className="card tight">
          <p>
            First, a joke: do you know who were the only people who didn’t know I had ADHD?
            Me and my family.
          </p>
          <p className="muted">
            This page is to show that ADHD isn't always a sign of lack of ability/ focus here is a reverse-chronological brain dump of my greatest bouts of focus. 
            Some entries will get deep links later; some will stay as-is because I don’t care enough.
          </p>
        </div>
      </div>

      <div className="card">
        <h2>Fixations (newest → oldest)</h2>
        <div className="list">
          {items.map((it) => (
            <div key={it.title} className="listItem" id={it.anchor || undefined}>
              <div className="listTitle">
                {it.anchor ? <a className="anchorLink" href={`#${it.anchor}`}>{it.title}</a> : it.title}
              </div>
              <div className="listNote">{it.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid">
        <div className="card" id="poll-project">
          <h2>Data science (poll project)</h2>
          <p>
            I learned DS by doing something simple and stupidly effective: I ran polls, collected responses,
            then analyzed patterns until I got addicted to extracting signal from noise.
          </p>
          <p className="muted">
            This section can later include snapshots, plots, or “what I learned” notes.
          </p>
        </div>

        <div className="card" id="ml">
          <h2>Machine learning</h2>
          <p>
            This will become a living archive: projects, notes, and artifacts I’m proud of (and some I’m not).
          </p>
        </div>

        <div className="card" id="ai">
          <h2>AI</h2>
          <p>
            Right now this is the core arena: learning, building, and trying to understand what intelligence is
            when it’s made of code.
          </p>
        </div>
      </div>
    </section>
  );
}


