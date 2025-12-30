import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Hello from "./pages/Hello.jsx";
import Startups from "./pages/Startups.jsx";
import Research from "./pages/Research.jsx";
import Autobiography from "./pages/Autobiography.jsx";
import ADHD from "./pages/ADHD.jsx";

const THEME_BY_PATH = {
  "/hello": { accent: "#E7C6A5", glow: "radial-gradient(1000px 500px at 15% 10%, rgba(231,198,165,.22), transparent 60%)" },
  "/startups": { accent: "#9AD0FF", glow: "radial-gradient(1000px 500px at 20% 5%, rgba(154,208,255,.20), transparent 60%)" },
  "/research": { accent: "#B7F7C2", glow: "radial-gradient(1000px 500px at 18% 8%, rgba(183,247,194,.18), transparent 60%)" },
  "/autobiography": { accent: "#FFB7D5", glow: "radial-gradient(1000px 500px at 14% 6%, rgba(255,183,213,.18), transparent 60%)" },
  "/adhd": { accent: "#F7E37A", glow: "radial-gradient(1000px 500px at 16% 7%, rgba(247,227,122,.18), transparent 60%)" },
};

function usePageTheme() {
  const { pathname } = useLocation();
  const theme = THEME_BY_PATH[pathname] || THEME_BY_PATH["/hello"];
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty("--glow", theme.glow);
  }, [theme]);
}

export default function App() {
  usePageTheme();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/hello" replace />} />
      <Route path="/hello" element={<Layout><Hello /></Layout>} />
      <Route path="/startups" element={<Layout><Startups /></Layout>} />
      <Route path="/research" element={<Layout><Research /></Layout>} />
      <Route path="/autobiography" element={<Layout><Autobiography /></Layout>} />
      <Route path="/adhd" element={<Layout><ADHD /></Layout>} />
      <Route path="*" element={<Navigate to="/hello" replace />} />
    </Routes>
  );
}
