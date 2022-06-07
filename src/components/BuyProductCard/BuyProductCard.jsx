import './BuyProductCard.css';
export default function BuyProductCard({ product, handleAddToOrder }) {
  return (
    <div className="buy-product-card">
      <img
        name="imageLinks"
        alt={`${product.title} product`}
        src={`${product.imageLinks.thumbnail}`}
      />
      <h6 className="card-title">Title:</h6>
      <p name="title">{product.title}</p>
      <h6 className="card-title">Seller(s):</h6>
      <p name="sellers">{product.sellers}</p>
      <h6 className="card-title">Average Rating:</h6>
      <p name="averageRating">{product.averageRating}</p>
      <h6 className="card-title">Category:</h6>
      <p name="categories">{product.categories}</p>
      <h6 className="card-title">Price:</h6>
      <p name="pricen">{`$${product.price.toFixed(2)}`}</p>
      <h6 className="card-title">Condition:</h6>
      <p name="condition">{product.condition}</p>
      <h6 className="card-title">Description:</h6>
      <p name="desciption">{product.description}</p>
      <form>
        <button type="button" onClick={() => handleAddToOrder(product._id)}>Add To Cart</button>
      </form>
    </div>
  );
}