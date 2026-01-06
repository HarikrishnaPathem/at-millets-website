import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";

const WhyPartner = () => {
  const { t } = useLanguage();
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const points = t("business.why.points", { returnObjects: true }) || [];

  return (
    <section
      style={{
        ...styles.wrapper,
        padding: isMobile
          ? "80px 16px"
          : isTablet
          ? "100px 20px"
          : "120px 20px",
      }}
    >
      <motion.h2
        style={{
          ...styles.title,
          fontSize: isMobile ? "1.8rem" : "clamp(2rem,4vw,2.6rem)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("business.why.title")}
      </motion.h2>

      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(260px, 1fr))",
          gap: isMobile ? 18 : 28,
        }}
      >
        {Array.isArray(points) &&
          points.map((p, i) => (
            <motion.div
              key={i}
              style={{
                ...styles.card,
                padding: isMobile ? "22px 20px" : "28px 26px",
                fontSize: isMobile ? "1rem" : "1.05rem",
              }}
              whileHover={{
                y: isMobile ? 0 : -8,
                boxShadow: isMobile
                  ? styles.card.boxShadow
                  : "0 20px 40px rgba(16, 185, 129, 0.15)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <span
                style={{
                  ...styles.icon,
                  width: isMobile ? 22 : 26,
                  height: isMobile ? 22 : 26,
                  fontSize: isMobile ? "0.75rem" : "0.9rem",
                }}
              >
                ✓
              </span>
              <span>{p}</span>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default WhyPartner;

const styles = {
  wrapper: {
    background: "linear-gradient(180deg, #f8faf9 0%, #eef7f1 100%)",
  },

  title: {
    textAlign: "center",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    color: "#064e3b",
    marginBottom: 60,
  },

  grid: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
  },

  card: {
    position: "relative",
    background: "#ffffff",
    borderRadius: 20,
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    fontWeight: 600,
    lineHeight: 1.6,
    color: "#064e3b",
    border: "1px solid rgba(16, 185, 129, 0.15)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },

  icon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #22c55e, #4ade80)",
    color: "#022c22",
    fontWeight: 900,
    flexShrink: 0,
    marginTop: 2,
  },
};
