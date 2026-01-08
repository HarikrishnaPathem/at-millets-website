import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LEAF_COUNT = 10;

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: LEAF_COUNT }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 25 + Math.random() * 20,
      duration: 15 + Math.random() * 12,
      delay: Math.random() * 12,
      rotation: Math.random() * 360,
      hue: 110 + Math.random() * 20, // Vary green tones
    }));

    setLeaves(generated);
  }, []);

  return (
    <div style={styles.wrapper}>
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          style={{
            ...styles.leafContainer,
            left: `${leaf.left}%`,
            width: leaf.size,
            height: leaf.size * 1.4,
          }}
          initial={{ y: -60, rotate: leaf.rotation, opacity: 0 }}
          animate={{
            y: "110vh",
            rotate: leaf.rotation + 360,
            opacity: [0, 0.7, 0.7, 0],
            x: [0, 40, -40, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 100 140"
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.2))",
            }}
          >
            {/* Leaf body */}
            <path
              d="M 50 10 Q 75 30, 80 60 Q 82 90, 50 135 Q 18 90, 20 60 Q 25 30, 50 10"
              fill={`hsla(${leaf.hue}, 70%, 28%, 0.75)`}
              stroke={`hsla(${leaf.hue - 5}, 75%, 20%, 0.9)`}
              strokeWidth="1"
            />

            {/* Central vein */}
            <line
              x1="50"
              y1="15"
              x2="50"
              y2="130"
              stroke={`hsla(${leaf.hue - 10}, 65%, 18%, 0.7)`}
              strokeWidth="1.5"
            />

            {/* Side veins - left */}
            <path
              d="M 50 30 Q 35 40, 28 50"
              stroke={`hsla(${leaf.hue - 10}, 60%, 20%, 0.45)`}
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M 50 50 Q 32 60, 25 70"
              stroke={`hsla(${leaf.hue - 10}, 60%, 20%, 0.45)`}
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M 50 70 Q 30 82, 25 95"
              stroke={`hsla(${leaf.hue - 10}, 60%, 20%, 0.45)`}
              strokeWidth="0.8"
              fill="none"
            />

            {/* Side veins - right */}
            <path
              d="M 50 30 Q 65 40, 72 50"
              stroke={`hsla(${leaf.hue - 10}, 60%, 20%, 0.45)`}
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M 50 50 Q 68 60, 75 70"
              stroke={`hsla(${leaf.hue - 10}, 60%, 20%, 0.45)`}
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M 50 70 Q 70 82, 75 95"
              stroke={`hsla(${leaf.hue - 10}, 60%, 20%, 0.45)`}
              strokeWidth="0.8"
              fill="none"
            />

            {/* Subtle texture overlay */}
            <ellipse
              cx="45"
              cy="60"
              rx="15"
              ry="25"
              fill={`hsla(${leaf.hue + 5}, 65%, 35%, 0.12)`}
            />
            <ellipse
              cx="58"
              cy="70"
              rx="12"
              ry="20"
              fill={`hsla(${leaf.hue - 5}, 60%, 25%, 0.1)`}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FallingLeaves;

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 5,
    overflow: "hidden",
  },

  leafContainer: {
    position: "absolute",
    top: -60,
  },
};
