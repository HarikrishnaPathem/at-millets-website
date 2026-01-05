import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { Leaf, Droplets, Recycle, TreePine } from "lucide-react";
import { useMediaQuery } from "react-responsive";

import environmentImage from "../../assets/images/environmental_responsibility.jpg";

/* =========================================================
   ENVIRONMENTAL RESPONSIBILITY
========================================================= */

const EnvironmentalResponsibilitySection = () => {
  const { t } = useLanguage();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const items = [
    {
      icon: Leaf,
      title: t("tribal.environment.items.organic.title"),
      text: t("tribal.environment.items.organic.text"),
    },
    {
      icon: Droplets,
      title: t("tribal.environment.items.water.title"),
      text: t("tribal.environment.items.water.text"),
    },
    {
      icon: Recycle,
      title: t("tribal.environment.items.packaging.title"),
      text: t("tribal.environment.items.packaging.text"),
    },
    {
      icon: TreePine,
      title: t("tribal.environment.items.biodiversity.title"),
      text: t("tribal.environment.items.biodiversity.text"),
    },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isDesktop ? "1fr 1.05fr" : "1fr",
          gap: isDesktop ? 80 : 48,
        }}
      >
        {/* IMAGE */}
        <motion.div
          style={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={environmentImage}
            alt={t("tribal.environment.imageAlt")}
            style={styles.image}
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span style={styles.eyebrow}>
            <span style={styles.dot}>●</span>
            {t("tribal.environment.eyebrow")}
          </span>

          <h2 style={styles.title}>
            {t("tribal.environment.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("tribal.environment.titleAccent")}
            </span>
          </h2>

          <p style={styles.text}>{t("tribal.environment.paragraph")}</p>

          {/* POINTS */}
          <div style={styles.grid}>
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  style={styles.card}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <div style={styles.iconWrap}>
                    <Icon size={22} color="#3c8b65" />
                  </div>

                  <div>
                    <h4 style={styles.cardTitle}>{item.title}</h4>
                    <p style={styles.cardText}>{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnvironmentalResponsibilitySection;

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "clamp(120px, 14vw, 160px) 0",
    background: "#ffffff",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 15% 25%, rgba(120,194,154,0.14), transparent 55%), radial-gradient(circle at 85% 75%, rgba(60,139,101,0.1), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },

  imageWrap: {
    borderRadius: 28,
    overflow: "hidden",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 28px 70px rgba(60,139,101,0.22)",
  },

  image: {
    width: "100%",
    height: "100%",
    maxHeight: 420,
    objectFit: "cover",
    display: "block",
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

  dot: { fontSize: "0.5rem", color: "#78c29a" },

  title: {
    fontSize: "clamp(2.3rem,5vw,3.6rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
    marginBottom: 24,
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
    marginBottom: 28,
  },

  grid: {
    display: "grid",
    gap: 18,
  },

  card: {
    display: "flex",
    gap: 16,
    padding: "18px 20px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: 16,
    border: "1px solid rgba(60,139,101,0.12)",
    boxShadow: "0 10px 28px rgba(60,139,101,0.12)",
  },

  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "rgba(60,139,101,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  cardTitle: {
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#0d2817",
    marginBottom: 6,
  },

  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#3f5f4f",
  },
};
