import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";
import heroImage from "../../assets/images/sunset_shop.png";

const BusinessHero = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const highlights =
    t("business.hero.highlights", { returnObjects: true }) || [];

  return (
    <section style={styles.wrapper}>
      {/* Background Image */}
      <img
        src={heroImage}
        alt="AT Millets Business Opportunity"
        style={styles.bg}
      />

      {/* Overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Eyebrow */}
        <span style={styles.eyebrow}>{t("business.hero.eyebrow")}</span>

        {/* Title */}
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile ? "2.2rem" : "clamp(2.8rem, 5vw, 3.8rem)",
          }}
        >
          {t("business.hero.titleMain")}{" "}
          <span style={styles.titleAccent}>
            {t("business.hero.titleAccent")}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={styles.subtitle}>{t("business.hero.subtitle")}</p>

        {/* Highlights */}
        {Array.isArray(highlights) && (
          <ul style={styles.list}>
            {highlights.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.12 }}
                style={styles.listItem}
              >
                <span style={styles.check}>✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {/* Description */}
        <p style={styles.description}>{t("business.hero.description")}</p>
      </motion.div>
    </section>
  );
};

export default BusinessHero;

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "140px 20px 60px", // 👈 FIX: header-safe top padding
    overflow: "hidden",
  },

  bg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.04)",
    filter: "saturate(1.05) contrast(1.05)", // 👈 subtle polish
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: `
    linear-gradient(
      to bottom,
      rgba(15, 23, 42, 0.75) 0%,
      rgba(15, 23, 42, 0.55) 30%,
      rgba(15, 23, 42, 0.35) 55%,
      rgba(15, 23, 42, 0.15) 75%,
      rgba(15, 23, 42, 0.05) 100%
    )
  `,
  },

  content: {
    position: "relative",
    maxWidth: 760,
    zIndex: 2,
    color: "#ffffff",
  },

  eyebrow: {
    fontSize: "0.8rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: "#bbf7d0", // softer green for sunset
    marginBottom: 14,
  },

  title: {
    fontWeight: 900,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    marginBottom: 18,
    color: "#f8fafc", // warm white
  },

  titleAccent: {
    color: "#86efac", // brand green pops nicely
  },

  subtitle: {
    fontSize: "1.15rem",
    lineHeight: 1.7,
    color: "rgba(248, 250, 252, 0.9)",
    maxWidth: 640,
    marginBottom: 28,
  },

  description: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "rgba(248, 250, 252, 0.85)",
    maxWidth: 680,
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 28px 0",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: "1.05rem",
    fontWeight: 500,
    lineHeight: 1.6,
  },

  check: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: "#4ade80",
    color: "#064e3b",
    fontWeight: 900,
    fontSize: "0.85rem",
    flexShrink: 0,
  },
};
