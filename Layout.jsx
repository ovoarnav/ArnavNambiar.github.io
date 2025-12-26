import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink to={to} className={({ isActive }) => `navlink ${isActive ? "navlink-active" : ""}`}>
    {children}
  </NavLink>
);

export default function Layout({ children }) {
  return (
    <div className="shell">
      <header className="header">
        <div className="brand">
          <div className="badge">A</div>
          <div>
            <div className="title">ARNAV’s SPACE</div>
            <div className="subtitle">a personal universe</div>
          </div>
        </div>

        <nav className="nav">
          <NavItem to="/hello">Hello</NavItem>
          <NavItem to="/startups">Startups</NavItem>
          <NavItem to="/research">Research</NavItem>
          <NavItem to="/autobiography">Autobiography</NavItem>
          <NavItem to="/adhd">ADHD</NavItem>
        </nav>
      </header>

      <main className="main">
        {children}
        <footer className="footer">
          <span>© {new Date().getFullYear()} Arnav Nambiar</span>
          <span className="dot">•</span>
          <span className="muted">Built on GitHub Pages. Designed to evolve.</span>
        </footer>
      </main>
    </div>
  );
}
