import BuyProductCard from "../BuyProductCard/BuyProductCard";


export default function ProductCardContainer({ products, handleAddToOrder }) {

  return (
    <>
      <h1 className="search-products">Search Products</h1>
      <ul className="product-container">
        {products.map((product, index) => {
          return <BuyProductCard
            handleAddToOrder={handleAddToOrder}
            product={product}
            key={index}
          />;
        })}
      </ul>
    </>
  );
}