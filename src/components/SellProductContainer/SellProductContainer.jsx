import './SellProductContainer.css';
import SellProductCard from "../SellProductCard/SellProductCard";


export default function SellProductContainer({ user, products, addProduct }) {
  return (
    <ul className="product-container">
      {products.items.map((product, index) => {
        return <SellProductCard user={user} product={product} key={index} addProduct={addProduct} />;
      })}
    </ul>
  );
}