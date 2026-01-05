import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import soilImage from "../../assets/images/soil_health.jpg";
import waterImage from "../../assets/images/water_conservation.jpg";
import farmersImage from "../../assets/images/sustainable_farming.jpg";

/* =========================================================
   COMMITMENT TO SUSTAINABILITY
========================================================= */

const CommitmentSustainabilitySection = () => {
  const { t } = useLanguage();

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div style={styles.container}>
        {/* IMAGE GRID */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={styles.imageGrid}
        >
          <img
            src={soilImage}
            alt={t("about.sustainability.images.soil")}
            style={styles.imageLarge}
          />
          <img
            src={waterImage}
            alt={t("about.sustainability.images.water")}
            style={styles.imageSmall}
          />
          <img
            src={farmersImage}
            alt={t("about.sustainability.images.farmers")}
            style={styles.imageSmall}
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.content}
        >
          <span style={styles.eyebrow}>
            <span style={styles.dot}>●</span>
            {t("about.sustainability.eyebrow")}
          </span>

          <h2 style={styles.title}>
            {t("about.sustainability.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("about.sustainability.titleAccent")}
            </span>
          </h2>

          <p style={styles.text}>{t("about.sustainability.description")}</p>

          {/* PILLARS */}
          <div style={styles.pillars}>
            <div style={styles.pillar}>
              <h4 style={styles.pillarTitle}>
                {t("about.sustainability.pillars.soil.title")}
              </h4>
              <p style={styles.pillarText}>
                {t("about.sustainability.pillars.soil.text")}
              </p>
            </div>

            <div style={styles.pillar}>
              <h4 style={styles.pillarTitle}>
                {t("about.sustainability.pillars.water.title")}
              </h4>
              <p style={styles.pillarText}>
                {t("about.sustainability.pillars.water.text")}
              </p>
            </div>

            <div style={styles.pillar}>
              <h4 style={styles.pillarTitle}>
                {t("about.sustainability.pillars.community.title")}
              </h4>
              <p style={styles.pillarText}>
                {t("about.sustainability.pillars.community.text")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentSustainabilitySection;

const styles = {
  wrapper: {
    position: "relative",
    padding: "160px 0",
    background: "linear-gradient(180deg,#ffffff 0%,#f9fdfb 100%)",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 15% 25%, rgba(120,194,154,0.14), transparent 55%), radial-gradient(circle at 85% 70%, rgba(60,139,101,0.12), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 48px",
    display: "grid",
    gridTemplateColumns: "1fr 1.1fr",
    gap: 96,
    alignItems: "center",
  },

  imageGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: 20,
  },

  imageLarge: {
    gridRow: "span 2",
    width: "100%",
    height: 460,
    objectFit: "cover",
    borderRadius: 24,
    boxShadow: "0 24px 60px rgba(60,139,101,0.18)",
  },

  imageSmall: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    borderRadius: 20,
    boxShadow: "0 16px 40px rgba(60,139,101,0.14)",
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
    marginBottom: 36,
  },

  pillars: {
    display: "grid",
    gap: 24,
  },

  pillar: {
    padding: "20px 24px",
    background: "rgba(255,255,255,0.8)",
    borderRadius: 18,
    border: "1px solid rgba(60,139,101,0.12)",
    boxShadow: "0 8px 28px rgba(60,139,101,0.1)",
  },

  pillarTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#0d2817",
    marginBottom: 10,
  },

  pillarText: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
  },
};
