import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import arakuImage from "../../assets/images/tribal_farmers.jpg";

/* =========================================================
   COMPANY BACKGROUND – ABOUT US
========================================================= */
import { useMediaQuery } from "react-responsive";

/* =========================================================
   COMPANY BACKGROUND – ABOUT US (RESPONSIVE)
========================================================= */

const CompanyBackgroundSection = () => {
  const { t } = useLanguage();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isTablet || isMobile ? "1fr" : "1.1fr 1fr",
          gap: isMobile ? 48 : isTablet ? 64 : 96,
          padding: isMobile ? "0 20px" : "0 48px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* TEXT CONTENT */}
        <motion.div
          style={{
            ...styles.content,
            margin: isMobile ? "0 auto" : "0",
          }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            style={{
              ...styles.eyebrow,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <span style={styles.dot}>●</span>
            {t("about.background.eyebrow")}
          </span>

          <h2
            style={{
              ...styles.title,
              fontSize: isMobile
                ? "clamp(2rem, 8vw, 2.6rem)"
                : "clamp(2.6rem,4.5vw,3.8rem)",
            }}
          >
            {t("about.background.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("about.background.titleAccent")}
            </span>
          </h2>

          <p style={styles.text}>{t("about.background.paragraph1")}</p>
          <p style={styles.text}>{t("about.background.paragraph2")}</p>

          <div
            style={{
              ...styles.highlight,
              textAlign: isMobile ? "left" : "left",
            }}
          >
            {t("about.background.highlight")}
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          style={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={arakuImage}
            alt={t("about.background.imageAlt")}
            style={{
              ...styles.image,
              height: isMobile ? 280 : isTablet ? 360 : 420,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyBackgroundSection;

/* =========================================================
   STYLES – PREMIUM WHITE + GREEN
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    background: "linear-gradient(180deg,#ffffff 0%,#f9fdfb 100%)",
    padding: "160px 0",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 30%, rgba(120,194,154,0.12), transparent 55%), radial-gradient(circle at 80% 70%, rgba(60,139,101,0.1), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 48px",
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: 96,
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },

  content: {
    maxWidth: 560,
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

  dot: {
    fontSize: "0.5rem",
    color: "#78c29a",
  },

  title: {
    fontSize: "clamp(2.6rem,4.5vw,3.8rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
    marginBottom: 28,
    letterSpacing: "-0.02em",
  },
  image: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
    borderRadius: "24px",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 24px 60px rgba(60,139,101,0.18)",
  },

  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  text: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#3f5f4f",
    marginBottom: 22,
  },

  highlight: {
    marginTop: 28,
    padding: "16px 22px",
    background: "rgba(60,139,101,0.08)",
    borderLeft: "4px solid #3c8b65",
    borderRadius: 8,
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#0d2817",
  },

  imageWrap: {
    position: "relative",
  },

  imagePlaceholder: {
    width: "100%",
    height: 420,
    borderRadius: 24,
    background: "linear-gradient(135deg,#e6f4ec,#d8efe3,#c6e7d6)",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 24px 60px rgba(60,139,101,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  imageText: {
    fontSize: "0.85rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#3c8b65",
    fontWeight: 700,
  },
};
