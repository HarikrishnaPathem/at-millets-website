import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Button from "../../components/common/Button";
import { AnimatePresence } from "framer-motion";

/* =========================================================
   HOME PAGE – PART 1
   (Hero • Story • Sourcing • Process • Products • Carousel)
========================================================= */

const Home = () => {
  const heroRef = useRef(null);

  /* ---------- Scroll-based Parallax ---------- */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const heroFade = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div style={styles.page}>
      {/* =====================================================
         HERO SECTION (CINEMATIC, GRAIN-THEMED)
      ===================================================== */}
      <section ref={heroRef} style={styles.hero}>
        {/* Parallax Overlay */}
        <motion.div
          style={{
            ...styles.heroOverlay,
            y: heroParallaxY,
            opacity: heroFade,
          }}
        />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={styles.heroContent}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={styles.heroBadge}
          >
            🌾 From the Hills of Araku
          </motion.span>

          <h1 style={styles.heroTitle}>
            Ancient Millets.
            <br />
            Modern Nutrition.
          </h1>

          <p style={styles.heroSubtitle}>
            Premium millets, spices and natural foods sourced directly from
            tribal farmers — processed with care, delivered with integrity, and
            crafted for modern lifestyles.
          </p>

          <div style={styles.heroActions}>
            <Button size="lg">Explore Products →</Button>
            <Button variant="secondary" size="lg">
              Become a Franchise
            </Button>
          </div>
        </motion.div>

        {/* Floating Organic Shapes */}
        <FloatingShape style={styles.shapeOne} delay={0} />
        <FloatingShape style={styles.shapeTwo} delay={1.4} />
        <FloatingShape style={styles.shapeThree} delay={2.8} />
        <FloatingShape style={styles.shapeFour} delay={4.2} />

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          style={styles.scrollIndicator}
        >
          <span style={styles.scrollText}>Scroll</span>
          <span style={styles.scrollArrow}>↓</span>
        </motion.div>
      </section>

      {/* =====================================================
         SECTION 1 – BRAND STORY (SPLIT)
      ===================================================== */}
      <SplitSection
        title="Rooted in Tribal Wisdom"
        text="AT Millets is built on a foundation of trust with tribal farmers
        of Araku Valley. We source directly from communities that have
        cultivated millets for centuries, ensuring fair trade, dignity,
        and sustainable livelihoods."
        imageLabel="Image: Tribal farmers harvesting millets in Araku hills"
      />

      {/* =====================================================
         SECTION 2 – ETHICAL SOURCING (VISUAL)
      ===================================================== */}
      <VisualSection
        title="Ethical Sourcing at the Origin"
        subtitle="No middlemen. No compromise."
        description="Every grain we process begins its journey in the hills
        of Araku. By eliminating intermediaries, we guarantee transparency,
        traceability, and equitable pricing for farmers."
        imageLabel="Image: Close-up of raw millet grains being hand-sorted"
      />

      {/* =====================================================
         SECTION 3 – PROCESS FLOW (TIMELINE GRID)
      ===================================================== */}
      <section style={styles.processSection}>
        <SectionHeader
          title="From Farm to Store"
          subtitle="A carefully designed supply chain"
        />

        <div style={styles.processGrid}>
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={styles.processCard}
            >
              <span style={styles.processIndex}>{index + 1}</span>
              <h4 style={styles.processTitle}>{step.title}</h4>
              <p style={styles.processText}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
         SECTION 4 – PRODUCT UNIVERSE (GRID)
      ===================================================== */}
      <section style={styles.categoriesSection}>
        <SectionHeader
          title="Our Product Universe"
          subtitle="One brand. Multiple formats."
        />

        <div style={styles.categoriesGrid}>
          {PRODUCT_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={styles.categoryCard}
            >
              <span style={styles.categoryIcon}>{cat.icon}</span>
              <h4 style={styles.categoryTitle}>{cat.title}</h4>
              <p style={styles.categoryText}>{cat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
         SECTION 5 – FEATURED MILLETS (CAROUSEL)
      ===================================================== */}
      <ProductCarousel />

      <PackagingShowcase />
      <QualitySection />
      <CertificationsStrip />
      <Testimonials />
      <FAQSection />
      <SustainabilitySection />
      <CommunitySection />
      <FinalCTA />
      <PreFooterStatement />
    </div>
  );
};

export default Home;

/* =========================================================
   REUSABLE / SUPPORTING COMPONENTS
========================================================= */

const FloatingShape = ({ style, delay }) => (
  <motion.div
    animate={{ y: [0, -40, 0], rotate: [0, 12, 0] }}
    transition={{ repeat: Infinity, duration: 10, delay }}
    style={style}
  />
);

const SectionHeader = ({ title, subtitle }) => (
  <div style={styles.sectionHeader}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    <p style={styles.sectionSubtitle}>{subtitle}</p>
  </div>
);

const SplitSection = ({ title, text, imageLabel }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    style={styles.splitSection}
  >
    <div>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <p style={styles.sectionText}>{text}</p>
    </div>

    <div style={styles.imagePlaceholder}>{imageLabel}</div>
  </motion.section>
);

const VisualSection = ({ title, subtitle, description, imageLabel }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={styles.visualSection}
  >
    <h2 style={styles.sectionTitle}>{title}</h2>
    <p style={styles.sectionSubtitle}>{subtitle}</p>
    <p style={styles.sectionText}>{description}</p>

    <div style={styles.imageWidePlaceholder}>{imageLabel}</div>
  </motion.section>
);

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);
  const items = [
    "Foxtail Millet",
    "Finger Millet",
    "Little Millet",
    "Barnyard Millet",
  ];

  return (
    <section style={styles.carouselSection}>
      <SectionHeader
        title="Featured Millets"
        subtitle="Naturally nutrient-rich"
      />

      <motion.div
        key={index}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.carouselItem}
      >
        {items[index]}
      </motion.div>

      <div style={styles.carouselControls}>
        <Button
          variant="ghost"
          onClick={() => setIndex((index + 1) % items.length)}
        >
          Next →
        </Button>
      </div>
    </section>
  );
};

/* =========================================================
   DATA
========================================================= */

const PROCESS_STEPS = [
  {
    title: "Tribal Sourcing",
    text: "Millets sourced directly from tribal farmers in Araku Valley.",
  },
  {
    title: "District Processing",
    text: "Specialized district-wise processing units for each millet type.",
  },
  {
    title: "Quality Testing",
    text: "Batch-level quality checks ensuring purity and consistency.",
  },
  {
    title: "Eco Packaging",
    text: "Multiple SKUs packed hygienically for retail and bulk.",
  },
  {
    title: "Franchise Distribution",
    text: "Shipped to franchise outlets across regions.",
  },
];

const PRODUCT_CATEGORIES = [
  {
    icon: "🌾",
    title: "Raw Millets",
    text: "Unpolished, nutrient-rich ancient grains.",
  },
  {
    icon: "🥣",
    title: "Flours & Rava",
    text: "Stone-ground for better nutrition retention.",
  },
  {
    icon: "🍛",
    title: "Instant Mixes",
    text: "Upma, dosa, idly & more.",
  },
  {
    icon: "🍘",
    title: "Savouries",
    text: "Healthy laddus & snacks.",
  },
  {
    icon: "🌶️",
    title: "Spices",
    text: "Pure turmeric, pepper & powders.",
  },
];

/* =========================================================
   STYLES – PART 1
========================================================= */

const styles = {
  page: {
    background: "linear-gradient(180deg,#fffdf8,#fffaf0)",
  },

  hero: {
    position: "relative",
    padding: "180px 32px 160px",
    overflow: "hidden",
    background:
      "radial-gradient(circle at 20% 30%, rgba(200,162,77,0.45), transparent 60%), radial-gradient(circle at 80% 40%, rgba(139,94,52,0.45), transparent 60%)",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
  },
  heroContent: {
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },
  heroBadge: {
    padding: "10px 20px",
    borderRadius: "999px",
    background: "rgba(200,162,77,0.35)",
    fontWeight: 600,
    display: "inline-block",
    marginBottom: "28px",
  },
  heroTitle: {
    fontSize: "4.2rem",
    fontWeight: 900,
    lineHeight: 1.1,
    background: "linear-gradient(135deg,#8b5e34,#6b4f2c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "28px",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    marginBottom: "44px",
    color: "#4a3724",
  },
  heroActions: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "28px",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 0.7,
    textAlign: "center",
  },
  scrollText: {
    fontSize: "0.8rem",
  },
  scrollArrow: {
    fontSize: "1.1rem",
  },

  shapeOne: {
    position: "absolute",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background: "rgba(200,162,77,0.4)",
    top: "-90px",
    left: "-120px",
  },
  shapeTwo: {
    position: "absolute",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "rgba(139,94,52,0.38)",
    bottom: "40px",
    right: "-80px",
  },
  shapeThree: {
    position: "absolute",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "rgba(200,162,77,0.28)",
    top: "42%",
    right: "14%",
  },
  shapeFour: {
    position: "absolute",
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    background: "rgba(139,94,52,0.25)",
    top: "18%",
    left: "18%",
  },

  splitSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "64px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "140px 32px",
  },
  imagePlaceholder: {
    background: "#f3eadf",
    borderRadius: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8b7355",
    fontStyle: "italic",
  },

  visualSection: {
    padding: "140px 32px",
    textAlign: "center",
    background: "linear-gradient(180deg,#f9f2e8,#fffdf8)",
  },
  imageWidePlaceholder: {
    marginTop: "48px",
    height: "280px",
    background: "#efe4d6",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8b7355",
    fontStyle: "italic",
  },

  processSection: {
    padding: "140px 32px",
  },
  processGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "28px",
    marginTop: "48px",
  },
  processCard: {
    padding: "36px",
    borderRadius: "20px",
    background: "#fffdf8",
    boxShadow: "0 16px 40px rgba(107,79,44,0.14)",
  },
  processIndex: {
    fontSize: "0.8rem",
    opacity: 0.6,
  },
  processTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    margin: "10px 0",
  },
  processText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
  },

  categoriesSection: {
    padding: "140px 32px",
    background: "#fffaf0",
  },
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "28px",
    marginTop: "48px",
  },
  categoryCard: {
    padding: "44px",
    background: "#fffdf8",
    borderRadius: "22px",
    textAlign: "center",
    boxShadow: "0 14px 34px rgba(107,79,44,0.12)",
  },
  categoryIcon: {
    fontSize: "2rem",
    marginBottom: "12px",
  },
  categoryTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "8px",
  },
  categoryText: {
    fontSize: "0.95rem",
  },

  carouselSection: {
    padding: "140px 32px",
    textAlign: "center",
    background: "linear-gradient(135deg,#f3eadf,#fffdf8)",
  },
  carouselItem: {
    fontSize: "2.2rem",
    fontWeight: 700,
    margin: "44px 0",
  },
  carouselControls: {
    display: "flex",
    justifyContent: "center",
  },

  sectionHeader: {
    textAlign: "center",
    marginBottom: "48px",
  },
  sectionTitle: {
    fontSize: "2.6rem",
    fontWeight: 800,
    marginBottom: "12px",
    color: "#3f2f1c",
  },
  sectionSubtitle: {
    fontSize: "1rem",
    color: "#8b5e34",
    fontWeight: 600,
  },
  sectionText: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#5a4632",
  },
};
/* =========================================================
   HOME PAGE – PART 2
   (Trust • Sustainability • Quality • Community • CTA)
========================================================= */

/* =====================================================
   SECTION 6 – METRICS / TRUST STRIP
===================================================== */
const MetricsStrip = () => (
  <section style={styles.metricsSection}>
    <div style={styles.metricsGrid}>
      {METRICS.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          style={styles.metricCard}
        >
          <span style={styles.metricValue}>{m.value}</span>
          <span style={styles.metricLabel}>{m.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

/* =====================================================
   SECTION 7 – SUSTAINABILITY (IMMERSIVE)
===================================================== */
const SustainabilitySection = () => (
  <section style={styles.sustainabilitySection}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={styles.sustainabilityContent}
    >
      <h2 style={styles.sectionTitle}>Sustainability at the Core</h2>
      <p style={styles.sectionText}>
        Millets are climate-resilient crops requiring significantly less water.
        Our sourcing practices preserve biodiversity, reduce carbon footprint,
        and empower tribal communities to thrive sustainably.
      </p>

      <div style={styles.sustainabilityVisual}>
        Image: Millet crops growing in dry, high-altitude terrain
      </div>
    </motion.div>
  </section>
);

/* =====================================================
   SECTION 8 – PACKAGING & SKU SHOWCASE
===================================================== */
const PackagingShowcase = () => (
  <section style={styles.packagingSection}>
    <SectionHeader
      title="Thoughtfully Packaged"
      subtitle="From 50g samplers to 5kg bulk packs"
    />

    <div style={styles.packagingGrid}>
      {PACKAGING_SKUS.map((sku, i) => (
        <motion.div
          key={sku}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          style={styles.packagingCard}
        >
          <div style={styles.packagingImage}>Image: {sku} millet pack</div>
          <span style={styles.packagingLabel}>{sku}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

/* =====================================================
   SECTION 9 – QUALITY & TESTING LAB
===================================================== */
const QualitySection = () => (
  <section style={styles.qualitySection}>
    <div style={styles.qualityGrid}>
      <div>
        <h2 style={styles.sectionTitle}>Quality Without Compromise</h2>
        <p style={styles.sectionText}>
          Every batch undergoes stringent quality checks — moisture levels,
          purity testing, microbial safety, and packaging integrity — ensuring
          consistent excellence.
        </p>
      </div>

      <div style={styles.imagePlaceholder}>
        Image: Quality testing lab with modern equipment
      </div>
    </div>
  </section>
);

/* =====================================================
   SECTION 10 – CERTIFICATIONS STRIP
===================================================== */
const CertificationsStrip = () => (
  <section style={styles.certificationsSection}>
    {CERTIFICATIONS.map((c) => (
      <motion.div
        key={c}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={styles.certBadge}
      >
        {c}
      </motion.div>
    ))}
  </section>
);

/* =====================================================
   SECTION 11 – TESTIMONIALS (CAROUSEL)
===================================================== */
const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={styles.testimonialSection}>
      <SectionHeader
        title="Trusted by Partners & Consumers"
        subtitle="Real voices. Real impact."
      />

      <motion.div
        key={active}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.testimonialCard}
      >
        “{TESTIMONIALS[active].quote}”
        <span style={styles.testimonialAuthor}>
          — {TESTIMONIALS[active].author}
        </span>
      </motion.div>

      <Button
        variant="ghost"
        onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
      >
        Next Testimonial →
      </Button>
    </section>
  );
};

/* =====================================================
   SECTION 12 – FAQ (ACCORDION)
===================================================== */
const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section style={styles.faqSection}>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know"
      />

      <div style={styles.faqList}>
        {FAQS.map((f, i) => (
          <div key={f.q} style={styles.faqItem}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={styles.faqQuestion}
            >
              {f.q}
              <span>{open === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={styles.faqAnswer}
                >
                  {f.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

/* =====================================================
   SECTION 13 – COMMUNITY / NEWSLETTER
===================================================== */
const CommunitySection = () => (
  <section style={styles.communitySection}>
    <h2 style={styles.sectionTitle}>Join Our Community</h2>
    <p style={styles.sectionText}>
      Recipes, health insights, franchise updates & more — delivered with care.
    </p>

    <div style={styles.communityBox}>Email Subscription Form Placeholder</div>
  </section>
);

/* =====================================================
   SECTION 14 – FINAL CTA
===================================================== */
const FinalCTA = () => (
  <section style={styles.finalCta}>
    <h2 style={styles.finalTitle}>Partner With Purpose</h2>
    <p style={styles.finalText}>
      Become part of a movement that nourishes people and empowers communities.
    </p>
    <Button size="lg">Become a Franchise Partner →</Button>
  </section>
);

/* =====================================================
   SECTION 15 – PRE-FOOTER BRAND STATEMENT
===================================================== */
const PreFooterStatement = () => (
  <section style={styles.preFooter}>
    <p style={styles.preFooterText}>
      AT Millets is not just a food brand — it’s a commitment to heritage,
      health, and honest growth.
    </p>
  </section>
);

/* =====================================================
   DATA – PART 2
===================================================== */

const METRICS = [
  { value: "1000+", label: "Tribal Farmers" },
  { value: "12+", label: "Processing Units" },
  { value: "50+", label: "Product SKUs" },
  { value: "5+", label: "States Served" },
];

const PACKAGING_SKUS = ["50g", "100g", "250g", "500g", "1kg", "5kg"];

const CERTIFICATIONS = [
  "FSSAI Certified",
  "ISO Standards",
  "Organic Practices",
  "Quality Assured",
];

const TESTIMONIALS = [
  {
    quote: "AT Millets helped us build a profitable franchise with integrity.",
    author: "Franchise Partner, AP",
  },
  {
    quote: "Clean, authentic products with a powerful story behind them.",
    author: "Nutrition Consultant",
  },
  {
    quote: "Reliable supply chain and excellent support.",
    author: "Retail Distributor",
  },
];

const FAQS = [
  {
    q: "Do you source directly from farmers?",
    a: "Yes. We work directly with tribal farmers in Araku Valley.",
  },
  {
    q: "Are your products preservative-free?",
    a: "Absolutely. No artificial preservatives or additives.",
  },
  {
    q: "How can I become a franchise partner?",
    a: "Visit our Franchise page or contact our team directly.",
  },
];

/* =====================================================
   STYLES – PART 2
===================================================== */

styles.metricsSection = {
  padding: "120px 32px",
  background: "#fffdf8",
};

styles.metricsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "28px",
  maxWidth: "1200px",
  margin: "0 auto",
};

styles.metricCard = {
  padding: "44px",
  background: "#fffaf0",
  borderRadius: "22px",
  textAlign: "center",
};

styles.metricValue = {
  fontSize: "2.2rem",
  fontWeight: 800,
};

styles.metricLabel = {
  fontSize: "0.9rem",
};

styles.sustainabilitySection = {
  padding: "140px 32px",
  background: "linear-gradient(180deg,#f3eadf,#fffdf8)",
};

styles.sustainabilityContent = {
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

styles.sustainabilityVisual = {
  marginTop: "48px",
  height: "260px",
  background: "#efe4d6",
  borderRadius: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

styles.packagingSection = {
  padding: "140px 32px",
};

styles.packagingGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
  gap: "24px",
};

styles.packagingCard = {
  padding: "28px",
  background: "#fffdf8",
  borderRadius: "18px",
  textAlign: "center",
};

styles.packagingImage = {
  height: "120px",
  background: "#efe4d6",
  borderRadius: "14px",
  marginBottom: "12px",
};

styles.packagingLabel = {
  fontWeight: 600,
};

styles.qualitySection = {
  padding: "140px 32px",
  background: "#fffaf0",
};

styles.qualityGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "64px",
  maxWidth: "1200px",
  margin: "0 auto",
};

styles.certificationsSection = {
  padding: "64px 32px",
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  flexWrap: "wrap",
};

styles.certBadge = {
  padding: "16px 24px",
  borderRadius: "999px",
  background: "#fffaf0",
};

styles.testimonialSection = {
  padding: "140px 32px",
  textAlign: "center",
};

styles.testimonialCard = {
  maxWidth: "720px",
  margin: "0 auto 32px",
  fontSize: "1.2rem",
  fontStyle: "italic",
};

styles.testimonialAuthor = {
  display: "block",
  marginTop: "12px",
  fontWeight: 600,
};

styles.faqSection = {
  padding: "140px 32px",
  background: "#fffdf8",
};

styles.faqList = {
  maxWidth: "820px",
  margin: "0 auto",
};

styles.faqItem = {
  marginBottom: "18px",
};

styles.faqQuestion = {
  width: "100%",
  padding: "18px",
  borderRadius: "14px",
  border: "none",
  background: "#fffaf0",
  fontWeight: 600,
  display: "flex",
  justifyContent: "space-between",
};

styles.faqAnswer = {
  padding: "16px 18px",
};

styles.communitySection = {
  padding: "140px 32px",
  textAlign: "center",
};

styles.communityBox = {
  marginTop: "32px",
  height: "120px",
  background: "#efe4d6",
  borderRadius: "18px",
};

styles.finalCta = {
  padding: "160px 32px",
  textAlign: "center",
  background:
    "linear-gradient(135deg, rgba(139,94,52,0.28), rgba(200,162,77,0.32))",
};

styles.finalTitle = {
  fontSize: "2.8rem",
  fontWeight: 900,
};

styles.finalText = {
  marginBottom: "32px",
};

styles.preFooter = {
  padding: "64px 32px",
  textAlign: "center",
};

styles.preFooterText = {
  fontSize: "1.1rem",
  opacity: 0.8,
};
