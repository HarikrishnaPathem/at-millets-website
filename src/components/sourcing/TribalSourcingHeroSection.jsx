import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { useMediaQuery } from "react-responsive";
import tribalImage from "../../assets/images/tribal_sourcing_hero.jpg";

/* =========================================================
   TRIBAL SOURCING – HERO SECTION (RESPONSIVE)
========================================================= */

const TribalSourcingHeroSection = () => {
  const { t } = useLanguage();

  // 🔹 Breakpoints using react-responsive
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isDesktop ? "1.1fr 1fr" : "1fr",
          gap: isDesktop ? 80 : 48,
        }}
      >
        {/* TEXT */}
        <motion.div
          style={{
            ...styles.content,
            textAlign: isDesktop ? "left" : "center",
            margin: isDesktop ? "0" : "0 auto",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            style={{
              ...styles.eyebrow,
              justifyContent: isDesktop ? "flex-start" : "center",
            }}
          >
            <span style={styles.dot}>●</span>
            {t("tribal.hero.eyebrow")}
          </span>

          <h1
            style={{
              ...styles.title,
              fontSize: isDesktop
                ? "clamp(2.8rem,5vw,4.2rem)"
                : "clamp(2.2rem,7vw,3rem)",
            }}
          >
            {t("tribal.hero.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("tribal.hero.titleAccent")}
            </span>
          </h1>

          <p
            style={{
              ...styles.subtitle,
              maxWidth: isDesktop ? "100%" : 560,
              margin: isDesktop ? "0" : "0 auto",
            }}
          >
            {t("tribal.hero.subtitle")}
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          style={{
            ...styles.imageWrap,
            justifySelf: isDesktop ? "auto" : "center",
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={isDesktop ? { scale: 1.04 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={tribalImage}
            alt={t("tribal.hero.imageAlt")}
            style={{
              ...styles.image,
              height: isDesktop ? 440 : 320,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TribalSourcingHeroSection;

/* =========================================================
   STYLES – PREMIUM WHITE + GREEN
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "clamp(96px, 12vw, 160px) 0",
    background: "linear-gradient(180deg,#ffffff 0%,#f9fdfb 100%)",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 30%, rgba(120,194,154,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(60,139,101,0.14), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
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
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
    marginBottom: 28,
    letterSpacing: "-0.02em",
  },

  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#3f5f4f",
  },

  imageWrap: {
    position: "relative",
  },

  image: {
    width: "100%",
    maxWidth: 520,
    objectFit: "cover",
    borderRadius: 28,
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 30px 70px rgba(60,139,101,0.22)",
  },
};
