import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";
import heroImage from "../../assets/images/sunset_shop.png";
import { TrendingUp, Users, Award } from "lucide-react";

const BusinessHero = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const highlights =
    t("business.hero.highlights", { returnObjects: true }) || [];

  return (
    <section style={styles.wrapper}>
      {/* Background */}
      <motion.div
        style={styles.bgWrapper}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <img src={heroImage} alt="AT Millets Business" style={styles.bg} />
      </motion.div>

      {/* Overlays */}
      <div style={styles.overlayGradient} />
      <div style={styles.overlayTexture} />

      {/* Content */}
      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isTablet ? "1fr" : "1fr auto",
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          style={{
            ...styles.content,
            background: "rgba(0,0,0,0.28)",
            backdropFilter: "blur(6px)",
            borderRadius: 20,
            padding: isMobile ? "20px" : "28px",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              ...styles.title,
              fontSize: isMobile
                ? "2rem"
                : isTablet
                ? "2.8rem"
                : "clamp(3rem, 4vw, 4.2rem)",
            }}
          >
            {t("business.hero.titleMain")}{" "}
            <span style={styles.titleAccent}>
              {t("business.hero.titleAccent")}
            </span>
          </h1>

          <p style={styles.subtitle}>{t("business.hero.subtitle")}</p>

          {Array.isArray(highlights) && (
            <ul style={styles.list}>
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  style={styles.listItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.12 }}
                >
                  <span style={styles.checkmark}>✓</span>
                  <span style={styles.listText}>{item}</span>
                </motion.li>
              ))}
            </ul>
          )}

          <p style={styles.description}>{t("business.hero.description")}</p>
        </motion.div>

        {/* RIGHT STATS */}
        {!isMobile && (
          <motion.div
            style={styles.statsContainer}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <StatCard icon={<TrendingUp />} value="250+" label="Partners" />
            <StatCard icon={<Users />} value="50K+" label="Customers" />
            <StatCard icon={<Award />} value="98%" label="Success Rate" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BusinessHero;

/* =========================
   STAT CARD
========================= */
const StatCard = ({ icon, value, label }) => (
  <motion.div
    style={styles.statCard}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <div style={styles.statIcon}>{icon}</div>
    <div style={styles.statValue}>{value}</div>
    <div style={styles.statLabel}>{label}</div>
  </motion.div>
);

/* =========================
   STYLES
========================= */
const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    paddingTop: 140, // safe for floating header
    paddingBottom: 80,
    overflow: "hidden",
  },

  bgWrapper: {
    position: "absolute",
    inset: 0,
  },

  bg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.85) contrast(1.1) saturate(1.1)",
  },

  overlayGradient: {
    position: "absolute",
    inset: 0,
    background: `
      linear-gradient(
        180deg,
        rgba(10,18,16,0.92) 0%,
        rgba(10,18,16,0.75) 40%,
        rgba(10,18,16,0.55) 70%,
        rgba(10,18,16,0.35) 100%
      )
    `,
    zIndex: 1,
  },

  overlayTexture: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 2px)",
    opacity: 0.4,
    zIndex: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1400,
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gap: 60,
    alignItems: "center",
  },

  content: {
    color: "#fff",
  },

  title: {
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: 20,
    textShadow: "0 6px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)",
  },

  titleAccent: {
    background:
      "linear-gradient(135deg, #bbf7d0 0%, #4ade80 40%, #22c55e 70%, #16a34a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow: "0 0 18px rgba(74, 222, 128, 0.65)", // glow for readability
  },

  subtitle: {
    fontSize: "1.1rem",
    marginBottom: 32,
    color: "rgba(255,255,255,0.95)",
    textShadow: "0 3px 12px rgba(0,0,0,0.7)",
  },

  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: 32,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "12px 16px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: 12,
  },

  checkmark: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "#22c55e",
    color: "#064e3b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
  },

  listText: {
    fontSize: "1rem",
    color: "rgba(255,255,255,0.96)",
    textShadow: "0 2px 8px rgba(0,0,0,0.6)",
  },

  description: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.88)",
    textShadow: "0 2px 6px rgba(0,0,0,0.6)",
  },

  statsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  statCard: {
    background: "rgba(255,255,255,0.12)",
    padding: 24,
    borderRadius: 20,
    backdropFilter: "blur(16px)",
    minWidth: 200,
  },

  statIcon: {
    color: "#86efac",
    marginBottom: 12,
  },

  statValue: {
    fontSize: "2.4rem",
    fontWeight: 900,
  },

  statLabel: {
    fontSize: "0.9rem",
    opacity: 0.85,
  },
};
