import { motion } from "framer-motion";

/**
 * PageTransition
 * Wrap each page with this component
 * for smooth enter / exit animations
 */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={styles.wrapper}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

/* ================================
   ANIMATION VARIANTS
================================ */

const variants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(4px)",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/* ================================
   STYLES
================================ */

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100%",
  },
};
