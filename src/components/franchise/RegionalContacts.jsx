import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

const RegionalContacts = () => {
  const { t } = useLanguage();

  const contacts = t("business.contacts", { returnObjects: true }) || {};
  const regions = contacts.regions ? Object.values(contacts.regions) : [];

  const getCardStyle = (index) => {
    // ORANGE (Saffron)
    if (index === 0) {
      return {
        background: "linear-gradient(180deg, #ffedd5 0%, #fed7aa 100%)",
        border: "1px solid rgba(234,88,12,0.35)",
        boxShadow: "0 14px 34px rgba(234,88,12,0.18)",
      };
    }

    // WHITE (Middle)
    if (index === 1) {
      return {
        background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
        border: "1px solid rgba(30,58,138,0.2)",
        boxShadow: "0 14px 34px rgba(30,58,138,0.12)",
      };
    }

    // GREEN
    if (index === 2) {
      return {
        background: "linear-gradient(180deg, #dcfce7 0%, #bbf7d0 100%)",
        border: "1px solid rgba(22,163,74,0.35)",
        boxShadow: "0 14px 34px rgba(22,163,74,0.18)",
      };
    }

    return {};
  };

  const getTextColors = (index) => {
    if (index === 0)
      return {
        name: "#7c2d12",
        phone: "#9a3412",
        badgeBg: "rgba(234,88,12,0.15)",
        badgeText: "#9a3412",
      };

    if (index === 1)
      return {
        name: "#1e293b",
        phone: "#1e3a8a",
        badgeBg: "rgba(30,58,138,0.1)",
        badgeText: "#1e3a8a",
      };

    if (index === 2)
      return {
        name: "#14532d",
        phone: "#166534",
        badgeBg: "rgba(22,163,74,0.15)",
        badgeText: "#14532d",
      };

    return {};
  };

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
        {regions.map((region, i) => {
          const colors = getTextColors(i);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              style={{
                ...styles.card,
                ...getCardStyle(i),
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* ASHOKA CHAKRA – ULTRA SLOW ROTATION */}
              {i === 1 && (
                <motion.svg
                  viewBox="0 0 200 200"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60, // 1 full rotation in 60s
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={styles.chakra}
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="3"
                  />
                  {Array.from({ length: 24 }).map((_, idx) => (
                    <line
                      key={idx}
                      x1="100"
                      y1="30"
                      x2="100"
                      y2="170"
                      stroke="#1e3a8a"
                      strokeWidth="2"
                      transform={`rotate(${idx * 15} 100 100)`}
                    />
                  ))}
                </motion.svg>
              )}

              <div style={styles.regionHeader}>
                <span
                  style={{
                    ...styles.regionBadge,
                    background: colors.badgeBg,
                    color: colors.badgeText,
                  }}
                >
                  {region.title}
                </span>
              </div>

              <ul style={styles.list}>
                {region.people.map((entry, idx) => {
                  const [namePart, phonePart] = entry
                    .split("–")
                    .map((s) => s.trim());

                  const phones = phonePart
                    ? phonePart.split(",").map((p) => p.trim())
                    : [];

                  return (
                    <li key={idx} style={styles.person}>
                      <span
                        style={{
                          ...styles.personName,
                          color: colors.name,
                        }}
                      >
                        {namePart}
                      </span>

                      <div style={styles.phoneGroup}>
                        {phones.map((phone, pIdx) => (
                          <a
                            key={pIdx}
                            href={`tel:${phone}`}
                            style={{
                              ...styles.phone,
                              color: colors.phone,
                            }}
                            aria-label={`Call ${namePart}`}
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
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
    padding: 28,
    borderRadius: 20,
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },

  chakra: {
    position: "absolute",
    inset: 0, // ⬅ fills the card
    margin: "auto", // ⬅ true center
    width: 220,
    height: 220,
    opacity: 0.06,
    pointerEvents: "none",
    zIndex: 0,
  },

  regionHeader: {
    marginBottom: 18,
    position: "relative",
    zIndex: 1,
  },

  regionBadge: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: 999,
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
    position: "relative",
    zIndex: 1,
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
    fontWeight: 500,
  },

  phone: {
    fontSize: "0.95rem",
    fontWeight: 700,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  phoneGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 4,
  },
};
