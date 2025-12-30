import { motion } from "framer-motion";

/**
 * Button Component
 *
 * Props:
 * - children
 * - variant: "primary" | "secondary" | "ghost"
 * - size: "sm" | "md" | "lg"
 * - onClick
 * - as: "button" | "link"
 * - href (when as="link")
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  as = "button",
  href,
  style = {},
  ...props
}) => {
  const Component = as === "link" ? motion.a : motion.button;

  return (
    <Component
      whileHover={{
        scale: 1.04,
        boxShadow: hoverShadows[variant],
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      onClick={onClick}
      href={href}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      <span style={shineStyle} />
      <span style={contentStyle}>{children}</span>
    </Component>
  );
};

export default Button;

/* ================================
   BASE STYLES
================================ */

const baseStyles = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  border: "none",
  cursor: "pointer",
  borderRadius: "14px",
  fontWeight: 700,
  letterSpacing: "0.3px",
  overflow: "hidden",
  outline: "none",
  WebkitTapHighlightColor: "transparent",
};

/* ================================
   VARIANTS (MILLET THEME)
================================ */

const variantStyles = {
  primary: {
    background: "linear-gradient(135deg, #8b5e34, #6b4f2c)",
    color: "#fffdf8",
    boxShadow:
      "0 12px 32px rgba(139,94,52,0.35), 0 4px 12px rgba(107,79,44,0.2)",
    border: "1px solid rgba(255,255,255,0.15)",
  },

  secondary: {
    background: "rgba(200,162,77,0.12)",
    color: "#6b4f2c",
    border: "1.5px solid rgba(200,162,77,0.35)",
    boxShadow: "0 6px 18px rgba(107,79,44,0.12)",
  },

  ghost: {
    background: "transparent",
    color: "#6b4f2c",
    border: "1px solid rgba(139,94,52,0.25)",
  },
};

/* ================================
   HOVER SHADOWS
================================ */

const hoverShadows = {
  primary: "0 18px 44px rgba(139,94,52,0.45)",
  secondary: "0 12px 28px rgba(200,162,77,0.25)",
  ghost: "0 8px 18px rgba(139,94,52,0.18)",
};

/* ================================
   SIZES
================================ */

const sizeStyles = {
  sm: {
    padding: "8px 16px",
    fontSize: "0.8rem",
  },
  md: {
    padding: "12px 22px",
    fontSize: "0.9rem",
  },
  lg: {
    padding: "16px 30px",
    fontSize: "1rem",
  },
};

/* ================================
   SHINE EFFECT
================================ */

const shineStyle = {
  position: "absolute",
  top: 0,
  left: "-120%",
  width: "120%",
  height: "100%",
  background:
    "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
  animation: "button-shine 3.5s infinite",
};

const contentStyle = {
  position: "relative",
  zIndex: 1,
};

/* ================================
   KEYFRAMES (INLINE)
================================ */

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes button-shine {
    0% { left: -120%; }
    50% { left: 120%; }
    100% { left: 120%; }
  }
`;
document.head.appendChild(styleSheet);
