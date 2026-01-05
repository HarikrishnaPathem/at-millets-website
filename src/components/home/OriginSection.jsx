import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { Trees, HeartHandshake, Brain } from "lucide-react";
import arakuImg from "../../assets/images/araku_valley.jpg";

/* =========================================================
   BREAKPOINT HOOK
========================================================= */

const useBreakpoint = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    isMobile: width <= 768,
    isTablet: width <= 1024,
  };
};

/* =========================================================
   ORIGIN SECTION
========================================================= */

const OriginSection = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const { t } = useLanguage();

  return (
    <section style={styles.wrapper}>
      <div style={styles.backgroundGradient} />
      <div style={styles.particleLayer} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isTablet ? "1fr" : "1.1fr 1fr",
          gap: isTablet ? "64px" : "100px",
          padding: isMobile ? "0 24px" : "0 48px",
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: isTablet ? "100%" : "560px" }}
        >
          <span style={styles.eyebrow}>
            <span style={styles.dot}>●</span>
            {t("home.origin.eyebrow")}
          </span>

          <h2
            style={{
              ...styles.title,
              fontSize: isMobile
                ? "clamp(1.9rem, 7vw, 2.6rem)"
                : "clamp(2.4rem, 4vw, 3.6rem)",
            }}
          >
            {t("home.origin.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("home.origin.titleAccent")}
            </span>
          </h2>

          <p
            style={{
              ...styles.text,
              fontSize: isMobile ? "0.95rem" : "1.05rem",
            }}
          >
            {t("home.origin.description")}
          </p>

          <div style={{ ...styles.pillars, gap: isMobile ? 12 : 16 }}>
            {[
              {
                icon: <Trees />,
                title: t("home.origin.pillars.direct.title"),
                desc: t("home.origin.pillars.direct.desc"),
              },
              {
                icon: <HeartHandshake />,
                title: t("home.origin.pillars.partnership.title"),
                desc: t("home.origin.pillars.partnership.desc"),
              },
              {
                icon: <Brain />,
                title: t("home.origin.pillars.knowledge.title"),
                desc: t("home.origin.pillars.knowledge.desc"),
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                style={{
                  ...styles.pillar,
                  padding: isMobile ? "16px 20px" : "20px 24px",
                }}
                whileHover={{
                  translateY: -4,
                  boxShadow: "0 10px 30px rgba(60,139,101,0.15)",
                }}
              >
                <div style={styles.pillarIcon}>{pillar.icon}</div>
                <div>
                  <h4 style={styles.pillarTitle}>{pillar.title}</h4>
                  <p style={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            style={{
              ...styles.badge,
              padding: isMobile ? "8px 16px" : "10px 22px",
            }}
          >
            {t("home.origin.badge")}
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            ...styles.visual,
            height: isMobile ? "320px" : isTablet ? "420px" : "520px",
          }}
        >
          <motion.div
            style={{
              ...styles.imageWrapper,
              width: isMobile ? "240px" : isTablet ? "300px" : "360px",
              height: isMobile ? "240px" : isTablet ? "300px" : "360px",
            }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* IMAGE */}
            <img src={arakuImg} alt="Araku Valley" style={styles.image} />

            {/* GOLD PULSATING RINGS */}
            <div style={styles.goldRingsContainer}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  style={styles.goldRing}
                  animate={{
                    opacity: [0.15, 0.45, 0.15],
                    scale: [0.98 + i * 0.06, 1.04 + i * 0.06, 0.98 + i * 0.06],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.9,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginSection;

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    background: "linear-gradient(180deg,#ffffff 0%,#f9fdfb 50%,#f2faf6 100%)",
    padding: "160px 0",
    overflow: "hidden",
  },

  backgroundGradient: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 30%, rgba(120,194,154,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(60,139,101,0.14), transparent 55%)",
  },

  particleLayer: {
    position: "absolute",
    inset: 0,
    background:
      "repeating-linear-gradient(45deg, rgba(120,194,154,0.04) 0 2px, transparent 2px 14px)",
    opacity: 0.25,
  },

  container: {
    position: "relative",
    maxWidth: 1280,
    margin: "0 auto",
    display: "grid",
    alignItems: "center",
    zIndex: 2,
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

  text: {
    lineHeight: 1.8,
    color: "#3f5f4f",
    marginBottom: 44,
  },

  pillars: {
    display: "grid",
    marginBottom: 36,
  },

  pillar: {
    display: "flex",
    gap: 16,
    borderRadius: 18,
    background: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(60,139,101,0.12)",
    backdropFilter: "blur(10px)",
  },

  pillarIcon: { fontSize: "1.6rem" },

  pillarTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#0d2817",
  },

  pillarDesc: {
    fontSize: "0.9rem",
    color: "#5f8f75",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    background: "linear-gradient(135deg,#3c8b65,#2d7a54)",
    color: "#ffffff",
    borderRadius: 30,
    fontSize: "0.85rem",
    fontWeight: 600,
    boxShadow: "0 6px 18px rgba(60,139,101,0.3)",
  },

  visual: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  imageWrapper: {
    position: "relative",
    borderRadius: "50%",
    overflow: "visible",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
    boxShadow: "0 18px 50px rgba(60,139,101,0.28)",
  },
  goldRingsContainer: {
    position: "absolute",
    inset: -14,
    pointerEvents: "none",
  },

  goldRing: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    padding: 2,
    background: "linear-gradient(135deg,#c9a24d,#f1d58a,#c9a24d)",
    WebkitMask:
      "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 2px))",
    mask: "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 2px))",
  },
};
