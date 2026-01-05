import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import {
  Building2,
  Package,
  Handshake,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Leaf,
  Globe,
} from "lucide-react";

import { useLanguage } from "../../i18n/LanguageContext";

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const [activeNav, setActiveNav] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ---------- SCROLL ---------- */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- BODY LOCK ---------- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen && isMobile ? "hidden" : "";
  }, [mobileOpen, isMobile]);

  const navigationData = {
    company: {
      icon: Building2,
      label: t("nav.company"),
      items: [
        { label: t("nav.about"), path: "/about" },
        { label: t("nav.sourcing"), path: "/sourcing" },
        { label: t("nav.supply"), path: "/supply" },
        //{ label: t("nav.packaging"), path: "/packaging" },
      ],
    },
    products: {
      icon: Package,
      label: t("nav.products"),
      items: [
        //{ label: t("nav.allProducts"), path: "/products" },
        //{ label: t("nav.recipes"), path: "/recipes" },
      ],
    },
    business: {
      icon: Handshake,
      label: t("nav.business"),
      items: [
        //{ label: t("nav.franchise"), path: "/franchise" },
        //{ label: t("nav.contact"), path: "/contact" },
      ],
    },
  };

  return (
    <>
      <motion.header
        animate={{
          top: scrolled ? 12 : 20,
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.55)"
            : "rgba(255,255,255,0.75)",
          backdropFilter: scrolled ? "blur(6px)" : "blur(10px)",
        }}
        transition={{ duration: 0.25 }}
        style={styles.header}
      >
        <div style={styles.container}>
          {/* LOGO */}
          <a href="/" style={styles.logo}>
            <div style={styles.logoIcon}>
              <Leaf size={20} />
            </div>
            <div>
              <div style={styles.logoTitle}>AT Millets Araku Naturals</div>
              <div style={styles.logoSub}>Tribal Heritage</div>
            </div>
          </a>

          {/* NAV */}
          {isDesktop && (
            <nav style={styles.nav}>
              {Object.entries(navigationData).map(([key, data]) => {
                const Icon = data.icon;
                return (
                  <div
                    key={key}
                    style={styles.navWrapper}
                    onMouseEnter={() => setActiveNav(key)}
                    onMouseLeave={() => setActiveNav(null)}
                  >
                    <button style={styles.navButton}>
                      <Icon size={16} />
                      {!scrolled && (
                        <span style={styles.navLabel}>{data.label}</span>
                      )}
                      <ChevronDown size={14} />
                    </button>

                    <AnimatePresence>
                      {activeNav === key && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          style={styles.dropdown}
                        >
                          {data.items.map((item) => (
                            <motion.a
                              key={item.label}
                              href={item.path}
                              style={styles.dropdownLink}
                              whileHover={leafHover}
                            >
                              <span>{item.label}</span>
                              <ArrowRight size={14} />
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          )}

          {/* RIGHT ACTIONS */}
          <div style={styles.rightActions}>
            {/* LANGUAGE DROPDOWN */}
            {isDesktop && (
              <div
                style={styles.langWrapper}
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
              >
                <button style={styles.langButton}>
                  <Globe size={14} />
                  <span>{lang}</span>
                  <ChevronDown size={12} />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      style={styles.langDropdown}
                    >
                      {["EN", "TE", "HI"].map((l) => (
                        <button
                          key={l}
                          onClick={() => {
                            setLang(l);
                            setLangOpen(false);
                          }}
                          style={{
                            ...styles.langOption,
                            ...(lang === l ? styles.langActive : {}),
                          }}
                        >
                          {l}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* ================= MOBILE MENU ================= */}
            <AnimatePresence>
              {isMobile && mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  style={styles.mobileMenu}
                >
                  <div style={styles.mobileScroll}>
                    {/* LANGUAGE */}
                    <div style={styles.mobileSection}>
                      <div style={styles.mobileHeader}>{t("language")}</div>
                      <div style={styles.mobileLangRow}>
                        {["EN", "TE", "HI"].map((l) => (
                          <button
                            key={l}
                            onClick={() => setLang(l)}
                            style={{
                              ...styles.mobileLangBtn,
                              ...(lang === l ? styles.langActive : {}),
                            }}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* NAV SECTIONS */}
                    {Object.values(navigationData).map((section) => {
                      const Icon = section.icon;
                      return (
                        <div key={section.label} style={styles.mobileSection}>
                          <div style={styles.mobileHeader}>
                            <Icon size={14} />
                            {section.label}
                          </div>
                          {section.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.path}
                              style={styles.mobileLink}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA */}
            {isDesktop && (
              <motion.a
                href="/franchise"
                style={styles.cta}
                whileHover={{ scale: 1.04 }}
              >
                {t("nav.partner")}
                <ArrowRight size={16} />
              </motion.a>
            )}

            {isMobile && (
              <button
                style={styles.mobileToggle}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>
        </div>
      </motion.header>
    </>
  );
};

/* ---------- LEAF HOVER ---------- */
const leafHover = {
  background:
    "linear-gradient(135deg,#3c8b65,#2f6f4e),repeating-linear-gradient(30deg,rgba(255,255,255,0.18) 0 1px,transparent 6px)",
  color: "#fff",
  borderRadius: "14px 28px",
};

/* ---------- STYLES ---------- */
const styles = {
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    margin: "0 16px",
    zIndex: 1000,
    borderRadius: 16,
    border: "1px solid rgba(60,139,101,0.18)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },
  container: {
    height: 64,
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
  },
  logo: { display: "flex", gap: 12, textDecoration: "none" },
  logoIcon: {
    width: 34,
    height: 34,
    background: "linear-gradient(135deg,#2f6f4e,#3c8b65)",
    borderRadius: "12px 20px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoTitle: { fontWeight: 700, fontSize: 16 },
  logoSub: { fontSize: 10, color: "#6f8f7a" },

  nav: { display: "flex", justifyContent: "center", gap: 24 },
  navWrapper: { position: "relative" },
  navButton: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  navLabel: { whiteSpace: "nowrap" },

  dropdown: {
    position: "absolute",
    top: "calc(100% + 8px)",
    background: "#fff",
    borderRadius: 14,
    padding: 8,
    minWidth: 220,
  },
  dropdownLink: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 14px",
    textDecoration: "none",
    color: "#3b2f22",
    whiteSpace: "nowrap",
  },

  rightActions: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    position: "relative",
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
  },

  langWrapper: { position: "relative" },
  langButton: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    background: "transparent",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: 10,
    padding: "6px 10px",
    cursor: "pointer",
  },
  langDropdown: {
    position: "absolute",
    top: "calc(100% + 6px)",
    right: 0,
    background: "#fff",
    borderRadius: 10,
    padding: 6,
  },
  langOption: {
    display: "block",
    width: "100%",
    padding: "6px 10px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  langActive: {
    background: "#2f6f4e",
    color: "#fff",
    borderRadius: 6,
  },
  mobileMenu: {
    position: "fixed",
    top: 88,
    left: 16,
    right: 16,
    maxHeight: "calc(100vh - 120px)",
    background: "#ffffff",
    borderRadius: 16,
    zIndex: 999,
    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
    overflow: "hidden",
  },

  mobileScroll: {
    padding: 16,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
  },

  mobileSection: {
    marginBottom: 18,
  },

  mobileHeader: {
    fontSize: 12,
    fontWeight: 700,
    color: "#6f8f7a",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },

  mobileLink: {
    display: "block",
    padding: "10px 0",
    textDecoration: "none",
    color: "#3b2f22",
    fontWeight: 500,
  },

  mobileLangRow: {
    display: "flex",
    gap: 8,
  },

  mobileLangBtn: {
    flex: 1,
    padding: "8px 0",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: 8,
    background: "transparent",
    cursor: "pointer",
  },

  cta: {
    border: "1.5px solid #3c8b65",
    padding: "9px 18px",
    borderRadius: "14px 26px",
    textDecoration: "none",
    display: "flex",
    gap: 6,
    alignItems: "center",
  },

  mobileToggle: {
    border: "1px solid rgba(0,0,0,0.15)",
    background: "transparent",
    borderRadius: 8,
    width: 38,
    height: 38,
  },
};

export default Header;
