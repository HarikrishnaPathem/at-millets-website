import Header from "../common/Header";
import Footer from "../common/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
