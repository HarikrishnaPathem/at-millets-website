import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";

/* =========================================================
   SLIDES CONFIG
========================================================= */

const SLIDES = [
  { key: "farmers" },
  { key: "cultivation" },
  { key: "processing" },
  { key: "quality" },
  { key: "delivery" },
];

/* =========================================================
   COMPONENT
========================================================= */

const SlideshowNarrativeSection = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  /* AUTO SLIDE (DISABLED ON MOBILE) */
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section
      style={{
        ...styles.wrapper,
        padding: isMobile ? "100px 0" : "160px 0",
      }}
    >
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          padding: isMobile ? "0 20px" : "0 48px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            ...styles.header,
            marginBottom: isMobile ? 60 : 80,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <span style={styles.eyebrow}>
            <span style={styles.dot}>●</span>
            {t("home.narrative.eyebrow")}
          </span>

          <h2
            style={{
              ...styles.title,
              fontSize: isMobile ? "2.1rem" : "clamp(2.4rem,4.5vw,3.8rem)",
            }}
          >
            {t("home.narrative.title")}
            <br />
            <span style={styles.titleAccent}>
              {t("home.narrative.titleAccent")}
            </span>
          </h2>
        </div>

        {/* SLIDES */}
        <div style={styles.slider}>
          <AnimatePresence mode="wait">
            <motion.div
              key={SLIDES[active].key}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                ...styles.slide,
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 40 : 80,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {/* LEFT */}
              <div
                style={{
                  ...styles.textBlock,
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                <span style={styles.step}>
                  {t(`home.narrative.slides.${SLIDES[active].key}.step`)}
                </span>

                <h3
                  style={{
                    ...styles.slideTitle,
                    fontSize: isMobile ? "1.6rem" : "2.2rem",
                  }}
                >
                  {t(`home.narrative.slides.${SLIDES[active].key}.title`)}
                </h3>

                <p
                  style={{
                    ...styles.slideText,
                    fontSize: isMobile ? "0.95rem" : "1.05rem",
                    maxWidth: isMobile ? "100%" : 520,
                  }}
                >
                  {t(`home.narrative.slides.${SLIDES[active].key}.text`)}
                </p>
              </div>

              {/* RIGHT VISUAL */}
              <div
                style={{
                  ...styles.visual,
                  height: isMobile ? 240 : 360,
                  marginTop: isMobile ? 24 : 0,
                }}
              >
                <motion.div
                  style={{
                    ...styles.visualCircle,
                    width: isMobile ? 240 : 360,
                    height: isMobile ? 240 : 360,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div
                  style={{
                    ...styles.visualInner,
                    width: isMobile ? 160 : 240,
                    height: isMobile ? 160 : 240,
                  }}
                >
                  <span style={styles.visualLabel}>
                    {t(`home.narrative.slides.${SLIDES[active].key}.label`)}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div
          style={{
            ...styles.controls,
            marginTop: isMobile ? 40 : 60,
          }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                ...styles.dotBtn,
                background:
                  i === active
                    ? "linear-gradient(135deg,#3c8b65,#78c29a)"
                    : "rgba(60,139,101,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideshowNarrativeSection;

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    background: "#ffffff",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 25% 30%, rgba(120,194,154,0.16), transparent 55%), radial-gradient(circle at 75% 70%, rgba(60,139,101,0.12), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  header: {
    maxWidth: 640,
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
  },

  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  slider: {
    position: "relative",
  },

  slide: {
    display: "grid",
    alignItems: "center",
  },

  textBlock: {
    display: "flex",
    flexDirection: "column",
  },

  step: {
    fontSize: "0.75rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#5f8f75",
    fontWeight: 700,
  },

  slideTitle: {
    fontWeight: 800,
    margin: "18px 0",
    color: "#0d2817",
  },

  slideText: {
    lineHeight: 1.75,
    color: "#3f5f4f",
  },

  visual: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  visualCircle: {
    position: "absolute",
    borderRadius: "50%",
    border: "2px dashed rgba(60,139,101,0.25)",
  },

  visualInner: {
    borderRadius: "50%",
    background: "linear-gradient(135deg,#e6f4ec,#d8efe3,#c6e7d6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 20px 50px rgba(60,139,101,0.25)",
  },

  visualLabel: {
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#0d2817",
    fontSize: "0.75rem",
  },

  controls: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
  },

  dotBtn: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  },
};
