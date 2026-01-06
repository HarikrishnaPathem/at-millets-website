import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

const RegionalContacts = () => {
  const { t } = useLanguage();

  const contacts = t("business.contacts", { returnObjects: true }) || {};
  const regions = contacts.regions ? Object.values(contacts.regions) : [];

  return (
    <section style={styles.wrapper}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={styles.title}
      >
        {contacts.title}
      </motion.h2>

      <div style={styles.grid}>
        {regions.map((region, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={styles.card}
          >
            <h3 style={styles.regionTitle}>{region.title}</h3>

            <ul style={styles.list}>
              {region.people.map((person, idx) => (
                <li key={idx} style={styles.person}>
                  📞 {person}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RegionalContacts;

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    padding: "120px 20px",
    background: "linear-gradient(to bottom, #f5faf7, #ffffff)",
  },

  title: {
    textAlign: "center",
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 48,
  },

  grid: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gap: 24,
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  },

  card: {
    background: "#ffffff",
    padding: 28,
    borderRadius: 18,
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 10px 30px rgba(60,139,101,0.08)",
  },

  regionTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#2d7050",
    marginBottom: 16,
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  person: {
    fontSize: "0.95rem",
    color: "#3f5f4f",
    lineHeight: 1.6,
  },
};
