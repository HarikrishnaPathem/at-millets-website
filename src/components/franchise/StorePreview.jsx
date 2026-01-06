import { useLanguage } from "../../i18n/LanguageContext";
import shopImage from "../../assets/images/shop_no_bg.png";

const StorePreview = () => {
  const { t } = useLanguage();

  return (
    <section style={styles.wrapper}>
      <div style={styles.text}>
        <h2>{t("business.store.title")}</h2>
        <p>{t("business.store.description")}</p>
      </div>

      <img src={shopImage} alt="AT Millets Store" style={styles.image} />
    </section>
  );
};

export default StorePreview;

const styles = {
  wrapper: {
    padding: "100px 20px",
    display: "grid",
    gap: 40,
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    alignItems: "center",
    maxWidth: 1200,
    margin: "auto",
  },
  text: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
  },
  image: {
    width: "100%",
    maxWidth: 500,
    margin: "auto",
  },
};
