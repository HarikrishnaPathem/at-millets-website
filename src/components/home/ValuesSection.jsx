import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { LuHeartHandshake } from "react-icons/lu";
import { PiPottedPlant } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { useLanguage } from "../../i18n/LanguageContext";

// Mock translation

/* =========================================================
   VALUES SECTION - RESPONSIVE GRID LAYOUT
========================================================= */

const ValuesSection = () => {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  // Use react-responsive for breakpoints
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const VALUES = [
    {
      id: "integrity",
      icon: <LuHeartHandshake size={isMobile ? 28 : 32} />,
      title: t("home.values.integrity.title"),
      desc: t("home.values.integrity.desc"),
      gradient: "linear-gradient(135deg, #3c8b65, #2d7a54)",
    },
    {
      id: "land",
      icon: <PiPottedPlant size={isMobile ? 28 : 32} />,
      title: t("home.values.land.title"),
      desc: t("home.values.land.desc"),
      gradient: "linear-gradient(135deg, #78c29a, #5fb584)",
    },
    {
      id: "purity",
      icon: <BsStars size={isMobile ? 28 : 32} />,
      title: t("home.values.purity.title"),
      desc: t("home.values.purity.desc"),
      gradient: "linear-gradient(135deg, #4ea875, #3c8b65)",
    },
    {
      id: "growth",
      icon: <GiEarthAsiaOceania size={isMobile ? 28 : 32} />,
      title: t("home.values.growth.title"),
      desc: t("home.values.growth.desc"),
      gradient: "linear-gradient(135deg, #5fb584, #4ea875)",
    },
  ];

  return (
    <section ref={sectionRef} style={styles.wrapper}>
      {/* Animated Background Elements */}
      {!isMobile && (
        <>
          <motion.div style={{ ...styles.bgOrb1, y: y1 }} />
          <motion.div style={{ ...styles.bgOrb2, y: y2 }} />
          <FloatingShapes />
        </>
      )}

      <div
        style={{
          ...styles.container,
          padding: isMobile ? "0 24px" : isTablet ? "0 40px" : "0 60px",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            ...styles.header,
            marginBottom: isMobile ? 60 : isTablet ? 80 : 100,
          }}
        >
          <motion.span
            style={styles.eyebrow}
            whileHover={isMobile ? {} : { scale: 1.05 }}
          >
            <motion.span
              style={styles.dot}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {t("home.values.eyebrow")}
          </motion.span>

          <h2
            style={{
              ...styles.title,
              fontSize: isMobile ? "2.2rem" : isTablet ? "3rem" : "4.5rem",
            }}
          >
            {t("home.values.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("home.values.titleAccent")}
              <motion.div
                style={styles.titleUnderline}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>

          <p
            style={{
              ...styles.subtitle,
              fontSize: isMobile ? "1rem" : "1.15rem",
            }}
          >
            {t("home.values.subtitle")}
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : isTablet ? "32px" : "40px",
            marginBottom: isMobile ? 80 : 120,
          }}
        >
          {VALUES.map((value, i) => (
            <ValueCard
              key={value.id}
              value={value}
              index={i}
              isHovered={hovered === i}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            ...styles.closing,
            gap: isMobile ? 28 : 40,
          }}
        >
          <div
            style={{
              ...styles.dividerContainer,
              maxWidth: isMobile ? "100%" : 600,
            }}
          >
            <motion.div
              style={styles.dividerLine}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <div style={styles.dividerDots}>
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  style={styles.dividerDot}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
            <motion.div
              style={styles.dividerLine}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <p
            style={{
              ...styles.closingText,
              fontSize: isMobile ? "1.05rem" : "1.2rem",
            }}
          >
            {t("home.values.closing")}
          </p>

          <motion.div
            style={{
              ...styles.badge,
              padding: isMobile ? "14px 32px" : "16px 40px",
              fontSize: isMobile ? "0.85rem" : "0.95rem",
            }}
            whileHover={isMobile ? {} : { scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t("home.values.badge")}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;

/* =========================================================
   VALUE CARD COMPONENT
========================================================= */

const ValueCard = ({
  value,
  index,
  isHovered,
  onHoverStart,
  onHoverEnd,
  isMobile,
  isTablet,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.15 + index * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={isMobile ? {} : { y: -12, scale: 1.02 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{
        ...styles.card,
        padding: isMobile ? "32px 28px" : isTablet ? "40px 32px" : "48px 40px",
        minHeight: isMobile ? "auto" : "320px",
        background: isHovered
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.75)",
        boxShadow: isHovered
          ? "0 40px 100px rgba(60,139,101,0.25)"
          : "0 15px 40px rgba(60,139,101,0.1)",
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        style={{
          ...styles.cardGradient,
          background: value.gradient,
        }}
        animate={{
          opacity: isHovered ? 0.15 : 0.08,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Corner accent - hide on mobile */}
      {!isMobile && (
        <motion.div
          style={styles.cornerAccent}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? [0, 180, 360] : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <svg
            width={isTablet ? "32" : "40"}
            height={isTablet ? "32" : "40"}
            viewBox="0 0 40 40"
          >
            <circle
              cx="20"
              cy="20"
              r="15"
              fill="none"
              stroke="#78c29a"
              strokeWidth="2"
              opacity="0.3"
            />
            <circle cx="20" cy="20" r="10" fill="#3c8b65" opacity="0.2" />
          </svg>
        </motion.div>
      )}

      <div style={styles.cardInner}>
        {/* Icon with animated background */}
        <motion.div
          style={{
            ...styles.iconWrap,
            width: isMobile ? 64 : 80,
            height: isMobile ? 64 : 80,
            background: value.gradient,
            marginBottom: isMobile ? 20 : 28,
          }}
          animate={
            isHovered && !isMobile
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }
              : {}
          }
          transition={{ duration: 0.6 }}
        >
          <motion.div
            style={styles.iconInner}
            animate={isHovered && !isMobile ? { rotate: 360 } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {value.icon}
          </motion.div>
        </motion.div>

        <h4
          style={{
            ...styles.cardTitle,
            fontSize: isMobile ? "1.25rem" : isTablet ? "1.35rem" : "1.5rem",
          }}
        >
          {value.title}
        </h4>

        <p
          style={{
            ...styles.cardDesc,
            fontSize: isMobile ? "0.95rem" : "1.05rem",
          }}
        >
          {value.desc}
        </p>

        {/* Animated accent line */}
        <motion.div
          style={styles.cardAccentLine}
          initial={{ scaleX: 0 }}
          animate={isHovered && !isMobile ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Particle effect on hover - desktop only */}
        {isHovered && !isMobile && <CardParticles />}
      </div>
    </motion.div>
  );
};

/* =========================================================
   FLOATING SHAPES BACKGROUND
========================================================= */

const FloatingShapes = () => {
  const shapes = [
    { type: "circle", size: 80, x: "10%", y: "15%", duration: 20 },
    { type: "square", size: 60, x: "85%", y: "20%", duration: 25 },
    { type: "triangle", size: 70, x: "15%", y: "75%", duration: 22 },
    { type: "circle", size: 50, x: "90%", y: "80%", duration: 18 },
  ];

  return (
    <div style={styles.shapesContainer}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            opacity: 0.08,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3c8b65, #78c29a)",
              }}
            />
          )}
          {shape.type === "square" && (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20%",
                background: "linear-gradient(135deg, #78c29a, #3c8b65)",
                transform: "rotate(45deg)",
              }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid #3c8b65`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

/* =========================================================
   CARD PARTICLES
========================================================= */

const CardParticles = () => {
  const particles = Array.from({ length: 8 });

  return (
    <div style={styles.particleLayer}>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#78c29a",
            left: "50%",
            top: "50%",
          }}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((i * Math.PI * 2) / 8) * 100,
            y: Math.sin((i * Math.PI * 2) / 8) * 100,
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "140px 0 160px",
    background:
      "linear-gradient(180deg, #fffef9 0%, #f9fdf8 50%, #f4faf6 100%)",
    overflow: "hidden",
  },

  bgOrb1: {
    position: "absolute",
    top: "10%",
    right: "-10%",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(120, 194, 154, 0.15), transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },

  bgOrb2: {
    position: "absolute",
    bottom: "5%",
    left: "-10%",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(60, 139, 101, 0.12), transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },

  shapesContainer: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
  },

  container: {
    position: "relative",
    maxWidth: 1340,
    margin: "0 auto",
    zIndex: 2,
  },

  header: {
    maxWidth: 700,
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: "0.75rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "#3c8b65",
    fontWeight: 700,
    padding: "10px 24px",
    borderRadius: 50,
    background: "rgba(60,139,101,0.1)",
    border: "2px solid rgba(60,139,101,0.2)",
    marginBottom: 28,
    cursor: "pointer",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#78c29a",
  },

  title: {
    fontWeight: 900,
    lineHeight: 1.08,
    color: "#0d2817",
    marginBottom: 28,
    letterSpacing: "-0.03em",
  },

  titleAccent: {
    position: "relative",
    display: "inline-block",
    background:
      "linear-gradient(135deg, #2d7a54 0%, #3c8b65 50%, #78c29a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  titleUnderline: {
    position: "absolute",
    bottom: -10,
    left: 0,
    right: 0,
    height: 10,
    background:
      "linear-gradient(90deg, rgba(120, 194, 154, 0.4), rgba(60, 139, 101, 0.2))",
    borderRadius: 5,
    transformOrigin: "left",
  },

  subtitle: {
    lineHeight: 1.8,
    color: "#3f5f4f",
    fontWeight: 400,
  },

  grid: {
    display: "grid",
  },

  card: {
    position: "relative",
    borderRadius: 32,
    border: "2px solid rgba(60,139,101,0.15)",
    backdropFilter: "blur(20px)",
    overflow: "hidden",
    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "pointer",
  },

  cardGradient: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    transition: "all 0.4s ease",
  },

  cornerAccent: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },

  cardInner: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  iconWrap: {
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 30px rgba(60, 139, 101, 0.3)",
    transition: "all 0.3s ease",
  },

  iconInner: {
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 16,
    letterSpacing: "-0.01em",
  },

  cardDesc: {
    lineHeight: 1.7,
    color: "#5f8f75",
    flex: 1,
  },

  cardAccentLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 5,
    background: "linear-gradient(90deg, #3c8b65, #78c29a)",
    transformOrigin: "left",
  },

  particleLayer: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },

  closing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 800,
    margin: "0 auto",
  },

  dividerContainer: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },

  dividerLine: {
    flex: 1,
    height: 2,
    background: "linear-gradient(90deg, transparent, #78c29a, transparent)",
    transformOrigin: "center",
  },

  dividerDots: {
    display: "flex",
    gap: 10,
  },

  dividerDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#3c8b65",
  },

  closingText: {
    fontWeight: 500,
    color: "#0d2817",
    lineHeight: 1.8,
  },

  badge: {
    borderRadius: 50,
    background: "linear-gradient(135deg, #3c8b65, #2d7a54)",
    color: "#ffffff",
    fontWeight: 700,
    letterSpacing: "0.02em",
    boxShadow: "0 12px 35px rgba(60, 139, 101, 0.4)",
    cursor: "pointer",
  },
};
