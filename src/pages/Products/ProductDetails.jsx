import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";
import { products } from "../../data/products";
import NutritionLabel from "../../components/products/NutritionLabel";
import {
  ArrowLeft,
  Package,
  Timer,
  Thermometer,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   PRODUCT DETAILS PAGE
========================================================= */

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const [selectedImage, setSelectedImage] = useState(0);

  const language = lang.toLowerCase();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={styles.notFound}
      >
        <div style={styles.notFoundIcon}>📦</div>
        <h2 style={styles.notFoundTitle}>{t("products.details.notFound")}</h2>
        <p style={styles.notFoundText}>
          The product you're looking for doesn't exist.
        </p>
        <button onClick={() => navigate("/products")} style={styles.backButton}>
          ← Back to Products
        </button>
      </motion.div>
    );
  }

  const images = product.images || [product.image];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "1fr 1fr"
            : "1fr 1.3fr",
          gap: isMobile ? 32 : 48,
        }}
      >
        {/* BACK BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate("/products")}
          style={styles.backBtn}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          <span>{t("products.details.back")}</span>
        </motion.button>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            ...styles.imageSection,
            position: isMobile ? "static" : "sticky",
            top: isMobile ? "auto" : 100,
          }}
        >
          <div
            style={{
              ...styles.imageWrapper,
              aspectRatio: isMobile ? "4 / 3" : "1 / 1",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={images[selectedImage]}
                alt={product.name[language]}
                style={styles.mainImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  style={{ ...styles.navBtn, ...styles.navBtnLeft }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  style={{ ...styles.navBtn, ...styles.navBtnRight }}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Indicator Dots */}
            {images.length > 1 && (
              <div style={styles.imageDots}>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      ...styles.dot,
                      ...(idx === selectedImage ? styles.dotActive : {}),
                    }}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && !isMobile && (
            <div style={styles.thumbnailGrid}>
              {images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  style={{
                    ...styles.thumbnail,
                    ...(idx === selectedImage ? styles.thumbnailActive : {}),
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    style={styles.thumbnailImage}
                  />
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        {/* CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={styles.content}
        >
          <span style={styles.category}>
            {t(`products.filters.${product.category}`)}
          </span>

          <h1
            style={{
              ...styles.title,
              fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 2.8rem)",
            }}
          >
            {product.name[language]}
          </h1>

          <p style={styles.shortDescription}>
            {product.shortDescription[language]}
          </p>

          {/* Quick Info Cards */}
          <div
            style={{
              ...styles.quickInfo,
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            }}
          >
            <QuickInfoCard
              icon={<Timer size={20} />}
              label={t("products.details.shelfLife")}
              value={product.shelfLife?.[language]}
            />
            <QuickInfoCard
              icon={<Package size={20} />}
              label={t("products.details.packSizes")}
              value={product.availableWeights?.join(", ")}
            />
            <QuickInfoCard
              icon={<Thermometer size={20} />}
              label={t("products.details.storage")}
              value={product.storage?.[language]}
            />
            <QuickInfoCard
              icon={<Award size={20} />}
              label={t("products.details.certifications")}
              value={product.certifications?.join(", ")}
            />
          </div>

          {/* Tabbed Content Sections */}
          <div style={styles.sections}>
            <DetailBlock
              title={t("products.details.description")}
              text={product.details?.description?.[language]}
              icon="📖"
            />

            <DetailBlock
              title={t("products.details.benefits")}
              text={product.details?.benefits?.[language]}
              icon="✨"
            />

            <DetailBlock
              title={t("products.details.sourcing")}
              text={product.details?.sourcing?.[language]}
              icon="🌱"
            />

            <DetailBlock
              title={t("products.details.processing")}
              text={product.details?.processing?.[language]}
              icon="⚙️"
            />

            <DetailBlock
              title={t("products.details.additional")}
              text={product.details?.additionalInfo?.[language]}
              icon="ℹ️"
            />
          </div>

          {/* Nutrition Label */}
          <NutritionLabel
            nutritionText={product.details?.nutrition?.[language]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetails;

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

const DetailBlock = ({ title, text, icon }) => {
  if (!text) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={styles.block}
    >
      <h3 style={styles.blockTitle}>
        {/*<span style={styles.blockIcon}>{icon}</span>*/}
        {title}
      </h3>
      <p style={styles.blockText}>{text}</p>
    </motion.div>
  );
};

const QuickInfoCard = ({ icon, label, value }) => {
  if (!value) return null;

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(60,139,101,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={styles.quickInfoCard}
    >
      <div style={styles.quickInfoIcon}>{icon}</div>
      <div style={styles.quickInfoContent}>
        <span style={styles.quickInfoLabel}>{label}</span>
        <span style={styles.quickInfoValue}>{value}</span>
      </div>
    </motion.div>
  );
};

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "clamp(80px, 10vw, 140px) 0",
    background: "linear-gradient(to bottom, #fafffe 0%, #ffffff 100%)",
    minHeight: "100vh",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 25%, rgba(120,194,154,0.12), transparent 50%), radial-gradient(circle at 80% 75%, rgba(60,139,101,0.08), transparent 50%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1300,
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    position: "relative",
    zIndex: 2,
  },

  backBtn: {
    position: "absolute",
    top: -60,
    left: 20,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 20px",
    background: "rgba(255, 255, 255, 0.9)",
    border: "2px solid rgba(60,139,101,0.2)",
    borderRadius: 999,
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#3c8b65",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  imageSection: {
    position: "sticky",
    top: 100,
    height: "fit-content",
  },

  imageWrapper: {
    position: "relative",
    borderRadius: 24,
    overflow: "hidden",
    background: "linear-gradient(135deg, #f3faf6 0%, #e8f5ee 100%)",
    boxShadow: "0 20px 60px rgba(13, 40, 23, 0.12)",
    aspectRatio: "1 / 1",
  },

  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255, 255, 255, 0.95)",
    border: "none",
    borderRadius: "50%",
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#3c8b65",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    zIndex: 10,
  },

  navBtnLeft: {
    left: 16,
  },

  navBtnRight: {
    right: 16,
  },

  imageDots: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 8,
    zIndex: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.6)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: 0,
  },

  dotActive: {
    background: "#ffffff",
    width: 24,
    borderRadius: 5,
  },

  thumbnailGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
    gap: 12,
    marginTop: 16,
  },

  thumbnail: {
    border: "3px solid transparent",
    borderRadius: 12,
    overflow: "hidden",
    cursor: "pointer",
    background: "none",
    padding: 0,
    transition: "all 0.3s ease",
    aspectRatio: "1 / 1",
  },

  thumbnailActive: {
    borderColor: "#3c8b65",
    boxShadow: "0 4px 12px rgba(60,139,101,0.3)",
  },

  thumbnailImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  category: {
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#78c29a",
    fontWeight: 700,
    display: "inline-block",
    padding: "6px 12px",
    background: "rgba(120,194,154,0.15)",
    borderRadius: 999,
    width: "fit-content",
  },

  title: {
    fontWeight: 900,
    color: "#0d2817",
    margin: "0",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  shortDescription: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
    fontWeight: 400,
  },

  quickInfo: {
    display: "grid",
    gap: 16,
    marginTop: 8,
  },

  quickInfoCard: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: 20,
    background: "linear-gradient(135deg, #ffffff 0%, #f9fffe 100%)",
    borderRadius: 16,
    border: "2px solid rgba(60,139,101,0.12)",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(60,139,101,0.08)",
  },

  quickInfoIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: "linear-gradient(135deg, #3c8b65 0%, #2d7050 100%)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 4px 12px rgba(60,139,101,0.3)",
  },

  quickInfoContent: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  quickInfoLabel: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#78c29a",
    fontWeight: 700,
  },

  quickInfoValue: {
    fontSize: "0.9rem",
    color: "#0d2817",
    fontWeight: 600,
    lineHeight: 1.4,
  },

  sections: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 16,
  },

  block: {
    padding: 24,
    borderRadius: 16,
    background: "rgba(243, 250, 246, 0.5)",
    border: "1px solid rgba(60,139,101,0.15)",
  },

  blockTitle: {
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#2d7050",
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  blockIcon: {
    fontSize: "1.3rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
  },

  blockText: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#4b6b5a",
  },

  notFound: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70vh",
    padding: 40,
    textAlign: "center",
  },

  notFoundIcon: {
    fontSize: "5rem",
    marginBottom: 24,
    filter: "grayscale(1)",
    opacity: 0.5,
  },

  notFoundTitle: {
    fontSize: "2rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 12,
  },

  notFoundText: {
    fontSize: "1.05rem",
    color: "#5f8f75",
    marginBottom: 32,
  },

  backButton: {
    padding: "14px 32px",
    background: "linear-gradient(135deg, #3c8b65 0%, #2d7050 100%)",
    color: "#ffffff",
    border: "none",
    borderRadius: 999,
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(60,139,101,0.3)",
  },
};
