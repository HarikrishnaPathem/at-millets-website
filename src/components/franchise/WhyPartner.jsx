import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

const WhyPartner = () => {
  const { t } = useLanguage();
  const points = t("business.why.points", { returnObjects: true });

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.title}>{t("business.why.title")}</h2>

      <div style={styles.grid}>
        {points.map((p, i) => (
          <motion.div key={i} style={styles.card} whileHover={{ y: -6 }}>
            ✅ {p}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyPartner;

const styles = {
  wrapper: {
    padding: "100px 20px",
    maxWidth: 1100,
    margin: "auto",
  },
  title: {
    fontSize: "2.2rem",
    textAlign: "center",
    marginBottom: 40,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 20,
  },
  card: {
    background: "#f9fdfb",
    padding: 20,
    borderRadius: 14,
    border: "1px solid rgba(0,0,0,0.08)",
    fontWeight: 600,
  },
};
