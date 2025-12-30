import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const handler = () => setIsMobile(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: 15,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header
      style={{
        ...styles.header,
        background: scrolled
          ? "rgba(255, 252, 245, 0.95)"
          : "linear-gradient(180deg, rgba(255,252,245,0.98), rgba(255,250,240,0.95))",
        backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(107,79,44,0.15), 0 2px 8px rgba(107,79,44,0.08)"
          : "0 4px 20px rgba(107,79,44,0.08)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Top announcement bar */}
      <motion.div
        animate={{
          height: !isMobile && !scrolled ? "36px" : "0px",
          opacity: !isMobile && !scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          ...styles.topBar,
          overflow: "hidden",
        }}
      >
        <span style={styles.topBarText}>
          ✨ Premium Organic Millets & Spices | Direct from Tribal Farmers
        </span>
      </motion.div>

      <div style={styles.container}>
        {/* Logo with enhanced styling */}
        <Link to="/" style={styles.logoContainer}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={styles.logoWrapper}
          >
            <div style={styles.logoIcon}>🌾</div>
            <div style={styles.logoText}>
              <span style={styles.logoMain}>AT Millets</span>
              <span style={styles.logoTagline}>Nature's Finest</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={styles.navDesktop}>
            {navGroup(
              "Company",
              "company",
              openMenu,
              setOpenMenu,
              [
                ["About Us", "/about", "Our Story"],
                ["Tribal Sourcing", "/sourcing", "Direct Partnership"],
                ["Supply Chain", "/supply-chain", "Farm to Table"],
                ["Packaging", "/packaging-distribution", "Eco-Friendly"],
                ["Quality", "/quality", "Premium Standards"],
              ],
              dropdownVariants,
              itemVariants
            )}

            {navGroup(
              "Products",
              "products",
              openMenu,
              setOpenMenu,
              [
                ["All Products", "/products", "Complete Range"],
                ["Millets Collection", "/millets", "Ancient Grains"],
                ["Spices & More", "/spices", "Pure & Organic"],
                ["Recipes & Usage", "/recipes", "Cooking Guides"],
              ],
              dropdownVariants,
              itemVariants
            )}

            {navGroup(
              "Business",
              "business",
              openMenu,
              setOpenMenu,
              [
                ["Franchise Opportunities", "/franchise", "Partner With Us"],
                ["Bulk Orders", "/bulk", "For Businesses"],
                ["Contact", "/contact", "Get in Touch"],
              ],
              dropdownVariants,
              itemVariants
            )}
          </nav>
        )}

        {/* CTA Buttons */}
        {!isMobile && (
          <div style={styles.ctaGroup}>
            {/*<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/products" style={styles.ctaSecondary}>
                <span style={styles.ctaIcon}>🛒</span>
                Shop Now
              </Link>
            </motion.div>*/}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 16px 40px rgba(139,94,52,0.35)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/franchise" style={styles.ctaPrimary}>
                <span style={styles.ctaShine} />
                Become a Partner
                <span style={styles.ctaArrow}>→</span>
              </Link>
            </motion.div>
          </div>
        )}

        {/* Mobile Button */}
        {isMobile && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            style={styles.mobileButton}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </motion.button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={styles.mobileMenu}
          >
            {mobileLinks.map(([label, path], index) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={path}
                  style={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={styles.mobileLinkDot} />
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={styles.mobileCta}
            >
              <Link to="/franchise" style={styles.mobileCtaButton}>
                Become a Partner →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

/* ---------------- NAV GROUP ---------------- */

const navGroup = (
  label,
  key,
  openMenu,
  setOpenMenu,
  links,
  variants,
  itemVariants
) => (
  <div
    style={styles.navItem}
    onMouseEnter={() => setOpenMenu(key)}
    onMouseLeave={() => setOpenMenu(null)}
  >
    <span style={styles.navLabel}>
      {label}
      <motion.span
        style={styles.chevron}
        animate={{ rotate: openMenu === key ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        ▾
      </motion.span>
      {openMenu === key && <span style={styles.navUnderline} />}
    </span>

    <AnimatePresence>
      {openMenu === key && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={styles.dropdown}
        >
          <div style={styles.dropdownBg} />
          {links.map(([text, url, subtitle]) => (
            <motion.div
              key={url}
              variants={itemVariants}
              whileHover={{ x: 8, backgroundColor: "rgba(200,162,77,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={styles.dropdownItemWrapper}
            >
              <Link to={url} style={styles.dropdownLink}>
                <div style={styles.dropdownLinkContent}>
                  <span style={styles.linkAccent} />
                  <div>
                    <div style={styles.dropdownLinkText}>{text}</div>
                    <div style={styles.dropdownLinkSubtitle}>{subtitle}</div>
                  </div>
                </div>
                <span style={styles.dropdownArrow}>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const mobileLinks = [
  ["About Us", "/about"],
  ["Tribal Sourcing", "/sourcing"],
  ["Supply Chain", "/supply-chain"],
  ["Packaging", "/packaging-distribution"],
  ["Quality", "/quality"],
  ["Products", "/products"],
  ["Millets Collection", "/millets"],
  ["Spices & More", "/spices"],
  ["Recipes", "/recipes"],
  ["Contact", "/contact"],
];

/* ================== PREMIUM STYLES ================== */

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    WebkitBackdropFilter: "blur(20px)",
  },
  topBar: {
    background: "linear-gradient(135deg, #8b5e34, #6b4f2c)",
    color: "#fffdf8",
    textAlign: "center",
    padding: "8px 0",
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.5px",
  },
  topBarText: {
    display: "inline-block",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 32px",
    height: "85px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    textDecoration: "none",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoIcon: {
    fontSize: "2rem",
    filter: "drop-shadow(0 2px 4px rgba(107,79,44,0.2))",
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  logoMain: {
    fontSize: "1.5rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #8b5e34, #6b4f2c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "0.5px",
  },
  logoTagline: {
    fontSize: "0.65rem",
    fontWeight: 600,
    color: "#c8a24d",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
  },
  navDesktop: {
    display: "flex",
    gap: "48px",
    alignItems: "center",
  },
  navItem: {
    position: "relative",
    cursor: "pointer",
    padding: "8px 0",
  },
  navLabel: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#3f2f1c",
    letterSpacing: "0.3px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    position: "relative",
  },
  navUnderline: {
    position: "absolute",
    bottom: "-8px",
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #c8a24d, #8b5e34)",
    borderRadius: "2px",
  },
  chevron: {
    fontSize: "0.7rem",
    display: "inline-block",
  },
  dropdown: {
    position: "absolute",
    top: "52px",
    left: "-20px",
    background: "#fffdf8",
    borderRadius: "20px",
    boxShadow:
      "0 24px 60px rgba(107,79,44,0.2), 0 8px 20px rgba(107,79,44,0.15)",
    padding: "12px 0",
    minWidth: "320px",
    border: "1px solid rgba(200,162,77,0.2)",
    overflow: "hidden",
  },
  dropdownBg: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(200,162,77,0.03), rgba(139,94,52,0.02))",
    pointerEvents: "none",
  },
  dropdownItemWrapper: {
    position: "relative",
    transition: "background-color 0.2s ease",
    borderRadius: "12px",
    margin: "4px 8px",
  },
  dropdownLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 20px",
    textDecoration: "none",
    position: "relative",
  },
  dropdownLinkContent: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  linkAccent: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #c8a24d, #8b5e34)",
    boxShadow: "0 2px 8px rgba(200,162,77,0.4)",
    flexShrink: 0,
  },
  dropdownLinkText: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#3f2f1c",
    marginBottom: "2px",
  },
  dropdownLinkSubtitle: {
    fontSize: "0.75rem",
    color: "#8b7355",
    fontWeight: 500,
  },
  dropdownArrow: {
    fontSize: "1.1rem",
    color: "#c8a24d",
    opacity: 0.6,
  },
  ctaGroup: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  ctaSecondary: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(200,162,77,0.1)",
    color: "#6b4f2c",
    padding: "11px 20px",
    borderRadius: "12px",
    fontSize: "0.9rem",
    fontWeight: 600,
    textDecoration: "none",
    border: "1.5px solid rgba(200,162,77,0.3)",
    transition: "all 0.2s ease",
  },
  ctaIcon: {
    fontSize: "1.1rem",
  },
  ctaPrimary: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "linear-gradient(135deg, #8b5e34, #6b4f2c)",
    color: "#fffdf8",
    padding: "13px 26px",
    borderRadius: "14px",
    fontSize: "0.95rem",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow:
      "0 12px 32px rgba(139,94,52,0.3), 0 4px 12px rgba(107,79,44,0.2)",
    border: "1px solid rgba(255,255,255,0.1)",
    overflow: "hidden",
    letterSpacing: "0.3px",
  },
  ctaShine: {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    animation: "shine 3s infinite",
  },
  ctaArrow: {
    fontSize: "1.2rem",
    fontWeight: 400,
  },
  mobileButton: {
    fontSize: "28px",
    background: "rgba(200,162,77,0.1)",
    border: "1.5px solid rgba(200,162,77,0.3)",
    cursor: "pointer",
    color: "#6b4f2c",
    padding: "8px 14px",
    borderRadius: "10px",
    fontWeight: 300,
  },
  mobileMenu: {
    background: "linear-gradient(180deg, #fffdf8, #fffaf0)",
    borderTop: "1px solid rgba(200,162,77,0.2)",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    boxShadow: "inset 0 8px 16px rgba(107,79,44,0.05)",
  },
  mobileLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 12px",
    fontSize: "1.05rem",
    fontWeight: 600,
    textDecoration: "none",
    color: "#3f2f1c",
    borderRadius: "12px",
    transition: "all 0.2s ease",
  },
  mobileLinkDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#c8a24d",
  },
  mobileCta: {
    marginTop: "16px",
    paddingTop: "16px",
    borderTop: "1px solid rgba(200,162,77,0.2)",
  },
  mobileCtaButton: {
    display: "block",
    textAlign: "center",
    background: "linear-gradient(135deg, #8b5e34, #6b4f2c)",
    color: "#fffdf8",
    padding: "16px",
    borderRadius: "14px",
    fontSize: "1rem",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 8px 24px rgba(139,94,52,0.3)",
  },
};

// Add keyframe animation in a style tag
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes shine {
    to {
      left: 200%;
    }
  }
`;
document.head.appendChild(styleSheet);
