import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { useMediaQuery } from "react-responsive";
import { Eye, Target } from "lucide-react";

/* =========================================================
   VISION & MISSION – RESPONSIVE
========================================================= */

const VisionMissionSection = () => {
  const { t } = useLanguage();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          padding: isMobile ? "0 20px" : "0 32px",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            ...styles.header,
            marginBottom: isMobile ? 56 : 80,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <span
            style={{
              ...styles.eyebrow,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <span style={styles.dot}>●</span>
            {t("about.visionMission.eyebrow")}
          </span>

          <h2
            style={{
              ...styles.title,
              fontSize: isMobile
                ? "clamp(2rem, 8vw, 2.6rem)"
                : "clamp(2.4rem, 4.5vw, 3.6rem)",
            }}
          >
            {t("about.visionMission.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("about.visionMission.titleAccent")}
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            ...styles.cards,
            gap: isMobile ? 24 : 32,
          }}
        >
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              ...styles.card,
              padding: isMobile ? "32px 28px" : "40px 36px",
            }}
          >
            <div style={styles.iconWrap}>
              <Eye size={isMobile ? 24 : 28} color="#3c8b65" />
            </div>

            <h3 style={styles.cardTitle}>
              {t("about.visionMission.vision.title")}
            </h3>

            <p style={styles.cardText}>
              {t("about.visionMission.vision.text")}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            style={{
              ...styles.card,
              padding: isMobile ? "32px 28px" : "40px 36px",
            }}
          >
            <div style={styles.iconWrap}>
              <Target size={isMobile ? 24 : 28} color="#3c8b65" />
            </div>

            <h3 style={styles.cardTitle}>
              {t("about.visionMission.mission.title")}
            </h3>

            <p style={styles.cardText}>
              {t("about.visionMission.mission.text")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "140px 0",
    background: "#ffffff",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 30%, rgba(120,194,154,0.15), transparent 55%), radial-gradient(circle at 80% 70%, rgba(60,139,101,0.12), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 32px",
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

  dot: {
    fontSize: "0.5rem",
    color: "#78c29a",
  },

  title: {
    fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
  },

  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 32,
  },

  card: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: 24,
    padding: "40px 36px",
    border: "1px solid rgba(60,139,101,0.12)",
    boxShadow: "0 12px 40px rgba(60,139,101,0.1)",
  },

  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "rgba(60,139,101,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 16,
  },

  cardText: {
    fontSize: "1rem",
    lineHeight: 1.8,
    color: "#3f5f4f",
  },
};
