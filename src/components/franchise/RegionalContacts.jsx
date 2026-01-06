import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

const RegionalContacts = () => {
  const { t } = useLanguage();

  const contacts = t("business.contacts", { returnObjects: true }) || {};
  const regions = contacts.regions ? Object.values(contacts.regions) : [];

  return (
    <section style={styles.wrapper}>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.title}
      >
        {contacts.title}
      </motion.h2>

      <div style={styles.grid}>
        {regions.map((region, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            style={styles.card}
          >
            <div style={styles.regionHeader}>
              <span style={styles.regionBadge}>{region.title}</span>
            </div>

            <ul style={styles.list}>
              {region.people.map((entry, idx) => {
                const [name, phone] = entry.split("–").map((s) => s.trim());

                return (
                  <li key={idx} style={styles.person}>
                    <span style={styles.personName}>{name}</span>

                    <a
                      href={`tel:${phone}`}
                      style={styles.phone}
                      aria-label={`Call ${name}`}
                    >
                      {phone}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RegionalContacts;

const styles = {
  wrapper: {
    padding: "120px 20px",
    background: "linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)",
  },

  title: {
    textAlign: "center",
    fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
    fontWeight: 900,
    color: "#0f2e1d",
    marginBottom: 56,
    letterSpacing: "-0.02em",
  },

  grid: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gap: 28,
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  },

  card: {
    background: "#ffffff",
    padding: 28,
    borderRadius: 20,
    border: "1px solid rgba(22,163,74,0.15)",
    boxShadow: "0 12px 30px rgba(22,163,74,0.08)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },

  regionHeader: {
    marginBottom: 18,
  },

  regionBadge: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: 999,
    background: "rgba(22,163,74,0.12)",
    color: "#166534",
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  person: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    paddingBottom: 8,
    borderBottom: "1px dashed rgba(0,0,0,0.08)",
  },

  personName: {
    fontSize: "0.95rem",
    color: "#1f3d2b",
    fontWeight: 500,
  },

  phone: {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#15803d",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};
