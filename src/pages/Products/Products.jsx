import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";
import { products, productCategories } from "../../data/products";
import { ListFilter, X, ChevronDown } from "lucide-react";

/* =========================================================
   PRODUCTS PAGE
========================================================= */

const FilterGroup = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
    style={styles.filterGroup}
  >
    <h4 style={styles.filterTitle}>
      <span style={styles.filterTitleDot}>●</span>
      {title}
    </h4>
    <div style={styles.filterOptions}>{children}</div>
  </motion.div>
);

const FilterCheckbox = ({ label, checked, onChange }) => (
  <motion.label
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    style={{
      ...styles.checkbox,
      ...(checked ? styles.checkboxActive : {}),
    }}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={styles.checkboxInput}
    />
    <span style={styles.checkboxLabel}>{label}</span>
    {checked && (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={styles.checkmark}
      >
        ✓
      </motion.span>
    )}
  </motion.label>
);

const toggleFilter = (filters, setFilters, key, value) => {
  setFilters((prev) => ({
    ...prev,
    [key]: prev[key].includes(value)
      ? prev[key].filter((v) => v !== value)
      : [...prev[key], value],
  }));
};

const Products = () => {
  const { t, lang } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState({
    category: [],
    packSize: [],
    type: [],
  });

  const clearFilters = () => {
    setFilters({
      category: [],
      packSize: [],
      type: [],
    });
    setSearchQuery("");
  };

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const activeFilterCount =
    filters.category.length + filters.packSize.length + filters.type.length;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      /* FILTER MATCHES */
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(product.category);

      const packSizeMatch =
        filters.packSize.length === 0 ||
        product.availableWeights?.some((w) => filters.packSize.includes(w));

      const typeMatch =
        filters.type.length === 0 || filters.type.includes(product.type);

      /* SEARCH MATCH */
      const q = searchQuery.toLowerCase().trim();

      const nameMatch =
        product.name?.en?.toLowerCase().includes(q) ||
        product.name?.te?.includes(searchQuery) ||
        product.name?.hi?.toLowerCase().includes(q);

      const categoryTextMatch = t(`products.filters.${product.category}`)
        .toLowerCase()
        .includes(q);

      const searchMatch = q === "" || nameMatch || categoryTextMatch;

      return categoryMatch && packSizeMatch && typeMatch && searchMatch;
    });
  }, [filters, searchQuery, t]);

  return (
    <section style={styles.wrapper}>
      <style>{`
        .product-card:hover .product-image {
          transform: scale(1.08);
        }
        .product-card:hover .product-overlay {
          opacity: 1;
        }
        .product-card:hover .explore-btn {
          transform: translateX(4px);
        }
        .filter-toggle:hover .chevron-icon {
          transform: translateY(2px);
        }
      `}</style>

      <div style={styles.background} />

      <div style={styles.container}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <h1 style={styles.title}>{t("products.page.title")}</h1>
          <p style={styles.subtitle}>{t("products.page.subtitle")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={styles.searchBar}
        >
          <input
            type="text"
            placeholder={t("products.search.placeholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />

          {searchQuery && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setSearchQuery("")}
              style={styles.searchClear}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={14} />
            </motion.button>
          )}
        </motion.div>

        {/* FILTER BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={styles.filterBar}
        >
          <div style={styles.filterInfo}>
            <span style={styles.productCount}>
              {filteredProducts.length} {t("products.productsFound")}
            </span>
          </div>

          <div style={styles.filterControls}>
            {activeFilterCount > 0 && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={clearFilters}
                style={styles.clearBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={14} /> Clear ({activeFilterCount})
              </motion.button>
            )}

            <motion.button
              onClick={() => setShowFilters((p) => !p)}
              className="filter-toggle"
              style={{
                ...styles.filterToggle,
                ...(showFilters ? styles.filterToggleActive : {}),
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ListFilter size={18} />
              <span>{t("products.filters.filter")}</span>
              {activeFilterCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={styles.filterBadge}
                >
                  {activeFilterCount}
                </motion.span>
              )}
              <motion.span
                className="chevron-icon"
                animate={{ rotate: showFilters ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* FILTER PANEL */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={styles.filterPanelWrapper}
            >
              <div style={styles.filterPanel}>
                <div style={styles.filterGrid}>
                  {/* CATEGORY FILTER */}
                  <FilterGroup
                    title={t("products.filters.category")}
                    delay={0.1}
                  >
                    {productCategories.map((cat) => (
                      <FilterCheckbox
                        key={cat.id}
                        label={t(`products.filters.${cat.id}`)}
                        checked={filters.category.includes(cat.id)}
                        onChange={() =>
                          toggleFilter(filters, setFilters, "category", cat.id)
                        }
                      />
                    ))}
                  </FilterGroup>

                  {/* PACK SIZE FILTER */}
                  <FilterGroup
                    title={t("products.filters.packSize")}
                    delay={0.15}
                  >
                    {["250g", "500g", "1kg", "2kg", "5kg"].map((size) => (
                      <FilterCheckbox
                        key={size}
                        label={size}
                        checked={filters.packSize.includes(size)}
                        onChange={() =>
                          toggleFilter(filters, setFilters, "packSize", size)
                        }
                      />
                    ))}
                  </FilterGroup>

                  {/* PRODUCT TYPE FILTER */}
                  <FilterGroup title={t("products.filters.type")} delay={0.2}>
                    {["raw", "flour", "readyToCook", "readyToEat"].map(
                      (type) => (
                        <FilterCheckbox
                          key={type}
                          label={t(`products.types.${type}`)}
                          checked={filters.type.includes(type)}
                          onChange={() =>
                            toggleFilter(filters, setFilters, "type", type)
                          }
                        />
                      )
                    )}
                  </FilterGroup>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <NoProductsState onReset={clearFilters} />
        ) : (
          <ProductGrid products={filteredProducts} lang={lang} />
        )}
      </div>
    </section>
  );
};

export default Products;

const NoProductsState = ({ onReset }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={styles.emptyState}
    >
      <div style={styles.emptyIcon}>🌾</div>

      <h3 style={styles.emptyTitle}>{t("products.empty.title")}</h3>

      <p style={styles.emptySubtitle}>{t("products.empty.subtitle")}</p>

      <button style={styles.resetBtn} onClick={onReset}>
        {t("products.empty.reset")}
      </button>
    </motion.div>
  );
};

/* =========================================================
   REUSABLE PRODUCT GRID
========================================================= */

const ProductGrid = ({ products, lang }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={styles.emptyState}
      >
        <div style={styles.emptyIcon}>🔍</div>
        <h3 style={styles.emptyTitle}>No products found</h3>
        <p style={styles.emptyText}>
          Try adjusting your filters to find what you're looking for.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      style={{
        ...styles.grid,
        gap: isMobile ? 24 : 36,
      }}
    >
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.45 }}
        >
          <ProductCard product={product} lang={lang} />
        </motion.div>
      ))}
    </div>
  );
};

/* =========================================================
   PRODUCT CARD
========================================================= */

const ProductCard = ({ product, lang }) => {
  const { t } = useLanguage();
  lang = lang.toLowerCase();
  return (
    <Link to={`/products/${product.slug}`} style={styles.cardLink}>
      <motion.div
        className="product-card"
        style={styles.card}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <div style={styles.imageWrap}>
          <img
            className="product-image"
            src={product.image}
            alt={product.name[lang]}
            style={styles.image}
            loading="lazy"
          />

          <div className="product-overlay" style={styles.imageOverlay}>
            <span style={styles.viewDetails}>
              {t("products.card.viewDetails")}
            </span>
          </div>
        </div>

        <div style={styles.cardContent}>
          <span style={styles.cardCategory}>
            {t(`products.filters.${product.category}`)}
          </span>

          <h3 style={styles.cardTitle}>{product.name[lang]}</h3>

          <p style={styles.cardDescription}>{product.shortDescription[lang]}</p>

          <div style={styles.cardFooter}>
            <span className="explore-btn" style={styles.exploreBtn}>
              {t("products.card.explore")}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "clamp(100px, 12vw, 140px) 0",
    background: "linear-gradient(to bottom, #fafffe 0%, #ffffff 100%)",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 25%, rgba(120,194,154,0.16), transparent 55%), radial-gradient(circle at 80% 75%, rgba(60,139,101,0.12), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "0 20px",
    position: "relative",
    zIndex: 2,
  },

  header: {
    maxWidth: 720,
    marginBottom: 48,
  },

  title: {
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
    fontWeight: 900,
    color: "#0d2817",
    marginBottom: 14,
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },

  subtitle: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
    fontWeight: 400,
  },

  filterBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    gap: 16,
    flexWrap: "wrap",
  },

  filterInfo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  productCount: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#3f5f4f",
    padding: "8px 16px",
    background: "rgba(120,194,154,0.1)",
    borderRadius: 999,
  },

  filterControls: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },

  clearBtn: {
    padding: "10px 18px",
    borderRadius: 999,
    border: "1px solid rgba(239,68,68,0.3)",
    background: "rgba(254,226,226,0.5)",
    color: "#dc2626",
    fontSize: "0.85rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    transition: "all 0.3s ease",
  },

  emptyState: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(135deg,#f3faf6,#ffffff)",
    borderRadius: 24,
    border: "1px dashed rgba(60,139,101,0.25)",
  },

  emptyIcon: {
    fontSize: "3rem",
    marginBottom: 16,
  },

  emptyTitle: {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 8,
  },

  emptySubtitle: {
    fontSize: "0.95rem",
    color: "#5f8f75",
    maxWidth: 420,
    margin: "0 auto 24px",
    lineHeight: 1.6,
  },

  resetBtn: {
    padding: "10px 26px",
    borderRadius: 999,
    border: "none",
    background: "linear-gradient(135deg,#3c8b65,#2d7050)",
    color: "#fff",
    fontWeight: 700,
    fontSize: "0.9rem",
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(60,139,101,0.3)",
  },

  filterToggle: {
    padding: "12px 24px",
    borderRadius: 999,
    border: "2px solid rgba(60,139,101,0.25)",
    background: "#ffffff",
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "#3c8b65",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 12px rgba(60,139,101,0.08)",
  },

  filterToggleActive: {
    background: "linear-gradient(135deg, #3c8b65 0%, #2d7050 100%)",
    color: "#ffffff",
    borderColor: "#3c8b65",
    boxShadow: "0 8px 20px rgba(60,139,101,0.25)",
  },

  filterBadge: {
    background: "rgba(255,255,255,0.3)",
    color: "inherit",
    fontSize: "0.75rem",
    fontWeight: 800,
    padding: "2px 8px",
    borderRadius: 999,
    minWidth: 20,
    textAlign: "center",
  },

  filterPanelWrapper: {
    overflow: "hidden",
  },

  filterPanel: {
    background: "linear-gradient(135deg, #ffffff 0%, #f9fffe 100%)",
    borderRadius: 24,
    padding: 32,
    marginBottom: 48,
    border: "2px solid rgba(60,139,101,0.12)",
    boxShadow:
      "0 20px 50px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
  },

  filterGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 32,
  },

  filterGroup: {
    marginBottom: 0,
  },

  filterTitle: {
    fontSize: "0.8rem",
    fontWeight: 800,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#3c8b65",
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  filterTitleDot: {
    color: "#78c29a",
    fontSize: "0.6rem",
  },

  filterOptions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },

  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.9rem",
    cursor: "pointer",
    padding: "10px 16px",
    borderRadius: 999,
    border: "1.5px solid rgba(60,139,101,0.2)",
    background: "#ffffff",
    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
    position: "relative",
    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
  },

  checkboxActive: {
    background: "linear-gradient(135deg, #e8f5ee 0%, #d4ede3 100%)",
    borderColor: "#3c8b65",
    color: "#2d7050",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(60,139,101,0.15)",
  },

  searchBar: {
    position: "relative",
    maxWidth: 520,
    marginBottom: 32,
  },

  searchInput: {
    width: "100%",
    padding: "14px 44px 14px 18px",
    borderRadius: 999,
    border: "2px solid rgba(60,139,101,0.2)",
    fontSize: "0.95rem",
    outline: "none",
    color: "#0d2817",
    background: "#ffffff",
    boxShadow: "0 6px 16px rgba(60,139,101,0.08)",
    transition: "all 0.25s ease",
  },

  searchClear: {
    position: "absolute",
    right: 14,
    top: "20%",
    transform: "translateY(-50%)",
    border: "none",
    background: "rgba(60,139,101,0.12)",
    borderRadius: "50%",
    width: 28,
    height: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#3c8b65",
  },

  checkboxInput: {
    appearance: "none",
    width: 0,
    height: 0,
    margin: 0,
  },

  checkboxLabel: {
    fontSize: "0.88rem",
  },

  checkmark: {
    color: "#3c8b65",
    fontWeight: 800,
    fontSize: "0.9rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 36,
  },

  cardLink: {
    textDecoration: "none",
    display: "block",
  },

  card: {
    background: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 8px 24px rgba(60,139,101,0.08)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  imageWrap: {
    height: 240,
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #f3faf6 0%, #e8f5ee 100%)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(13,40,23,0.7) 0%, transparent 100%)",
    opacity: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 20,
    transition: "opacity 0.3s ease",
  },

  viewDetails: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "0.95rem",
    letterSpacing: "0.05em",
  },

  cardContent: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 10,
  },

  cardCategory: {
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#78c29a",
    fontWeight: 700,
  },

  cardTitle: {
    fontSize: "1.15rem",
    fontWeight: 800,
    color: "#0d2817",
    lineHeight: 1.3,
    minHeight: "2.6em",
  },

  cardDescription: {
    fontSize: "0.9rem",
    color: "#5f8f75",
    lineHeight: 1.6,
    flexGrow: 1,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  cardFooter: {
    marginTop: 12,
    paddingTop: 16,
    borderTop: "1px solid rgba(60,139,101,0.1)",
  },

  exploreBtn: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "#3c8b65",
    letterSpacing: "0.05em",
    transition: "transform 0.2s ease",
  },

  emptyText: {
    fontSize: "1rem",
    color: "#5f8f75",
    maxWidth: 400,
    margin: "0 auto",
  },
};
