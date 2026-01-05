import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { useMediaQuery } from "react-responsive";
import { Mountain, Leaf, HeartPulse } from "lucide-react";
import arakuImage from "../../assets/images/araku_valley.jpg";

/* =========================================================
   WHY ARAKU & MILLETS
========================================================= */

const WhyArakuMilletsSection = () => {
  const { t } = useLanguage();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          padding: isMobile ? "0 20px" : "0 48px",
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            ...styles.header,
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
            {t("about.whyAraku.eyebrow")}
          </span>

          <h2 style={styles.title}>
            {t("about.whyAraku.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("about.whyAraku.titleAccent")}
            </span>
          </h2>

          <p style={styles.subtitle}>{t("about.whyAraku.subtitle")}</p>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={styles.imageWrap}
        >
          <img
            src={arakuImage}
            alt={t("about.whyAraku.imageAlt")}
            style={styles.image}
          />
        </motion.div>

        {/* CARDS */}
        <div style={styles.cards}>
          {/* Araku */}
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.iconWrap}>
              <Mountain size={28} color="#3c8b65" />
            </div>

            <h3 style={styles.cardTitle}>{t("about.whyAraku.araku.title")}</h3>

            <p style={styles.cardText}>{t("about.whyAraku.araku.text")}</p>
          </motion.div>

          {/* Millets */}
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <div style={styles.iconWrap}>
              <HeartPulse size={28} color="#3c8b65" />
            </div>

            <h3 style={styles.cardTitle}>
              {t("about.whyAraku.millets.title")}
            </h3>

            <p style={styles.cardText}>{t("about.whyAraku.millets.text")}</p>
          </motion.div>

          {/* Sustainability */}
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div style={styles.iconWrap}>
              <Leaf size={28} color="#3c8b65" />
            </div>

            <h3 style={styles.cardTitle}>
              {t("about.whyAraku.sustainability.title")}
            </h3>

            <p style={styles.cardText}>
              {t("about.whyAraku.sustainability.text")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyArakuMilletsSection;

const styles = {
  wrapper: {
    position: "relative",
    padding: "120px 0",
    background: "linear-gradient(180deg, #fafbfa 0%, #ffffff 100%)",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 30%, rgba(120,194,154,0.08), transparent 60%), radial-gradient(circle at 80% 70%, rgba(60,139,101,0.06), transparent 60%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1240,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  header: {
    maxWidth: 720,
    marginBottom: 64,
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: "0.75rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#3c8b65",
    fontWeight: 700,
    marginBottom: 20,
    padding: "10px 24px",
    background: "rgba(60,139,101,0.06)",
    borderRadius: 50,
    border: "1.5px solid rgba(60,139,101,0.2)",
  },

  dot: {
    fontSize: "0.6rem",
    color: "#78c29a",
  },

  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 900,
    lineHeight: 1.15,
    color: "#0d2817",
    marginBottom: 28,
    letterSpacing: "-0.02em",
  },

  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    fontSize: "1.1rem",
    lineHeight: 1.75,
    color: "#4a6657",
    fontWeight: 400,
  },

  imageWrap: {
    position: "relative",
    width: "100%",
    maxWidth: 560,
    margin: "0 auto 64px",
  },

  image: {
    width: "100%",
    height: 400,
    objectFit: "cover",
    borderRadius: 20,
    border: "1px solid rgba(60,139,101,0.2)",
    boxShadow: "0 20px 60px rgba(60,139,101,0.15), 0 4px 12px rgba(0,0,0,0.05)",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 28,
    marginTop: 48,
  },

  card: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    borderRadius: 20,
    padding: "44px 40px",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 8px 32px rgba(60,139,101,0.08), 0 2px 8px rgba(0,0,0,0.04)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(60,139,101,0.1), rgba(120,194,154,0.1))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    border: "1px solid rgba(60,139,101,0.15)",
  },

  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 16,
    letterSpacing: "-0.01em",
  },

  cardText: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#4a6657",
    fontWeight: 400,
  },
};
