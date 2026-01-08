import React, { useEffect, useRef, useState } from "react";
import HeroSection from "../../components/home/HeroSection";
import OriginSection from "../../components/home/OriginSection";
import ValuesSection from "../../components/home/ValuesSection";
import ImpactGraphsSection from "../../components/home/ImpactGraphsSection";
import SlideshowNarrativeSection from "../../components/home/SlideShowNarrativeSection";
import TrustSection from "../../components/home/TrustSection";

// Animated wrapper component for smooth scroll
const AnimatedSection = ({ children, delay = 0, animation = "fade-up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClasses = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12",
    "fade-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-12",
    "fade-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-12",
    scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    fade: isVisible ? "opacity-100" : "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${animationClasses[animation]}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <AnimatedSection animation="scale">
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-left" delay={100}>
        <OriginSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={150}>
        <ValuesSection />
      </AnimatedSection>

      <AnimatedSection animation="scale" delay={100}>
        <ImpactGraphsSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-right" delay={150}>
        <SlideshowNarrativeSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <TrustSection />
      </AnimatedSection>

      {/* Optional: Add a scroll progress indicator */}
      <ScrollProgress />
    </div>
  );
};

// Bonus: Scroll progress indicator
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default Home;
