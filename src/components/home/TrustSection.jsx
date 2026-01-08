import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Microscope, Handshake } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

/* === IMPORT CERTIFICATION IMAGES === */
import fssaiImg from "../../assets/images/FSSAI_logo.png";
import organicImg from "../../assets/images/np.png";
import labImg from "../../assets/images/lab_tested.png";
import gmpImg from "../../assets/images/good_manufacturing_practices.png";
import traceImg from "../../assets/images/traceable_supply_chain.png";

/* =========================================================
   TRUST & CERTIFICATIONS SECTION
========================================================= */

const TrustSection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Leaf />,
      title: t("home.trust.items.organic.title"),
      text: t("home.trust.items.organic.text"),
    },
    {
      icon: <Microscope />,
      title: t("home.trust.items.testing.title"),
      text: t("home.trust.items.testing.text"),
    },
    {
      icon: <Handshake />,
      title: t("home.trust.items.fair.title"),
      text: t("home.trust.items.fair.text"),
    },
    {
      icon: <ShieldCheck />,
      title: t("home.trust.items.compliance.title"),
      text: t("home.trust.items.compliance.text"),
    },
  ];

  const certifications = [
    { key: "fssai", label: t("home.trust.badges.fssai"), image: fssaiImg },
    {
      key: "organic",
      label: t("home.trust.badges.organic"),
      image: organicImg,
    },
    { key: "lab", label: t("home.trust.badges.lab"), image: labImg },
    { key: "gmp", label: t("home.trust.badges.gmp"), image: gmpImg },
    { key: "trace", label: t("home.trust.badges.trace"), image: traceImg },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div style={styles.container}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.header}
        >
          <span style={styles.eyebrow}>
            <span style={styles.dot}>●</span>
            {t("home.trust.eyebrow")}
          </span>

          <h2 style={styles.title}>
            {t("home.trust.title")}
            <br />
            <span style={styles.titleAccent}>
              {t("home.trust.titleAccent")}
            </span>
          </h2>

          <p style={styles.subtitle}>{t("home.trust.subtitle")}</p>
        </motion.div>

        {/* TRUST PILLARS */}
        <div style={styles.grid}>
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              style={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 44px rgba(60,139,101,0.18)",
              }}
            >
              <div style={styles.iconWrap}>{item.icon}</div>
              <h4 style={styles.cardTitle}>{item.title}</h4>
              <p style={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATION BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={styles.badgeSection}
        >
          <p style={styles.badgeTitle}>{t("home.trust.badges.title")}</p>

          <div style={styles.badgeRow}>
            {certifications.map((badge) => (
              <motion.div
                key={badge.key}
                style={styles.badgeCard}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={badge.image}
                  alt={badge.label}
                  style={styles.badgeImage}
                  loading="lazy"
                />
                <span style={styles.badgeLabel}>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FOOTER TRUST LINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={styles.footer}
        >
          {t("home.trust.footer")}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;

/* =========================================================
   STYLES (PREMIUM, BOOMER-FRIENDLY)
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "160px 0",
    background: "#ffffff",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 30%, rgba(120,194,154,0.14), transparent 55%), radial-gradient(circle at 80% 70%, rgba(60,139,101,0.12), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 48px",
    position: "relative",
    zIndex: 2,
  },

  header: {
    maxWidth: 640,
    marginBottom: 80,
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.7rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#3c8b65",
    fontWeight: 600,
    marginBottom: 24,
    padding: "8px 20px",
    background: "rgba(60,139,101,0.08)",
    borderRadius: 50,
    border: "1px solid rgba(60,139,101,0.15)",
  },

  dot: { fontSize: "0.5rem", color: "#78c29a" },

  title: {
    fontSize: "clamp(2.4rem,4.5vw,3.8rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
    marginBottom: 20,
  },

  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
    gap: 32,
  },

  badgeSection: {
    marginTop: 100,
    textAlign: "center",
  },

  badgeTitle: {
    fontSize: "0.85rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#3c8b65",
    fontWeight: 700,
    marginBottom: 32,
  },

  badgeRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 28,
  },

  badgeCard: {
    background: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(60,139,101,0.15)",
    borderRadius: 16,
    padding: "18px 22px",
    minWidth: 140,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 6px 20px rgba(60,139,101,0.1)",
  },

  badgeImage: {
    height: 42,
    width: "auto",
    objectFit: "contain",
  },

  badgeLabel: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#0d2817",
    textAlign: "center",
  },

  card: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: 20,
    padding: "36px 32px",
    border: "1px solid rgba(60,139,101,0.12)",
    boxShadow: "0 8px 30px rgba(60,139,101,0.08)",
    transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
    cursor: "default",
  },

  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(120,194,154,0.2), rgba(60,139,101,0.2))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    color: "#3c8b65",
  },

  cardTitle: {
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#0d2817",
    marginBottom: 12,
  },

  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#5f8f75",
  },

  footer: {
    marginTop: 80,
    padding: "18px 32px",
    background: "rgba(60,139,101,0.08)",
    border: "1px solid rgba(60,139,101,0.15)",
    borderRadius: 40,
    textAlign: "center",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#0d2817",
  },
};
