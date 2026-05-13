"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

// Glow divider — purple/blue
function GlowDivider() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "1px",
        margin: "0 0 56px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.2) 20%, rgba(99,102,241,0.7) 50%, rgba(139,92,246,0.2) 80%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-1px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120px",
          height: "3px",
          borderRadius: "2px",
          background: "linear-gradient(90deg, #6366f1, #a855f7)",
          filter: "blur(4px)",
          animation: "glowPulse 3s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; width: 80px; }
          50% { opacity: 1; width: 180px; }
        }
      `}</style>
    </div>
  );
}

// Social icon button — purple/blue hover
function SocialBtn({ label, children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: hov
          ? "1px solid rgba(139,92,246,0.7)"
          : "1px solid rgba(255,255,255,0.08)",
        background: hov ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.04)",
        color: hov ? "#a78bfa" : "rgba(255,255,255,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        transform: hov
          ? "translateY(-3px) scale(1.08)"
          : "translateY(0) scale(1)",
        boxShadow: hov ? "0 6px 24px rgba(139,92,246,0.2)" : "none",
        fontSize: 18,
      }}
    >
      {children}
    </button>
  );
}

// Nav link — purple/blue gradient on hover
function NavLink({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href || "#"}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block",
        background: hov ? "linear-gradient(90deg, #818cf8, #a855f7)" : "none",
        WebkitBackgroundClip: hov ? "text" : "unset",
        WebkitTextFillColor: hov ? "transparent" : "rgba(255,255,255,0.45)",
        color: hov ? "transparent" : "rgba(255,255,255,0.45)",
        textDecoration: "none",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.95rem",
        letterSpacing: "0.03em",
        fontWeight: 400,
        transition: "all 0.25s",
        position: "relative",
        paddingBottom: 2,
      }}
    >
      {children}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          width: hov ? "100%" : "0%",
          background: "linear-gradient(90deg, #6366f1, #a855f7)",
          transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
        }}
      />
    </a>
  );
}

// Email row
function EmailRow({ email }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 20,
        flexWrap: "wrap",
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(139,92,246,0.6)"
        strokeWidth="1.8"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
      <span
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.8rem",
          fontFamily: "monospace",
        }}
      >
        {email}
      </span>
      <button
        onClick={copy}
        style={{
          background: copied
            ? "rgba(139,92,246,0.2)"
            : "rgba(255,255,255,0.04)",
          border: "1px solid rgba(139,92,246,0.3)",
          borderRadius: 4,
          color: copied ? "#a78bfa" : "rgba(255,255,255,0.3)",
          cursor: "pointer",
          fontSize: "0.6rem",
          letterSpacing: "0.1em",
          padding: "2px 8px",
          fontFamily: "monospace",
          transition: "all 0.2s",
        }}
      >
        {copied ? "COPIED!" : "COPY"}
      </button>
    </div>
  );
}

// ── MAIN FOOTER ──────────────────────────────────────────────────────────────
export default function Footer() {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (footerRef.current) obs.observe(footerRef.current);
    return () => obs.disconnect();
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=JetBrains+Mono:wght@300;400&display=swap');

        .footer-root {
          position: relative;
          background: transparent;
          overflow: hidden;
        }

        .footer-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent);
          pointer-events: none;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1270px;
          margin: 0 auto;
          padding: 60px 40px 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.2fr;
          gap: 48px 64px;
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 36px; }
          .footer-inner { padding: 48px 24px 0; }
          .footer-bottom { padding: 0 24px 24px !important; flex-direction: column; text-align: center; }
        }

        .footer-brand-name {
          font-family: 'Inter', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          line-height: 1;
          margin-bottom: 16px;
          display: inline-block;
          background: linear-gradient(135deg, #818cf8 0%, #a855f7 55%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(139,92,246,0.25));
        }

        .footer-tagline {
          color: rgba(255,255,255,0.28);
          font-size: 0.88rem;
          line-height: 1.75;
          font-weight: 300;
          font-family: 'Inter', sans-serif;
          max-width: 260px;
          margin-bottom: 28px;
        }

        .footer-status { display: flex; align-items: center; gap: 8px; }

        .footer-status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px rgba(74,222,128,0.5);
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .footer-status-text {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.30);
          letter-spacing: 0.16em;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
        }

        .footer-col-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(139,92,246,0.4);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(139,92,246,0.1);
        }

        .footer-nav-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 14px;
        }

        .footer-social-row { display: flex; gap: 10px; margin-bottom: 8px; }

        .footer-bottom {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copyright {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(139,92,246,0.44);
          letter-spacing: 0.08em;
        }

        .footer-dev-badge {
          display: flex; align-items: center; gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(139,92,246,0.44);
          letter-spacing: 0.08em;
        }

        .footer-dev-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          box-shadow: 0 0 6px rgba(139,92,246,0.35);
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in-up.visible { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.12s; }
        .delay-2 { transition-delay: 0.24s; }
        .delay-3 { transition-delay: 0.36s; }
      `}</style>

      <footer className="footer-root" ref={footerRef}>
        <div className="footer-inner">
          <GlowDivider />

          <div className="footer-grid">
            {/* Brand */}
            <div className={`fade-in-up ${visible ? "visible" : ""}`}>
              <div className="footer-brand-name">Remon Hossain</div>
              <p className="footer-tagline">
                A React developer from Bangladesh, obsessed with clean UI and
                smooth animations.
              </p>
              <div className="footer-status">
                <span className="footer-status-dot" />
                <span className="footer-status-text">Available for work</span>
              </div>
            </div>

            {/* Nav */}
            <div className={`fade-in-up delay-1 ${visible ? "visible" : ""}`}>
              <div className="footer-col-title">Quick Links</div>
              <ul className="footer-nav-list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <NavLink href={link.href}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className={`fade-in-up delay-2 ${visible ? "visible" : ""}`}>
              <div className="footer-col-title">Connect</div>
              <div className="footer-social-row">
                <Link
                  href="https://github.com/remon918"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialBtn label="GitHub">
                    <FaGithub />
                  </SocialBtn>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/remon-hossen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialBtn label="LinkedIn">
                    <FaLinkedin />
                  </SocialBtn>
                </Link>
                <Link
                  href="https://www.facebook.com/pajetibha.ilekatrana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialBtn label="Facebook">
                    <FaFacebook />
                  </SocialBtn>
                </Link>
              </div>
              <EmailRow email="mdremonhossen7778@gmail.com" />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div>
          <div style={{ height: "1px", background: "rgba(139,92,246,0.07)" }} />
        </div>

        {/* Bottom bar */}
        <div
          className={`footer-bottom fade-in-up delay-3 ${visible ? "visible" : ""}`}
        >
          <span className="footer-copyright mt-2">
            © 2026 all rights reserved Remon Hossain.
          </span>
          <div className="footer-dev-badge">
            <span className="footer-dev-dot" />
            <span>Developed by Remon Hossain</span>
          </div>
        </div>
      </footer>
    </>
  );
}
