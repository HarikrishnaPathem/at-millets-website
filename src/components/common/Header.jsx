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
  Globe,
  Home,
  BookImage
} from "lucide-react";

import { useLanguage } from "../../i18n/LanguageContext";
import PartnerWithUsForm from "../PartnerWithUsForm";

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  const logo = "https://cdn.atmillets.com/media/images/logo.png";

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const [activeNav, setActiveNav] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [onDarkBg, setOnDarkBg] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [partnerOpen, setPartnerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = partnerOpen ? "hidden" : "";
  }, [partnerOpen]);

  // Check if current page is home
  useEffect(() => {
    const checkHomePage = () => {
      setIsHomePage(
        window.location.pathname === "/" ||
          window.location.pathname === "/index.html",
      );
    };

    checkHomePage();
    window.addEventListener("popstate", checkHomePage);

    return () => window.removeEventListener("popstate", checkHomePage);
  }, []);

  const getLangLabel = (code) => {
    switch (code) {
      case "TE":
        return "తెల";
      case "HI":
        return "हि";
      default:
        return "EN";
    }
  };

  /* ---------- SCROLL ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const darkSections = document.querySelectorAll("[data-dark]");
    if (!darkSections.length) return;

    let darkVisibleCount = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            darkVisibleCount++;
          } else {
            darkVisibleCount--;
          }
        });

        setOnDarkBg(darkVisibleCount > 0);
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.15,
      },
    );

    darkSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const headerTheme = onDarkBg
    ? {
        text: "#ffffff",
        subText: "#d1fae5",
        border: "rgba(255,255,255,0.28)",
        hoverBg: "rgba(255,255,255,0.12)",
        dropdownBg: "#0f1f1a",
      }
    : {
        text: "#1a1a1a",
        subText: "#1a5a3a",
        border: "rgba(0,0,0,0.12)",
        hoverBg: "rgba(0,0,0,0.06)",
        dropdownBg: "#ffffff",
      };

  /* ---------- BODY LOCK ---------- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const navigationData = {
    company: {
      icon: Building2,
      label: t("nav.company"),
      items: [
        { label: t("nav.about"), path: "/about" },
        { label: t("nav.sourcing"), path: "/sourcing" },
        { label: t("nav.supply"), path: "/supply" },
      ],
    },
    products: {
      icon: Package,
      label: t("nav.products"),
      items: [{ label: t("nav.allProducts"), path: "/products" }],
    },
    business: {
      icon: Handshake,
      label: t("nav.business"),
      items: [
        { label: t("nav.franchise"), path: "/franchise" },
        //{ label: t("nav.contact"), path: "/contact" },
      ],
    },
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        animate={{
          top: scrolled ? 10 : 16,
          backgroundColor: "rgba(47,111,78,0.15)",
          backdropFilter: "blur(6px)",
        }}
        transition={{ duration: 0.25 }}
        style={styles.header}
      >
        <div style={styles.container}>
          {/* LOGO */}
          <a href="/" style={styles.logo}>
            <div style={styles.logoIcon}>
              <img src={logo} alt="AT Millets Logo" style={styles.logoImage} />
            </div>
            <div>
              <div
                style={{
                  ...styles.logoTitle,
                  color: onDarkBg ? "#ffffff" : "#1a1a1a",
                }}
              >
                AT Millets Araku Naturals
              </div>
              <div
                style={{
                  ...styles.logoSub,
                  color: onDarkBg ? "#d1fae5" : "#1a5a3a",
                }}
              >
                Farmer Heritage
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          {isDesktop && (
            <nav style={styles.nav}>
              {/* HOME BUTTON */}
              {!isHomePage && (
                <a
                  href="/"
                  style={{
                    ...styles.homeButton,
                    color: headerTheme.text,
                    border: `1px solid ${headerTheme.border}`,
                  }}
                >
                  <Home size={16} />
                  <span>{t("nav.home") || "Home"}</span>
                </a>
              )}

              {Object.entries(navigationData).map(([key, data]) => {
                const Icon = data.icon;
                return (
                  <div
                    key={key}
                    style={styles.navWrapper}
                    onMouseEnter={() => setActiveNav(key)}
                    onMouseLeave={() => setActiveNav(null)}
                  >
                    <button
                      style={{
                        ...styles.navButton,
                        color: headerTheme.text,
                      }}
                    >
                      <Icon size={16} />
                      <span>{data.label}</span>
                      <ChevronDown size={14} />
                    </button>

                    <AnimatePresence>
                      {activeNav === key && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          style={{
                            ...styles.dropdown,
                            background: headerTheme.dropdownBg,
                          }}
                        >
                          {data.items.map((item) => (
                            <motion.a
                              key={item.label}
                              href={item.path}
                              style={{
                                ...styles.dropdownLink,
                                color: headerTheme.text,
                              }}
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

              <a
                href="/brochure"
                style={{
                  ...styles.navButton,
                  color: headerTheme.text,
                  border: "none",
                  paddingLeft: 0,
                }}
              >
                <BookImage size={16} />
                <span>{t("nav.brochure") || "Brochure"}</span>
              </a>
            </nav>
          )}

          {/* RIGHT ACTIONS */}
          <div style={styles.rightActions}>
            {/* DESKTOP LANGUAGE */}
            {isDesktop && (
              <div
                style={styles.langWrapper}
                onMouseEnter={() => setLangOpen(true)}
                onMouseLeave={() => setLangOpen(false)}
              >
                <button
                  style={{
                    ...styles.langButton,
                    color: headerTheme.text,
                    border: `1px solid ${headerTheme.border}`,
                  }}
                >
                  <Globe size={14} />
                  <span>{getLangLabel(lang)}</span>
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
                          onClick={() => setLang(l)}
                          style={{
                            ...styles.langOption,
                            ...(lang === l ? styles.langActive : {}),
                          }}
                        >
                          {getLangLabel(l)}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* PARTNER WITH US – DESKTOP */}
            {isDesktop && (
              <button
                onClick={() => setPartnerOpen(true)}
                style={{
                  ...styles.partnerButton,
                  color: headerTheme.text,
                  border: `1px solid ${headerTheme.border}`,
                }}
              >
                <Handshake size={16} />
                <span>{t("nav.partner") || "Partner With Us"}</span>
              </button>
            )}

            {/* MOBILE TOGGLE */}
            {isMobile && (
              <button
                style={{
                  ...styles.mobileToggle,
                  color: headerTheme.text,
                  border: `1px solid ${headerTheme.border}`,
                }}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>
        </div>

        {/* ===== MOBILE LANGUAGE BAR (ATTACHED) ===== */}
        {isMobile && (
          <div style={styles.mobileLangBar}>
            <LangPill code="EN" label="EN" />
            <LangPill code="TE" label="తెల" />
            <LangPill code="HI" label="हि" />
          </div>
        )}
      </motion.header>

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
            {/* HOME BUTTON IN MOBILE */}
            {!isHomePage && (
              <div style={styles.mobileSection}>
                <a
                  href="/"
                  style={{
                    ...styles.mobileLink,
                    fontWeight: 700,
                    color: "#2f6f4e",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Home
                    size={16}
                    style={{ display: "inline", marginRight: 6 }}
                  />
                  {t("nav.home") || "Home"}
                </a>
              </div>
            )}
            <div style={styles.mobileSection}>
              <button
                style={styles.mobilePartnerButton}
                onClick={() => {
                  setPartnerOpen(true);
                  setMobileOpen(false);
                }}
              >
                <Handshake size={16} />
                {t("nav.partner") || "Partner With Us"}
              </button>
            </div>

            {Object.values(navigationData).map((section) => (
              <div key={section.label} style={styles.mobileSection}>
                <div style={styles.mobileHeader}>{section.label}</div>
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
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {partnerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalOverlay}
            onClick={() => setPartnerOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              {/* MODAL HEADER */}
              <div style={styles.modalHeader}>
                <h3>Partner With Us</h3>
                <button
                  onClick={() => setPartnerOpen(false)}
                  style={styles.modalClose}
                >
                  <X size={18} />
                </button>
              </div>

              {/* FORM GOES HERE */}
              <PartnerWithUsForm onSuccess={() => setPartnerOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

/* ===== LANGUAGE PILL ===== */
const LangPill = ({ code, label }) => {
  const { lang, setLang } = useLanguage();
  return (
    <button
      onClick={() => setLang(code)}
      style={{
        ...styles.langPill,
        ...(lang === code ? styles.langPillActive : {}),
      }}
    >
      {label}
    </button>
  );
};

/* ================= STYLES ================= */

const styles = {
  header: {
    position: "fixed",
    left: 12,
    right: 12,
    zIndex: 1000,
    borderRadius: 18,
    border: "1px solid rgba(60,139,101,0.4)",
  },

  container: {
    height: 64,
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
  },

  logo: { display: "flex", gap: 12, textDecoration: "none" },
  logoIcon: {
    width: 38,
    height: 38,
    background: "#fff",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: { width: "100%", height: "100%", objectFit: "contain" },
  logoTitle: { fontWeight: 700, fontSize: 15 },
  logoSub: { fontSize: 12, fontWeight: 600 },

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: 24,
    alignItems: "center",
  },
  navWrapper: { position: "relative" },
  navButton: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  },

  homeButton: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    background: "transparent",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: 10,
    padding: "6px 12px",
    textDecoration: "none",
    fontWeight: 600,
    transition: "all 0.2s ease",
  },

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
    color: "#2f2f2f",
  },

  rightActions: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    justifyContent: "end",
  },

  mobileToggle: {
    width: 38,
    height: 38,
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.6)",
    background: "transparent",
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

  /* ===== MOBILE LANG BAR ===== */
  mobileLangBar: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    padding: "6px 0 10px",
  },

  langPill: {
    padding: "4px 10px",
    fontSize: 13,
    fontWeight: 700,
    borderRadius: 999,
    border: "2px solid rgba(0,0,0,0.5)",
    background: "transparent",
    color: "#2f6f4e",
  },

  langPillActive: {
    background: "linear-gradient(135deg,#2f6f4e,#3c8b65)",
    color: "#fff",
    border: "none",
  },

  /* ===== MOBILE MENU ===== */
  mobileMenu: {
    position: "fixed",
    top: 135,
    left: 16,
    right: 16,
    background: "#fff",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    zIndex: 999,
  },

  mobileSection: { marginBottom: 14 },
  mobileHeader: {
    fontSize: 12,
    fontWeight: 700,
    color: "#6f8f7a",
    marginBottom: 6,
  },
  mobileLink: {
    display: "block",
    padding: "8px 0",
    textDecoration: "none",
    color: "#2f2f2f",
    fontWeight: 500,
  },
  partnerButton: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    padding: "6px 14px",
    borderRadius: 12,
    background: "linear-gradient(135deg,#2f6f4e,#3c8b65)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },

  mobilePartnerButton: {
    width: "100%",
    display: "flex",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: 12,
    background: "linear-gradient(135deg,#2f6f4e,#3c8b65)",
    color: "#fff",
    fontWeight: 700,
    border: "none",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },

  modal: {
    background: "#fff",
    borderRadius: 18,
    width: "min(92vw, 460px)",
    padding: 20,
  },

  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalClose: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
};

export default Header;
