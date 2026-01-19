import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { Leaf, MapPin, Phone } from "lucide-react";

import {
  FaYoutube as Youtube,
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

import { FaXTwitter as Twitter } from "react-icons/fa6";

/* =========================================================
   PREMIUM FOOTER WITH REGIONAL CONTACTS
========================================================= */

const Footer = () => {
  const { t } = useLanguage();

  const contacts = t("business.contacts", { returnObjects: true }) || {};
  const regions = contacts.regions ? Object.values(contacts.regions) : [];

  const getRegionStyle = (index) => {
    if (index === 0) {
      // SAFFRON
      return {
        background: "linear-gradient(180deg, #ffedd5 0%, #fed7aa 100%)",
        border: "1px solid rgba(234,88,12,0.35)",
      };
    }

    if (index === 1) {
      // WHITE
      return {
        background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
        border: "1px solid rgba(30,58,138,0.2)",
      };
    }

    if (index === 2) {
      // GREEN
      return {
        background: "linear-gradient(180deg, #dcfce7 0%, #bbf7d0 100%)",
        border: "1px solid rgba(22,163,74,0.35)",
      };
    }

    return {};
  };

  const getTextColor = (index) => {
    if (index === 0) return "#7c2d12";
    if (index === 1) return "#1e293b";
    if (index === 2) return "#14532d";
    return "#1f3d2b";
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.bgPattern} />
      <div style={styles.bgOverlay} />

      <div style={styles.container}>
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={styles.brandSection}
        >
          <div style={styles.brandHeader}>
            <div style={styles.iconWrapper}>
              <Leaf size={32} strokeWidth={2.5} style={styles.leafIcon} />
            </div>
            <h2 style={styles.brandName}>AT Millets</h2>
          </div>

          <p style={styles.tagline}>
            Premium millets and natural foods from Araku Valley’s farmers
          </p>

          <div style={styles.badge}>
            <span style={styles.badgeText}>
              Rooted in Nature • Built on Trust
            </span>
          </div>
        </motion.div>

        {/* REGIONAL CONTACTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={styles.contactGrid}
        >
          {regions.map((region, i) => (
            <div
              key={i}
              style={{
                ...styles.regionBlock,
                ...getRegionStyle(i),
                position: "relative",
              }}
            >
              {/* ASHOKA CHAKRA (WHITE BLOCK ONLY) */}
              {i === 1 && (
                <svg viewBox="0 0 200 200" style={styles.chakra}>
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
                </svg>
              )}

              <div style={{ ...styles.regionHeader, zIndex: 1 }}>
                <MapPin size={16} style={{ color: getTextColor(i) }} />
                <span
                  style={{
                    ...styles.regionLabel,
                    color: getTextColor(i),
                  }}
                >
                  {region.title}
                </span>
              </div>

              <div style={{ ...styles.regionPeople, zIndex: 1 }}>
                {region.people.map((entry, idx) => {
                  const [namePart, phonePart] = entry
                    .split("–")
                    .map((s) => s.trim());

                  const phones = phonePart
                    ? phonePart.split(",").map((p) => p.trim())
                    : [];

                  return (
                    <div key={idx} style={styles.contactItem}>
                      <span
                        style={{
                          ...styles.contactText,
                          color: getTextColor(i),
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
                              color: getTextColor(i),
                            }}
                            aria-label={`Call ${namePart}`}
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={styles.socialSection}
        >
          <h3 style={styles.socialTitle}>Connect With Us</h3>

          <div style={styles.socialLinks}>
            <SocialLink
              href="https://www.facebook.com/people/AT-Millets-Araku-Naturals/61585507244152/"
              style={styles.facebook}
              icon={<Facebook size={22} />}
              label="Facebook"
            />
            <SocialLink
              href="https://instagram.com/atmillets"
              style={styles.instagram}
              icon={<Instagram size={22} />}
              label="Instagram"
            />
            <SocialLink
              href="https://www.youtube.com/@ATMilletsArakuNaturals"
              style={styles.youtube}
              icon={<Youtube size={22} />}
              label="YouTube"
            />
            <SocialLink
              href="https://www.x.com/atmillets"
              style={styles.twitter}
              icon={<Twitter size={22} />}
              label="Twitter"
            />
            <SocialLink
              href="https://www.linkedin.com/company/at-millets-araku-naturals/"
              style={styles.linkedin}
              icon={<Linkedin size={22} />}
              label="LinkedIn"
            />
          </div>
        </motion.div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} AT Millets Araku Naturals Pvt. Ltd. All
          rights reserved.
          {" "}|{" "}
    <span>
      Powered by{" "}
      <a
        href="https://kernn.ai"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.kernnLink}
      >
        Kernn Automations
      </a>
    </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------------- SOCIAL BUTTON ---------------- */

const SocialLink = ({ href, icon, label, style }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ ...styles.socialButton, ...style }}
    whileHover={{ scale: 1.1, y: -4 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

/* =========================================================
   STYLES
========================================================= */

const styles = {
  footer: {
    position: "relative",
    background: "linear-gradient(180deg,#ffffff 0%,#f8fcfa 100%)",
    borderTop: "2px solid rgba(60,139,101,0.12)",
    overflow: "hidden",
  },
  kernnLink: {
  color: "#a92427",
  textDecoration: "none",
  fontWeight: 500,
  transition: "opacity 0.3s ease",
},
kernnLinkHover: {
  opacity: 0.8,
},


  bgPattern: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 15% 25%, rgba(120,194,154,0.15), transparent 50%), radial-gradient(circle at 85% 75%, rgba(60,139,101,0.12), transparent 50%)",
  },

  bgOverlay: {
    position: "absolute",
    inset: 0,
  },

  container: {
    position: "relative",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "80px 32px 48px",
    display: "flex",
    flexDirection: "column",
    gap: 56,
    alignItems: "center",
    textAlign: "center",
    zIndex: 1,
  },

  brandSection: { maxWidth: 640 },

  brandHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 20,
  },

  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#3c8b65,#2d7a54)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  leafIcon: { color: "#fff" },

  brandName: {
    fontSize: "2.5rem",
    fontWeight: 900,
    background: "linear-gradient(135deg,#2d7a54,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  tagline: {
    fontSize: "1.1rem",
    color: "#3f5f4f",
  },

  badge: {
    marginTop: 20,
    padding: "12px 28px",
    borderRadius: 50,
    border: "1.5px solid rgba(60,139,101,0.2)",
  },

  badgeText: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#3c8b65",
  },

  contactGrid: {
    display: "grid",
    gap: 24,
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    width: "100%",
  },

  regionBlock: {
    padding: 20,
    borderRadius: 18,
    backdropFilter: "blur(8px)",
    overflow: "hidden",
  },

  chakra: {
    position: "absolute",
    inset: 0,
    margin: "auto",
    width: 180,
    height: 180,
    opacity: 0.06,
    pointerEvents: "none",
  },

  regionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
    justifyContent: "center",
  },

  regionLabel: {
    fontSize: "0.8rem",
    fontWeight: 800,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },

  regionPeople: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  contactItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  contactText: {
    fontSize: "0.95rem",
    fontWeight: 500,
  },

  contactPhone: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.9rem",
    fontWeight: 700,
    textDecoration: "none",
  },

  socialSection: { maxWidth: 500, width: "100%" },

  socialTitle: {
    fontSize: "1rem",
    fontWeight: 800,
    marginBottom: 24,
    textTransform: "uppercase",
  },

  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },

  socialButton: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  facebook: {
    background: "#1877F2",
  },

  instagram: {
    background: "linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)",
  },

  youtube: {
    background: "#FF0000",
  },

  twitter: {
    background: "black",
  },

  linkedin: {
    background: "#0A66C2",
  },

  bottomBar: {
    borderTop: "1px solid rgba(60,139,101,0.15)",
    padding: "24px 32px",
    textAlign: "center",
  },

  copyright: {
    fontSize: "0.85rem",
    color: "#5f8f75",
  },
  phoneGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 4,
  },
};
