import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import farmer1 from "../../assets/images/tribal_farmer_1.jpg";
import farmer2 from "../../assets/images/tribal_farmer_2.jpg";
import millet from "../../assets/images/millets_closeup.jpg";

/* =========================================================
   DIRECT TRIBAL SOURCING SECTION
========================================================= */

const IMAGES = [
  { id: 1, src: farmer1 },
  { id: 2, src: farmer2 },
  { id: 3, src: millet },
];

const DirectTribalSourcingSection = () => {
  const { t } = useLanguage();

  // 🔹 react-responsive breakpoints
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });

  // image stacking order (front = index 0)
  const [stack, setStack] = useState(IMAGES);

  // prevent accidental rapid swaps
  const swapLockRef = useRef(false);

  const bringToFront = (id) => {
    if (swapLockRef.current) return;

    setStack((prev) => {
      if (prev[0].id === id) return prev;

      const selected = prev.find((img) => img.id === id);
      const rest = prev.filter((img) => img.id !== id);

      return [selected, ...rest];
    });

    // lock swaps for 5 seconds
    swapLockRef.current = true;
    setTimeout(() => {
      swapLockRef.current = false;
    }, 5000);
  };

  /* =========================================================
     AUTO SWAP (MOBILE + TABLET ONLY)
  ========================================================= */

  useEffect(() => {
    if (!isMobileOrTablet) return;

    const interval = setInterval(() => {
      setStack((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobileOrTablet]);

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isDesktop ? "1.1fr 1fr" : "1fr",
        }}
      >
        {/* TEXT SIDE */}
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span style={styles.eyebrow}>
            <span style={styles.dot}>●</span>
            {t("tribal.direct.eyebrow")}
          </span>

          <h2 style={styles.title}>
            {t("tribal.direct.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("tribal.direct.titleAccent")}
            </span>
          </h2>

          <p style={styles.text}>{t("tribal.direct.paragraph1")}</p>
          <p style={styles.text}>{t("tribal.direct.paragraph2")}</p>

          <div style={styles.pointList}>
            <div>✓ {t("tribal.direct.points.noMiddlemen")}</div>
            <div>✓ {t("tribal.direct.points.fairPricing")}</div>
            <div>✓ {t("tribal.direct.points.longTerm")}</div>
          </div>
        </motion.div>

        {/* IMAGE STACK */}
        <div style={styles.images}>
          {stack.map((img, index) => (
            <motion.img
              key={img.id}
              layout
              layoutId={`tribal-image-${img.id}`}
              src={img.src}
              alt={t("tribal.direct.imageAlt")}
              style={{
                ...styles.image,
                top: index * 40,
                left: index * 40,
                zIndex: 10 - index,
                scale: index === 0 ? 1 : 0.96,
              }}
              transition={{
                layout: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              whileHover={
                isDesktop
                  ? {
                      scale: 1.04,
                      y: -8,
                    }
                  : {}
              }
              onHoverStart={() => {
                if (isDesktop) bringToFront(img.id);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectTribalSourcingSection;

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "clamp(96px, 12vw, 160px) 0",
    background: "#ffffff",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 15% 30%, rgba(120,194,154,0.12), transparent 55%), radial-gradient(circle at 85% 70%, rgba(60,139,101,0.1), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gap: 56,
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
    fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
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
    marginBottom: 20,
  },

  pointList: {
    marginTop: 24,
    display: "grid",
    gap: 10,
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#0d2817",
  },

  images: {
    position: "relative",
    height: 420,
    display: "flex",
    justifyContent: "center",
  },

  image: {
    position: "absolute",
    width: "min(70vw, 480px)",
    height: "min(60vw, 360px)",
    objectFit: "cover",
    borderRadius: 24,
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 30px 70px rgba(60,139,101,0.25)",
    cursor: "pointer",
    background: "#fff",
  },
};
