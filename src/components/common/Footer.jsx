import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Main Footer Content */}
      <div style={styles.container}>
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.brandSection}
        >
          <div style={styles.brandHeader}>
            <span style={styles.brandIcon}>🌾</span>
            <span style={styles.brandName}>AT Millets</span>
          </div>

          <p style={styles.brandDescription}>
            Premium millets, spices, and natural foods sourced directly from
            tribal farmers of Araku Valley. From ancient grains to modern
            lifestyles — naturally.
          </p>

          <p style={styles.brandTagline}>
            Rooted in tradition. Crafted for today.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={styles.linksSection}
        >
          <FooterColumn
            title="Company"
            links={[
              ["About Us", "/about"],
              ["Tribal Sourcing", "/sourcing"],
              ["Supply Chain", "/supply-chain"],
              ["Packaging", "/packaging-distribution"],
              ["Quality Standards", "/quality"],
            ]}
          />

          <FooterColumn
            title="Products"
            links={[
              ["All Products", "/products"],
              ["Millets Collection", "/millets"],
              ["Spices & Naturals", "/spices"],
              ["Recipes & Usage", "/recipes"],
            ]}
          />

          <FooterColumn
            title="Business"
            links={[
              ["Franchise Opportunity", "/franchise"],
              ["Bulk Orders", "/bulk"],
              ["Contact Us", "/contact"],
            ]}
          />
        </motion.div>

        {/* Contact & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={styles.contactSection}
        >
          <h4 style={styles.columnTitle}>Get in Touch</h4>

          <p style={styles.contactItem}>📍 Araku Valley, Andhra Pradesh</p>
          <p style={styles.contactItem}>📞 +91 XXXXX XXXXX</p>
          <p style={styles.contactItem}>✉️ info@atmillets.com</p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={styles.footerCtaWrapper}
          >
            <Link to="/franchise" style={styles.footerCta}>
              Become a Franchise Partner →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <span>
          © {new Date().getFullYear()} AT Millets Araku Naturals Pvt. Ltd.
        </span>
        <span style={styles.bottomDivider}>•</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------------- FOOTER COLUMN ---------------- */

const FooterColumn = ({ title, links }) => (
  <div style={styles.footerColumn}>
    <h4 style={styles.columnTitle}>{title}</h4>
    <ul style={styles.linkList}>
      {links.map(([label, path]) => (
        <motion.li
          key={path}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link to={path} style={styles.footerLink}>
            {label}
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
);

/* ================== PREMIUM STYLES ================== */

const styles = {
  footer: {
    background:
      "linear-gradient(180deg, #fffaf0 0%, #f6efe6 60%, #efe4d6 100%)",
    borderTop: "1px solid rgba(139,94,52,0.15)",
    marginTop: "0",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "72px 32px 56px",
    display: "grid",
    gridTemplateColumns: "1.4fr 2fr 1.2fr",
    gap: "48px",
  },
  brandSection: {
    maxWidth: "420px",
  },
  brandHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "16px",
  },
  brandIcon: {
    fontSize: "1.8rem",
  },
  brandName: {
    fontSize: "1.6rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #8b5e34, #6b4f2c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  brandDescription: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#4a3724",
    marginBottom: "12px",
  },
  brandTagline: {
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    color: "#8b5e34",
  },
  linksSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  footerColumn: {},
  columnTitle: {
    fontSize: "0.95rem",
    fontWeight: 700,
    marginBottom: "16px",
    color: "#3f2f1c",
    letterSpacing: "0.4px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  footerLink: {
    fontSize: "0.9rem",
    color: "#5a4632",
    textDecoration: "none",
    display: "inline-block",
    padding: "6px 0",
  },
  contactSection: {},
  contactItem: {
    fontSize: "0.9rem",
    color: "#4a3724",
    marginBottom: "10px",
  },
  footerCtaWrapper: {
    marginTop: "20px",
  },
  footerCta: {
    display: "inline-block",
    background: "linear-gradient(135deg, #8b5e34, #6b4f2c)",
    color: "#fffdf8",
    padding: "14px 22px",
    borderRadius: "14px",
    fontSize: "0.9rem",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 10px 28px rgba(139,94,52,0.35)",
  },
  bottomBar: {
    borderTop: "1px solid rgba(139,94,52,0.2)",
    padding: "18px 24px",
    textAlign: "center",
    fontSize: "0.8rem",
    color: "#6b4f2c",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  bottomDivider: {
    opacity: 0.5,
  },
};
