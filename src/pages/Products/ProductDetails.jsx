import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();

  return (
    <section>
      <h2>Product Details</h2>
      <p>Product slug: {slug}</p>
    </section>
  );
};

export default ProductDetails;
