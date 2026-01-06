import { useLanguage } from "../../i18n/LanguageContext";
import { motion } from "framer-motion";

/* =========================================================
   NUTRITION FACTS LABEL (ENHANCED PACKET STYLE)
========================================================= */

const NutritionLabel = ({ nutritionText }) => {
  const { t } = useLanguage();

  if (!nutritionText) return null;

  // Simple parser (works with your current format)
  const lines = nutritionText
    .replace(/Per 100g:|100 గ్రాములకు:|प्रति 100 ग्राम:/gi, "")
    .split(",")
    .map((item) => item.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <div style={styles.wrapper}>
        {/* Decorative Corner Marks */}
        <div style={styles.cornerTL}></div>
        <div style={styles.cornerTR}></div>
        <div style={styles.cornerBL}></div>
        <div style={styles.cornerBR}></div>

        {/* Header Section */}
        <div style={styles.headerSection}>
          <div style={styles.header}>
            <span style={styles.headerIcon}>🥗</span>
            {t("products.nutrition.title")}
          </div>
          <div style={styles.ribbon}>
            <span>{t("products.nutrition.serving")}</span>
          </div>
        </div>

        <div style={styles.dividerBold} />

        {/* Nutrition Facts Grid */}
        <div style={styles.contentSection}>
          {lines.map((line, index) => {
            const [label, value] = line.split(":").map((s) => s.trim());
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                style={styles.row}
              >
                <div style={styles.labelWrapper}>
                  <span style={styles.bulletDot}>●</span>
                  <span style={styles.label}>{label}</span>
                </div>
                <span style={styles.value}>{value}</span>
              </motion.div>
            );
          })}
        </div>

        <div style={styles.dividerThin} />

        {/* Footer Note */}
        <div style={styles.footer}>
          <div style={styles.footerIcon}>ⓘ</div>
          <div style={styles.footerText}>{t("products.nutrition.note")}</div>
        </div>

        {/* Decorative Pattern */}
        <div style={styles.pattern}></div>
      </div>
    </motion.div>
  );
};

export default NutritionLabel;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
  },

  wrapper: {
    position: "relative",
    maxWidth: 400,
    width: "100%",
    border: "3px solid #0d2817",
    padding: 24,
    background: "linear-gradient(135deg, #ffffff 0%, #f9fffe 100%)",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    borderRadius: 16,
    boxShadow:
      "0 20px 60px rgba(13, 40, 23, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
    overflow: "hidden",
  },

  // Decorative corner marks
  cornerTL: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 20,
    height: 20,
    borderTop: "3px solid #3c8b65",
    borderLeft: "3px solid #3c8b65",
    borderRadius: "4px 0 0 0",
  },

  cornerTR: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 20,
    height: 20,
    borderTop: "3px solid #3c8b65",
    borderRight: "3px solid #3c8b65",
    borderRadius: "0 4px 0 0",
  },

  cornerBL: {
    position: "absolute",
    bottom: 12,
    left: 12,
    width: 20,
    height: 20,
    borderBottom: "3px solid #3c8b65",
    borderLeft: "3px solid #3c8b65",
    borderRadius: "0 0 0 4px",
  },

  cornerBR: {
    position: "absolute",
    bottom: 12,
    right: 12,
    width: 20,
    height: 20,
    borderBottom: "3px solid #3c8b65",
    borderRight: "3px solid #3c8b65",
    borderRadius: "0 0 4px 0",
  },

  // Background pattern
  pattern: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "150px",
    height: "150px",
    background:
      "radial-gradient(circle, rgba(60,139,101,0.05) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    opacity: 0.5,
    pointerEvents: "none",
  },

  headerSection: {
    marginBottom: 16,
    position: "relative",
  },

  header: {
    fontSize: "1.6rem",
    fontWeight: 900,
    color: "#0d2817",
    letterSpacing: "-0.02em",
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
    textTransform: "uppercase",
  },

  headerIcon: {
    fontSize: "1.8rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
  },

  ribbon: {
    background: "linear-gradient(135deg, #3c8b65 0%, #2d7050 100%)",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: 8,
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    display: "inline-block",
    boxShadow: "0 4px 12px rgba(60,139,101,0.3)",
  },

  dividerBold: {
    borderBottom: "5px solid #0d2817",
    marginBottom: 20,
    borderRadius: 2,
  },

  dividerThin: {
    borderBottom: "2px solid rgba(60,139,101,0.2)",
    marginTop: 16,
    marginBottom: 16,
  },

  contentSection: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.95rem",
    padding: "12px 8px",
    borderRadius: 8,
    background: "rgba(243, 250, 246, 0.5)",
    border: "1px solid rgba(60,139,101,0.1)",
    transition: "all 0.2s ease",
    cursor: "default",
  },

  labelWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  bulletDot: {
    color: "#78c29a",
    fontSize: "0.6rem",
  },

  label: {
    color: "#3f5f4f",
    fontWeight: 500,
  },

  value: {
    fontWeight: 800,
    color: "#0d2817",
    fontSize: "1rem",
    background: "linear-gradient(135deg, #3c8b65 0%, #2d7050 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  footer: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    background: "rgba(120,194,154,0.1)",
    padding: 12,
    borderRadius: 8,
    border: "1px solid rgba(60,139,101,0.15)",
  },

  footerIcon: {
    fontSize: "1.2rem",
    color: "#3c8b65",
    flexShrink: 0,
  },

  footerText: {
    fontSize: "0.8rem",
    lineHeight: 1.5,
    color: "#3f5f4f",
    fontWeight: 500,
  },
};
