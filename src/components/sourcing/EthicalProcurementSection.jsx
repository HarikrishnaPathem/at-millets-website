import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { Handshake, Scale, CreditCard, ShieldCheck } from "lucide-react";
import { useMediaQuery } from "react-responsive";

/* =========================================================
   ETHICAL PROCUREMENT PRACTICES
========================================================= */

const EthicalProcurementSection = () => {
  const { t } = useLanguage();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const items = [
    {
      icon: Handshake,
      title: t("tribal.ethical.items.direct.title"),
      text: t("tribal.ethical.items.direct.text"),
    },
    {
      icon: Scale,
      title: t("tribal.ethical.items.fair.title"),
      text: t("tribal.ethical.items.fair.text"),
    },
    {
      icon: CreditCard,
      title: t("tribal.ethical.items.payments.title"),
      text: t("tribal.ethical.items.payments.text"),
    },
    {
      icon: ShieldCheck,
      title: t("tribal.ethical.items.transparency.title"),
      text: t("tribal.ethical.items.transparency.text"),
    },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div style={styles.container}>
        {/* HEADER */}
        <motion.div
          style={{
            ...styles.header,
            textAlign: isDesktop ? "left" : "center",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span style={styles.eyebrow}>
            <span style={styles.dot}>●</span>
            {t("tribal.ethical.eyebrow")}
          </span>

          <h2 style={styles.title}>
            {t("tribal.ethical.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("tribal.ethical.titleAccent")}
            </span>
          </h2>

          <p style={styles.subtitle}>{t("tribal.ethical.subtitle")}</p>
        </motion.div>

        {/* CARDS */}
        <div style={styles.grid}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                style={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
              >
                <div style={styles.iconWrap}>
                  <Icon size={26} color="#3c8b65" />
                </div>

                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardText}>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EthicalProcurementSection;

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
      "radial-gradient(circle at 15% 30%, rgba(120,194,154,0.14), transparent 55%), radial-gradient(circle at 85% 70%, rgba(60,139,101,0.1), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
    position: "relative",
    zIndex: 2,
  },

  header: {
    maxWidth: 640,
    marginBottom: 72,
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
    fontSize: "clamp(2.4rem,4.8vw,3.6rem)",
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

  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#3f5f4f",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 32,
  },

  card: {
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(10px)",
    borderRadius: 24,
    padding: "40px 34px",
    border: "1px solid rgba(60,139,101,0.14)",
    boxShadow: "0 16px 48px rgba(60,139,101,0.14)",
    transition: "all 0.3s ease",
  },

  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "rgba(60,139,101,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 14,
  },

  cardText: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
  },
};
