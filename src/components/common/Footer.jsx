import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* =========================================================
   RESPONSIVE FOOTER – WHITE & GREEN PREMIUM THEME
========================================================= */

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767);
      setIsTablet(width > 767 && width <= 1023);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer style={styles.footer}>
      {/* soft green background texture */}
      <div style={styles.bgPattern} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "1fr 1fr"
            : "1.4fr 2fr 1.2fr",
          gap: isMobile ? 40 : 56,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            ...styles.brandSection,
            margin: isMobile ? "0 auto" : 0,
          }}
        >
          <div
            style={{
              ...styles.brandHeader,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <span style={styles.brandIcon}>🌾</span>
            <span style={styles.brandName}>AT Millets</span>
          </div>

          <p style={styles.brandDescription}>
            Premium millets and natural foods sourced responsibly from tribal
            farmers of Araku Valley.
          </p>

          <p style={styles.brandTagline}>Rooted in Nature • Built on Trust</p>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            ...styles.linksSection,
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          }}
        >
          <FooterColumn
            title="Company"
            links={[
              ["About Us", "/about"],
              ["Tribal Sourcing", "/sourcing"],
              ["Supply Chain", "/supply-chain"],
              ["Packaging", "/packaging"],
              ["Quality Standards", "/quality"],
            ]}
            center={isMobile}
          />

          <FooterColumn
            title="Products"
            links={[
              ["All Products", "/products"],
              ["Millets Collection", "/millets"],
              ["Spices & Naturals", "/spices"],
              ["Recipes & Usage", "/recipes"],
            ]}
            center={isMobile}
          />

          <FooterColumn
            title="Business"
            links={[
              ["Franchise Opportunity", "/franchise"],
              ["Bulk Orders", "/bulk"],
              ["Contact Us", "/contact"],
            ]}
            center={isMobile}
          />
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            ...styles.contactSection,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h4 style={styles.columnTitle}>Get in Touch</h4>

          <p style={styles.contactItem}>📍 Araku Valley, Andhra Pradesh</p>
          <p style={styles.contactItem}>📞 +91 XXXXX XXXXX</p>
          <p style={styles.contactItem}>✉️ info@atmillets.com</p>

          <Link
            to="/franchise"
            style={{
              ...styles.footerCta,
              margin: isMobile ? "18px auto 0" : "18px 0 0",
            }}
          >
            Become a Franchise Partner →
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          ...styles.bottomBar,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <span>
          © {new Date().getFullYear()} AT Millets Araku Naturals Pvt. Ltd.
        </span>
        {!isMobile && <span style={styles.bottomDivider}>•</span>}
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------------- FOOTER COLUMN ---------------- */

const FooterColumn = ({ title, links, center }) => (
  <div style={{ textAlign: center ? "center" : "left" }}>
    <h4 style={styles.columnTitle}>{title}</h4>
    <ul style={styles.linkList}>
      {links.map(([label, path]) => (
        <motion.li
          key={path}
          whileHover={{ x: center ? 0 : 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <Link to={path} style={styles.footerLink}>
            {label}
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
);

/* =========================================================
   STYLES – WHITE & GREEN PREMIUM
========================================================= */

const styles = {
  footer: {
    position: "relative",
    background: "linear-gradient(180deg,#ffffff 0%,#f9fdfb 55%,#f2faf6 100%)",
    borderTop: "1px solid rgba(60,139,101,0.15)",
    overflow: "hidden",
  },

  bgPattern: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 20%, rgba(120,194,154,0.12), transparent 45%), radial-gradient(circle at 80% 80%, rgba(60,139,101,0.1), transparent 45%)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "80px 32px 60px",
    display: "grid",
    zIndex: 1,
  },

  /* BRAND */
  brandSection: {
    maxWidth: 420,
  },

  brandHeader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 18,
  },

  brandIcon: {
    fontSize: "1.9rem",
  },

  brandName: {
    fontSize: "1.6rem",
    fontWeight: 900,
    background: "linear-gradient(135deg,#2d7a54,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  brandDescription: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
    marginBottom: 14,
  },

  brandTagline: {
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#3c8b65",
  },

  /* LINKS */
  linksSection: {
    display: "grid",
    gap: 36,
  },

  columnTitle: {
    fontSize: "0.9rem",
    fontWeight: 800,
    marginBottom: 18,
    color: "#0d2817",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  footerLink: {
    fontSize: "0.9rem",
    color: "#4f6f5f",
    textDecoration: "none",
    padding: "6px 0",
    display: "inline-block",
    transition: "color 0.2s ease",
  },

  /* CONTACT */
  contactSection: {},

  contactItem: {
    fontSize: "0.9rem",
    color: "#3f5f4f",
    marginBottom: 10,
  },

  footerCta: {
    display: "inline-block",
    padding: "14px 24px",
    background: "linear-gradient(135deg,#3c8b65,#2d7a54)",
    color: "#ffffff",
    borderRadius: 14,
    fontSize: "0.9rem",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 10px 30px rgba(60,139,101,0.35)",
    transition: "transform 0.25s ease",
  },

  /* BOTTOM BAR */
  bottomBar: {
    borderTop: "1px solid rgba(60,139,101,0.18)",
    padding: "18px 24px",
    fontSize: "0.8rem",
    color: "#5f8f75",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },

  bottomDivider: {
    opacity: 0.6,
  },
};
