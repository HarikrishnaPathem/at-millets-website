import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import heroVideoWebm from "../../assets/videos/hero-bg.webm";
import { useNavigate } from "react-router-dom";

// Mock Button component
const Button = ({ children, size, variant, fullWidth, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: size === "lg" ? "16px 40px" : "12px 28px",
      fontSize: size === "lg" ? "1.05rem" : "0.95rem",
      fontWeight: 600,
      border:
        variant === "secondary" ? "2px solid rgba(255, 255, 255, 0.7)" : "none",
      background:
        variant === "secondary"
          ? "rgba(15, 35, 28, 0.55)"
          : "linear-gradient(135deg, #3c8b65 0%, #2d7a54 100%)",
      color: variant === "secondary" ? "#ecfdf5" : "#fffef9",
      borderRadius: 12,
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      width: fullWidth ? "100%" : "auto",
      backdropFilter: variant === "secondary" ? "blur(6px)" : "none",
      boxShadow:
        variant === "secondary"
          ? "0 4px 16px rgba(0, 0, 0, 0.25)"
          : "0 4px 20px rgba(60, 139, 101, 0.25)",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "translateY(-2px)";
      e.target.style.boxShadow =
        variant === "secondary"
          ? "0 8px 28px rgba(0, 0, 0, 0.35)"
          : "0 8px 30px rgba(60, 139, 101, 0.35)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "translateY(0)";
      e.target.style.boxShadow =
        variant === "secondary"
          ? "0 4px 16px rgba(0, 0, 0, 0.25)"
          : "0 4px 20px rgba(60, 139, 101, 0.25)";
    }}
  >
    {children}
  </button>
);

// Mock translation function

/* =========================================================
   HERO SECTION
========================================================= */

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section style={styles.wrapper} data-dark>
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <source src={heroVideoWebm} type="video/webm" />
      </video>
      {/* Video overlay for contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,18,16,0.45) 0%, rgba(10,18,16,0.25) 40%, rgba(10,18,16,0.15) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Layered backgrounds */}
      <div style={styles.backgroundGradient} />
      <FloatingOrbs />
      <ParticleBackground />

      {isMobile ? (
        <MobileHero t={t} navigate={navigate} />
      ) : (
        <DesktopHero t={t} navigate={navigate} />
      )}

      {/* Bottom wave decoration */}
      <div style={styles.waveDecor}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={styles.waveSvg}
        >
          <path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="rgba(244, 250, 246, 0.8)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

/* =========================================================
   FLOATING ORBS (OPTIMIZED)
========================================================= */

const FloatingOrbs = () => {
  return (
    <div style={styles.orbContainer}>
      <motion.div
        style={{ ...styles.orb, ...styles.orb1 }}
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ ...styles.orb, ...styles.orb2 }}
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ ...styles.orb, ...styles.orb3 }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

/* =========================================================
   PARTICLE BACKGROUND (REDUCED COUNT)
========================================================= */

const ParticleBackground = () => {
  const particles = Array.from({ length: 35 });

  return (
    <div style={styles.particleLayer}>
      {particles.map((_, i) => {
        const size = 12 + (i % 4) * 6; // Varying sizes: 12, 18, 24, 30px
        return (
          <motion.div
            key={i}
            style={{
              ...styles.particle,
              width: size,
              height: size,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + (i % 6),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        );
      })}
    </div>
  );
};

/* =========================================================
   DESKTOP home.hero
========================================================= */

const DesktopHero = ({ t, navigate }) => {
  return (
    <motion.div
      style={styles.desktopContent}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span style={styles.eyebrow}>
          <span style={styles.eyebrowDot}>●</span>
          {t("home.hero.eyebrow")}
        </span>
      </motion.div>

      <motion.h1
        style={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t("home.hero.titleMain")}
        <br />
        <span style={styles.titleAccent}>
          {t("home.hero.titleAccent")}
          <span style={styles.accentUnderline} />
        </span>
      </motion.h1>

      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {t("home.hero.subtitle")}
      </motion.p>

      <motion.div
        style={styles.statsRow}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Stat value="1000+" label={t("home.hero.stats.farmers")} delay={0} />
        <Stat value="8" label={t("home.hero.stats.varieties")} delay={0.1} />
        <Stat value="100%" label={t("home.hero.stats.organic")} delay={0.2} />
      </motion.div>

      <motion.div
        style={styles.actions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <Button size="lg" onClick={() => navigate("/products")}>
          {t("home.hero.actions.explore")}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => navigate("/franchise")}
        >
          {t("home.hero.actions.partner")}
        </Button>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   MOBILE home.hero
========================================================= */

const MobileHero = ({ t, navigate }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={styles.mobileContent}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9 }}
    >
      <motion.span
        style={styles.mobileEyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span style={styles.eyebrowDot}>●</span>
        {t("home.hero.eyebrow")}
      </motion.span>

      <motion.h1
        style={styles.mobileTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {t("home.hero.titleMain")}
        <br />
        <span style={styles.titleAccent}>{t("home.hero.titleAccent")}</span>
      </motion.h1>

      <motion.p
        style={styles.mobileSubtitle}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {t("home.hero.subtitle")}
      </motion.p>

      <motion.div
        style={styles.mobileStats}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <MobileStat value="1000+" label={t("home.hero.stats.farmers")} />
        <MobileStat value="8" label={t("home.hero.stats.varieties")} />
        <MobileStat value="100%" label={t("home.hero.stats.organic")} />
      </motion.div>

      <motion.div
        style={styles.mobileActions}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <Button fullWidth onClick={() => navigate("/products")}>
          {t("home.hero.actions.explore")}
        </Button>
        <Button
          fullWidth
          onClick={() => navigate("/franchise")}
          variant="secondary"
        >
          {t("home.hero.actions.partner")}
        </Button>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   STATS WITH ANIMATION
========================================================= */

const Stat = ({ value, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={styles.stat}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: delay + 0.7, duration: 0.5 }}
    >
      <div style={styles.statCard}>
        <div style={styles.statValue}>{value}</div>
        <div style={styles.statLabel}>{label}</div>
      </div>
    </motion.div>
  );
};

const MobileStat = ({ value, label }) => (
  <div style={styles.mobileStat}>
    <div style={styles.mobileStatCard}>
      <strong style={styles.mobileStatValue}>{value}</strong>
      <span style={styles.mobileStatLabel}>{label}</span>
    </div>
  </div>
);

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    background: "#fffef9",
    overflow: "hidden",
  },

  backgroundGradient: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 50% 0%, rgba(120, 194, 154, 0.15) 0%, transparent 60%), linear-gradient(180deg, #fffef9 0%, #f9fdf8 50%, #f4faf6 100%)",
    zIndex: 0,
  },

  orbContainer: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 2,
  },

  orb: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    opacity: 0.4,
  },

  orb1: {
    width: 500,
    height: 500,
    background:
      "radial-gradient(circle, rgba(60, 139, 101, 0.3) 0%, transparent 70%)",
    top: "-15%",
    right: "-10%",
  },

  orb2: {
    width: 400,
    height: 400,
    background:
      "radial-gradient(circle, rgba(120, 194, 154, 0.25) 0%, transparent 70%)",
    bottom: "-5%",
    left: "-5%",
  },

  orb3: {
    width: 350,
    height: 350,
    background:
      "radial-gradient(circle, rgba(45, 122, 84, 0.2) 0%, transparent 70%)",
    top: "40%",
    left: "50%",
  },

  particleLayer: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
  },

  particle: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(60, 139, 101, 0.3), rgba(120, 194, 154, 0.15))",
  },

  desktopContent: {
    position: "relative",
    maxWidth: 1140,
    margin: "0 auto",
    padding: "40px 60px 160px",
    zIndex: 2,
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.7rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#b7f3d0", // lighter mint
    fontWeight: 700,
    marginBottom: 24,
    padding: "8px 20px",
    background: "rgba(15, 35, 28, 0.45)", // darker glass
    borderRadius: 50,
    border: "1px solid rgba(120, 194, 154, 0.35)",
    backdropFilter: "blur(6px)",
  },

  eyebrowDot: {
    color: "#86efac", // soft neon mint
    fontSize: "0.5rem",
  },

  title: {
    fontSize: "clamp(3.2rem, 5.5vw, 6rem)",
    fontWeight: 900,
    lineHeight: 1.08,
    color: "#f0fdf7", // soft white
    marginBottom: 28,
    letterSpacing: "-0.02em",
    textShadow: "0 6px 30px rgba(0,0,0,0.55)", // subtle depth
  },

  titleAccent: {
    position: "relative",
    display: "inline-block",
    background:
      "linear-gradient(135deg, #bbf7d0 0%, #4ade80 45%, #22c55e 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  accentUnderline: {
    position: "absolute",
    bottom: 8,
    left: 0,
    right: 0,
    height: 6,
    background:
      "linear-gradient(90deg, rgba(134, 239, 172, 0.45), rgba(34, 197, 94, 0.35))",
    borderRadius: 3,
    zIndex: -1,
  },

  subtitle: {
    maxWidth: 600,
    fontSize: "1.15rem",
    lineHeight: 1.8,
    color: "rgba(236, 253, 245, 0.9)", // soft sage-white
    marginBottom: 52,
    fontWeight: 400,
    textShadow: "0 3px 12px rgba(0,0,0,0.45)",
  },

  statsRow: {
    display: "flex",
    gap: 32,
    marginBottom: 48,
    flexWrap: "wrap",
  },

  stat: {
    position: "relative",
  },

  statCard: {
    padding: "20px 28px",
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    borderRadius: 16,
    border: "1px solid rgba(60, 139, 101, 0.12)",
    boxShadow: "0 4px 24px rgba(60, 139, 101, 0.08)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  statValue: {
    fontSize: "2.5rem",
    fontWeight: 900,
    background: "linear-gradient(135deg, #0d2817, #2d7a54)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: 4,
  },

  statLabel: {
    fontSize: "0.72rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#5f8f75",
    fontWeight: 600,
  },

  actions: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },

  mobileContent: {
    padding: "140px 24px 100px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  mobileEyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.65rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#bbf7d0", // light mint
    fontWeight: 700,
    marginBottom: 20,
    padding: "6px 16px",
    background: "rgba(15, 35, 28, 0.5)", // dark glass
    borderRadius: 50,
    border: "1px solid rgba(134, 239, 172, 0.35)",
    backdropFilter: "blur(6px)",
  },

  mobileTitle: {
    fontSize: "2.5rem",
    fontWeight: 900,
    lineHeight: 1.12,
    marginBottom: 20,
    color: "#f0fdf7", // soft white
    letterSpacing: "-0.02em",
    textShadow: "0 4px 22px rgba(0, 0, 0, 0.55)",
  },

  mobileSubtitle: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(236, 253, 245, 0.9)", // sage-white
    marginBottom: 40,
    fontWeight: 400,
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.45)",
  },

  mobileStats: {
    display: "flex",
    justifyContent: "space-around",
    gap: 12,
    marginBottom: 40,
  },

  mobileStat: {
    flex: 1,
  },

  mobileStatCard: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 12px",
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    borderRadius: 12,
    border: "1px solid rgba(60, 139, 101, 0.12)",
    boxShadow: "0 2px 16px rgba(60, 139, 101, 0.08)",
  },

  mobileStatValue: {
    fontSize: "1.6rem",
    fontWeight: 900,
    background: "linear-gradient(135deg, #0d2817, #2d7a54)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: 4,
  },

  mobileStatLabel: {
    fontSize: "0.65rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#5f8f75",
    fontWeight: 600,
  },

  mobileActions: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  waveDecor: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 1,
  },

  waveSvg: {
    width: "100%",
    height: "100%",
  },
};
