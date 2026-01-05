import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { useLanguage } from "../../i18n/LanguageContext";

/* =========================================================
   EXPANDED DUMMY DATA
========================================================= */

const TIMELINE_DATA = Array.from({ length: 36 }, (_, i) => ({
  month: `M${i + 1}`,
  farmers: 100 + Math.floor(Math.random() * 900 + i * 25),
  production: 15 + Math.floor(Math.random() * 160 + i * 4),
  revenue: 5000 + Math.floor(Math.random() * 45000 + i * 1200),
}));

const REGION_DATA = [
  { name: "North Region", value: 320, growth: 24, color: "#3c8b65" },
  { name: "South Region", value: 280, growth: 18, color: "#5fa87a" },
  { name: "East Region", value: 195, growth: 31, color: "#78c29a" },
  { name: "West Region", value: 145, growth: 15, color: "#9dd8bd" },
  { name: "Central", value: 110, growth: 22, color: "#b8e6d0" },
];

const CROP_DATA = [
  { crop: "Rice", hectares: 450, yield: 4.2 },
  { crop: "Wheat", hectares: 380, yield: 3.8 },
  { crop: "Corn", hectares: 320, yield: 5.1 },
  { crop: "Soybeans", hectares: 280, yield: 2.9 },
  { crop: "Cotton", hectares: 210, yield: 1.8 },
  { crop: "Vegetables", hectares: 190, yield: 6.3 },
];

const MONTHLY_METRICS = Array.from({ length: 12 }, (_, i) => ({
  month: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][i],
  income: 25000 + Math.random() * 35000,
  expenses: 15000 + Math.random() * 20000,
  profit: 10000 + Math.random() * 15000,
}));

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ImpactGraphsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedChart, setSelectedChart] = useState("timeline");
  const [timeRange, setTimeRange] = useState("all");
  const [activeMetric, setActiveMetric] = useState("farmers");
  const { t } = useLanguage();

  const filteredTimelineData = useMemo(() => {
    if (timeRange === "all") return TIMELINE_DATA;
    const ranges = { "6m": 6, "12m": 12, "24m": 24 };
    return TIMELINE_DATA.slice(-ranges[timeRange]);
  }, [timeRange]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.backgroundGlow} />
      <div style={styles.backgroundPattern} />

      <motion.div
        ref={ref}
        style={styles.container}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        {/* HEADER */}
        <div style={styles.header}>
          <motion.span
            style={styles.eyebrow}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span style={styles.dot}>●</span>
            {t("home.impact.eyebrow")}
          </motion.span>

          <motion.h2
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {t("home.impact.title")}
            <br />
            <span style={styles.titleAccent}>
              {t("home.impact.titleAccent")}
            </span>
          </motion.h2>

          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {t("home.impact.subtitle")}
          </motion.p>
        </div>

        {/* CHART SELECTOR */}
        <motion.div
          style={styles.chartSelector}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {[
            {
              id: "timeline",
              label: t("home.impact.charts.timeline"),
              icon: "📈",
            },
            {
              id: "regions",
              label: t("home.impact.charts.regions"),
              icon: "🗺️",
            },
            { id: "crops", label: t("home.impact.charts.crops"), icon: "🌾" },
            {
              id: "financials",
              label: t("home.impact.charts.financials"),
              icon: "💰",
            },
          ].map((chart) => (
            <button
              key={chart.id}
              style={{
                ...styles.selectorBtn,
                ...(selectedChart === chart.id ? styles.selectorBtnActive : {}),
              }}
              onClick={() => setSelectedChart(chart.id)}
            >
              {/*<span style={styles.selectorIcon}>{chart.icon}</span> */}
              {chart.label}
            </button>
          ))}
        </motion.div>

        {/* STATS CARDS */}
        <div style={styles.statsGrid}>
          <StatCard
            label={t("home.impact.stats.farmers")}
            value="1,247"
            change="+23%"
            trend="up"
          />
          <StatCard
            label={t("home.impact.stats.regions")}
            value="8"
            change="+2"
            trend="up"
          />
          <StatCard
            label={t("home.impact.stats.production")}
            value="18,450t"
            change="+31%"
            trend="up"
          />
          <StatCard
            label={t("home.impact.stats.yield")}
            value="4.2t/ha"
            change="+15%"
            trend="up"
          />
        </div>

        {/* MAIN CHART AREA */}
        <motion.div
          style={styles.mainChartContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {selectedChart === "timeline" && (
            <TimelineChart
              t={t}
              data={filteredTimelineData}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
              activeMetric={activeMetric}
              setActiveMetric={setActiveMetric}
            />
          )}
          {selectedChart === "regions" && (
            <RegionChart t={t} data={REGION_DATA} />
          )}
          {selectedChart === "crops" && <CropChart t={t} data={CROP_DATA} />}
          {selectedChart === "financials" && (
            <FinancialChart t={t} data={MONTHLY_METRICS} />
          )}
        </motion.div>

        {/* ADDITIONAL INSIGHTS */}
        <div style={styles.insightsGrid}>
          <InsightCard
            title={t("home.impact.insights.growth.title")}
            value="127%"
            description={t("home.impact.insights.growth.desc")}
            color="#3c8b65"
          />

          <InsightCard
            title={t("home.impact.insights.sustainability.title")}
            value="94%"
            description={t("home.impact.insights.sustainability.desc")}
            color="#5fa87a"
          />

          <InsightCard
            title={t("home.impact.insights.technology.title")}
            value="78%"
            description={t("home.impact.insights.technology.desc")}
            color="#78c29a"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactGraphsSection;

/* =========================================================
   STAT CARD COMPONENT
========================================================= */

const StatCard = ({ label, value, change, trend, delay }) => {
  return (
    <motion.div
      style={styles.statCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(60,139,101,0.18)" }}
    >
      <div style={styles.statLabel}>{label}</div>
      <div style={styles.statValue}>{value}</div>
      <div
        style={{
          ...styles.statChange,
          color: trend === "up" ? "#3c8b65" : "#c45",
        }}
      >
        {trend === "up" ? "↗" : "↘"} {change}
      </div>
    </motion.div>
  );
};

/* =========================================================
   TIMELINE CHART
========================================================= */

const TimelineChart = ({
  t,
  data,
  timeRange,
  setTimeRange,
  activeMetric,
  setActiveMetric,
}) => {
  const metrics = [
    {
      id: "farmers",
      label: t("home.impact.metrics.farmers"),
      color: "#3c8b65",
    },
    {
      id: "production",
      label: t("home.impact.metrics.production"),
      color: "#78c29a",
    },
    {
      id: "revenue",
      label: t("home.impact.metrics.revenue"),
      color: "#9dd8bd",
    },
  ];

  return (
    <div style={styles.chartWrapper}>
      <div style={styles.chartHeader}>
        <div>
          <h3 style={styles.chartTitle}>{t("home.impact.timeline.title")}</h3>
          <p style={styles.chartSubtitle}>
            {t("home.impact.timeline.subtitle")}
          </p>
        </div>
        <div style={styles.chartControls}>
          <div style={styles.metricSelector}>
            {metrics.map((m) => (
              <button
                key={m.id}
                style={{
                  ...styles.metricBtn,
                  ...(activeMetric === m.id
                    ? { ...styles.metricBtnActive, background: m.color }
                    : {}),
                }}
                onClick={() => setActiveMetric(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
          <div style={styles.timeRangeSelector}>
            {["6m", "12m", "24m", "all"].map((range) => (
              <button
                key={range}
                style={{
                  ...styles.rangeBtn,
                  ...(timeRange === range ? styles.rangeBtnActive : {}),
                }}
                onClick={() => setTimeRange(range)}
              >
                {range === "all" ? "All" : range.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3c8b65" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3c8b65" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(60,139,101,0.1)" />
          <XAxis
            dataKey="month"
            stroke="#5f8f75"
            style={{ fontSize: "0.75rem" }}
          />
          <YAxis stroke="#5f8f75" style={{ fontSize: "0.75rem" }} />
          <Tooltip
            contentStyle={{
              background: "#0d2817",
              border: "none",
              borderRadius: 12,
              color: "#fff",
              fontSize: "0.85rem",
            }}
          />
          <Area
            type="monotone"
            dataKey={activeMetric}
            stroke="#3c8b65"
            strokeWidth={3}
            fill="url(#colorGradient)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

/* =========================================================
   REGION CHART
========================================================= */

const RegionChart = ({ t, data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={styles.chartWrapper}>
      <div style={styles.chartHeader}>
        <div>
          <h3 style={styles.chartTitle}>{t("home.impact.regions.title")}</h3>
          <p style={styles.chartSubtitle}>
            {t("home.impact.regions.subtitle")}
          </p>
        </div>
      </div>
      <div style={styles.regionChartGrid}>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              paddingAngle={3}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              animationDuration={1200}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  opacity={
                    activeIndex === null || activeIndex === index ? 1 : 0.4
                  }
                  style={{ cursor: "pointer" }}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#0d2817",
                border: "none",
                borderRadius: 12,
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div style={styles.regionLegend}>
          {data.map((region, i) => (
            <motion.div
              key={i}
              style={styles.regionLegendItem}
              whileHover={{ x: 4 }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div style={{ ...styles.regionDot, background: region.color }} />
              <div style={styles.regionInfo}>
                <div style={styles.regionName}>{region.name}</div>
                <div style={styles.regionValue}>
                  {region.value} farmers •{" "}
                  <span style={styles.regionGrowth}>+{region.growth}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   CROP CHART
========================================================= */

const CropChart = ({ t, data }) => {
  return (
    <div style={styles.chartWrapper}>
      <div style={styles.chartHeader}>
        <div>
          <h3 style={styles.chartTitle}>{t("home.impact.crops.title")}</h3>
          <p style={styles.chartSubtitle}>{t("home.impact.crops.subtitle")}</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(60,139,101,0.1)" />
          <XAxis
            dataKey="crop"
            stroke="#5f8f75"
            style={{ fontSize: "0.75rem" }}
          />
          <YAxis
            yAxisId="left"
            stroke="#3c8b65"
            style={{ fontSize: "0.75rem" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#78c29a"
            style={{ fontSize: "0.75rem" }}
          />
          <Tooltip
            contentStyle={{
              background: "#0d2817",
              border: "none",
              borderRadius: 12,
              color: "#fff",
            }}
          />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="hectares"
            fill="#3c8b65"
            radius={[8, 8, 0, 0]}
            animationDuration={1200}
          />
          <Bar
            yAxisId="right"
            dataKey="yield"
            fill="#78c29a"
            radius={[8, 8, 0, 0]}
            animationDuration={1200}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

/* =========================================================
   FINANCIAL CHART
========================================================= */

const FinancialChart = ({ t, data }) => {
  return (
    <div style={styles.chartWrapper}>
      <div style={styles.chartHeader}>
        <div>
          <h3 style={styles.chartTitle}>{t("home.impact.financials.title")}</h3>
          <p style={styles.chartSubtitle}>
            {t("home.impact.financials.subtitle")}
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(60,139,101,0.1)" />
          <XAxis
            dataKey="month"
            stroke="#5f8f75"
            style={{ fontSize: "0.75rem" }}
          />
          <YAxis stroke="#5f8f75" style={{ fontSize: "0.75rem" }} />
          <Tooltip
            contentStyle={{
              background: "#0d2817",
              border: "none",
              borderRadius: 12,
              color: "#fff",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#3c8b65"
            strokeWidth={3}
            dot={{ r: 4 }}
            animationDuration={1500}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#c45454"
            strokeWidth={3}
            dot={{ r: 4 }}
            animationDuration={1500}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#78c29a"
            strokeWidth={3}
            dot={{ r: 4 }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

/* =========================================================
   INSIGHT CARD
========================================================= */

const InsightCard = ({ title, value, description, color, delay }) => {
  return (
    <motion.div
      style={{ ...styles.insightCard, borderLeft: `4px solid ${color}` }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ x: 4 }}
    >
      <div style={styles.insightTitle}>{title}</div>
      <div style={{ ...styles.insightValue, color }}>{value}</div>
      <div style={styles.insightDesc}>{description}</div>
    </motion.div>
  );
};

/* =========================================================
   RESPONSIVE STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "clamp(80px, 12vw, 160px) 0",
    background: "#ffffff",
    overflow: "hidden",
  },
  backgroundGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 15% 25%, rgba(120,194,154,0.18), transparent 55%), radial-gradient(circle at 85% 75%, rgba(60,139,101,0.14), transparent 55%)",
    pointerEvents: "none",
  },
  backgroundPattern: {
    position: "absolute",
    inset: 0,
    background:
      "repeating-linear-gradient(135deg, rgba(120,194,154,0.05) 0 2px, transparent 2px 14px)",
    opacity: 0.35,
    pointerEvents: "none",
  },
  container: {
    maxWidth: "min(1400px, 95%)",
    margin: "0 auto",
    padding: "0 clamp(16px, 4vw, 32px)",
    position: "relative",
    zIndex: 2,
  },
  header: {
    maxWidth: 720,
    marginBottom: "clamp(48px, 8vw, 88px)",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#3c8b65",
    fontWeight: 600,
    marginBottom: 20,
    padding: "8px 20px",
    background: "rgba(60,139,101,0.08)",
    borderRadius: 50,
    border: "1px solid rgba(60,139,101,0.15)",
  },
  dot: { fontSize: "0.5rem", color: "#78c29a" },
  title: {
    fontSize: "clamp(2rem, 5vw, 3.8rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
    marginBottom: 20,
  },
  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
    lineHeight: 1.7,
    color: "#3f5f4f",
  },
  chartSelector: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 40,
  },
  selectorBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "clamp(10px, 2vw, 14px) clamp(16px, 3vw, 24px)",
    background: "rgba(255,255,255,0.5)",
    border: "1px solid rgba(60,139,101,0.2)",
    borderRadius: 16,
    fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
    fontWeight: 600,
    color: "#3c8b65",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  selectorBtnActive: {
    background: "#3c8b65",
    color: "#fff",
    boxShadow: "0 8px 24px rgba(60,139,101,0.3)",
  },
  selectorIcon: {
    fontSize: "1.2em",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
    gap: "clamp(16px, 3vw, 24px)",
    marginBottom: 40,
  },
  statCard: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: 20,
    padding: "clamp(20px, 4vw, 28px)",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 8px 32px rgba(60,139,101,0.12)",
    transition: "all 0.3s ease",
  },
  statLabel: {
    fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
    color: "#5f8f75",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 8,
    fontWeight: 600,
  },
  statValue: {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: 900,
    color: "#0d2817",
    marginBottom: 8,
  },
  statChange: {
    fontSize: "clamp(0.8rem, 1.6vw, 0.9rem)",
    fontWeight: 600,
  },
  mainChartContainer: {
    marginBottom: 40,
  },
  chartWrapper: {
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: 24,
    padding: "clamp(24px, 4vw, 40px)",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 12px 48px rgba(60,139,101,0.15)",
  },
  chartHeader: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
    marginBottom: 32,
  },
  chartTitle: {
    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 4,
  },
  chartSubtitle: {
    fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)",
    color: "#5f8f75",
  },
  chartControls: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
  },
  metricSelector: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  metricBtn: {
    padding: "8px 16px",
    background: "rgba(60,139,101,0.1)",
    border: "1px solid rgba(60,139,101,0.2)",
    borderRadius: 12,
    fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
    fontWeight: 600,
    color: "#3c8b65",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  metricBtnActive: {
    color: "#fff",
    border: "none",
  },
  timeRangeSelector: {
    display: "flex",
    gap: 4,
    background: "rgba(60,139,101,0.08)",
    padding: 4,
    borderRadius: 12,
  },
  rangeBtn: {
    padding: "6px 12px",
    background: "transparent",
    border: "none",
    borderRadius: 8,
    fontSize: "clamp(0.75rem, 1.5vw, 0.8rem)",
    fontWeight: 600,
    color: "#5f8f75",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  rangeBtnActive: {
    background: "#fff",
    color: "#3c8b65",
    boxShadow: "0 2px 8px rgba(60,139,101,0.2)",
  },
  regionChartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
    gap: 40,
    alignItems: "center",
  },
  regionLegend: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  regionLegendItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 12,
    background: "rgba(60,139,101,0.04)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  regionDot: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    flexShrink: 0,
  },
  regionInfo: {
    flex: 1,
  },
  regionName: {
    fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
    fontWeight: 700,
    color: "#0d2817",
    marginBottom: 4,
  },
  regionValue: {
    fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
    color: "#5f8f75",
  },
  regionGrowth: {
    color: "#3c8b65",
    fontWeight: 600,
  },
  insightsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
    gap: "clamp(16px, 3vw, 24px)",
  },
  insightCard: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: 16,
    padding: "clamp(20px, 4vw, 28px)",
    border: "1px solid rgba(60,139,101,0.15)",
    boxShadow: "0 8px 32px rgba(60,139,101,0.12)",
    transition: "all 0.3s ease",
  },
  insightTitle: {
    fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
    color: "#5f8f75",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 12,
    fontWeight: 600,
  },
  insightValue: {
    fontSize: "clamp(2rem, 4.5vw, 3rem)",
    fontWeight: 900,
    marginBottom: 8,
  },
  insightDesc: {
    fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)",
    color: "#3f5f4f",
    lineHeight: 1.5,
  },
};
