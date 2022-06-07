import './ListingCardContainer.css';
import ListingCard from "../ListingCard/ListingCard";

export default function ListingCardContainer({ 
  products, 
  updateProduct, 
  setUpdateProduct, 
  updateProductListings, 
  deleteProduct, 
  setDeleteProduct, 
  deleteProductListings 
}) {
  return (
    <ul className="listing-container">
      {products.map((product, index) => {
        return <ListingCard
          product={product} 
          key={index}
          updateProduct={updateProduct}
          setUpdateProduct={setUpdateProduct}
          updateProductListings={updateProductListings}
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
          deleteProductListings={deleteProductListings}
        />;
      })}
    </ul>
  );
}
