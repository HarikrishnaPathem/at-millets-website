import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Page Transition Wrapper
import PageTransition from "../components/common/PageTransition";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Sourcing from "../pages/Sourcing/Sourcing";
import SupplyChain from "../pages/SupplyChain/SupplyChain";
import Packaging from "../pages/Packaging/Packaging";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import Franchise from "../pages/Franchise/Franchise";
import Quality from "../pages/Quality/Quality";
import Recipes from "../pages/Recipes/Recipes";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/sourcing"
          element={
            <PageTransition>
              <Sourcing />
            </PageTransition>
          }
        />

        <Route
          path="/supply-chain"
          element={
            <PageTransition>
              <SupplyChain />
            </PageTransition>
          }
        />

        <Route
          path="/packaging-distribution"
          element={
            <PageTransition>
              <Packaging />
            </PageTransition>
          }
        />

        <Route
          path="/products"
          element={
            <PageTransition>
              <Products />
            </PageTransition>
          }
        />

        <Route
          path="/products/:slug"
          element={
            <PageTransition>
              <ProductDetails />
            </PageTransition>
          }
        />

        <Route
          path="/franchise"
          element={
            <PageTransition>
              <Franchise />
            </PageTransition>
          }
        />

        <Route
          path="/quality"
          element={
            <PageTransition>
              <Quality />
            </PageTransition>
          }
        />

        <Route
          path="/recipes"
          element={
            <PageTransition>
              <Recipes />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
