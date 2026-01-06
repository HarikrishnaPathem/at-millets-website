import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";
import shopImage from "../../assets/images/shop_no_bg.png";

const StorePreview = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      style={{
        ...styles.wrapper,
        padding: isMobile ? "80px 16px" : "120px 20px",
      }}
    >
      {/* TEXT CONTENT */}
      <motion.div
        style={styles.textWrap}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span style={styles.eyebrow}>
          {t("business.store.eyebrow") || "Retail Experience"}
        </span>

        <h2 style={styles.title}>{t("business.store.title")}</h2>

        <p style={styles.description}>{t("business.store.description")}</p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        style={styles.imageWrap}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.imageGlow} />
        <img
          src={shopImage}
          alt="AT Millets Store Preview"
          style={{
            ...styles.image,
            maxWidth: isMobile ? 320 : 480,
          }}
        />
      </motion.div>
    </section>
  );
};

export default StorePreview;

const styles = {
  wrapper: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gap: 60,
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    alignItems: "center",
    background: "linear-gradient(180deg, #ffffff 0%, #f3faf6 100%)",
  },

  textWrap: {
    maxWidth: 520,
  },

  eyebrow: {
    display: "inline-block",
    marginBottom: 12,
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#16a34a",
    fontWeight: 700,
  },

  title: {
    fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
    fontWeight: 900,
    lineHeight: 1.2,
    marginBottom: 20,
    color: "#064e3b",
    letterSpacing: "-0.02em",
  },

  description: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#065f46",
    opacity: 0.95,
  },

  imageWrap: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  imageGlow: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(34,197,94,0.25), transparent 70%)",
    filter: "blur(30px)",
    zIndex: 0,
  },

  image: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "auto",
    filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.25))",
  },
};
