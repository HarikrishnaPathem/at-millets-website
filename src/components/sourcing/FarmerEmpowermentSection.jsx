import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { Users, GraduationCap, TrendingUp, HeartHandshake } from "lucide-react";
import { useMediaQuery } from "react-responsive";

import empowermentImage from "../../assets/images/farmer_empowerment.jpg";

/* =========================================================
   FARMER EMPOWERMENT & FAIR TRADE (RESPONSIVE FIXED)
========================================================= */

const FarmerEmpowermentSection = () => {
  const { t } = useLanguage();

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const items = [
    {
      icon: Users,
      title: t("tribal.empowerment.items.community.title"),
      text: t("tribal.empowerment.items.community.text"),
    },
    {
      icon: GraduationCap,
      title: t("tribal.empowerment.items.training.title"),
      text: t("tribal.empowerment.items.training.text"),
    },
    {
      icon: TrendingUp,
      title: t("tribal.empowerment.items.income.title"),
      text: t("tribal.empowerment.items.income.text"),
    },
    {
      icon: HeartHandshake,
      title: t("tribal.empowerment.items.fairtrade.title"),
      text: t("tribal.empowerment.items.fairtrade.text"),
    },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isDesktop ? "1.05fr 1fr" : "1fr", // ✅ collapse on tablet & mobile
          gap: isMobile ? 48 : 80,
        }}
      >
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
            {t("tribal.empowerment.eyebrow")}
          </span>

          <h2 style={styles.title}>
            {t("tribal.empowerment.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("tribal.empowerment.titleAccent")}
            </span>
          </h2>

          <p style={styles.text}>{t("tribal.empowerment.paragraph1")}</p>
          <p style={styles.text}>{t("tribal.empowerment.paragraph2")}</p>
        </motion.div>

        {/* IMAGE + POINTS */}
        <div style={styles.right}>
          {/* IMAGE */}
          <motion.div
            style={styles.imageWrap}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={empowermentImage}
              alt={t("tribal.empowerment.imageAlt")}
              style={{
                ...styles.image,
                height: isMobile ? 240 : 320, // ✅ responsive height
              }}
            />
          </motion.div>

          {/* CARDS */}
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
        </div>
      </div>
    </section>
  );
};

export default FarmerEmpowermentSection;

/* =========================================================
   STYLES (SAFE FOR ALL SCREENS)
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "clamp(100px, 14vw, 160px) 0",
    background: "#ffffff",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 18% 25%, rgba(120,194,154,0.14), transparent 55%), radial-gradient(circle at 82% 75%, rgba(60,139,101,0.1), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 20px", // ✅ prevent overflow
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

  dot: { fontSize: "0.5rem", color: "#78c29a" },

  title: {
    fontSize: "clamp(2.2rem,5vw,3.6rem)",
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
    marginBottom: 18,
  },

  right: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
    width: "100%", // ✅ key fix
  },

  imageWrap: {
    borderRadius: 24,
    overflow: "hidden",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 24px 60px rgba(60,139,101,0.22)",
    width: "100%",
  },

  image: {
    width: "100%",
    objectFit: "cover",
    display: "block",
  },

  grid: {
    display: "grid",
    gap: 16,
  },

  card: {
    display: "flex",
    gap: 14,
    padding: "16px 18px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: 16,
    border: "1px solid rgba(60,139,101,0.12)",
    boxShadow: "0 8px 24px rgba(60,139,101,0.12)",
  },

  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "rgba(60,139,101,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  cardTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#0d2817",
    marginBottom: 4,
  },

  cardText: {
    fontSize: "0.9rem",
    lineHeight: 1.6,
    color: "#3f5f4f",
  },
};
