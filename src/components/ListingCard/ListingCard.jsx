import './ListingCard.css';
import { useNavigate } from 'react-router-dom';

export default function ListingCard({ 
  product, 
  updateProduct, 
  setUpdateProduct, 
  updateProductListings, 
  deleteProduct, 
  setDeleteProduct, 
  deleteProductListings 
}) {
  const navigate = useNavigate();

  function handleChangeState(evt) {
    evt.preventDefault();
    const updatedProduct = {
      ...updateProduct,
      [evt.target.name]: evt.target.value
    };
    setUpdateProduct(updatedProduct);
  }

  function handleUpdateProduct(evt) {
    evt.preventDefault();
    product.condition = updateProduct.condition;
    product.price = updateProduct.price;
    updateProductListings(updateProduct, product._id);
    setUpdateProduct({
      condition: '',
      price: ''
    });
  }

  function handleDeleteProduct() {
    deleteProductListings(deleteProduct, product._id);
    setDeleteProduct(deleteProduct);
    navigate('/buy');
  }

  return (
    <div className="product-listing-card">
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
      <p name="desciption">{`$${product.price}`}</p>
      <h6 className="card-title">Condition:</h6>
      <p name="desciption">{product.condition}</p>
      <form>
        <label>Price: $</label>
        <input
          name="price"
          type="number"
          value={updateProduct.price}
          onChange={handleChangeState}
          placeholder="Price"
          required
        />
        <label>Condition(e.g. Excellent, Good, Fair, Bad):</label>
        <input
          name="condition"
          value={updateProduct.condition}
          onChange={handleChangeState}
          placeholder="Product Condition"
          required
        />
        <br />
        <br />
        <button type="button" onClick={handleUpdateProduct}>Update Product</button>
        <br />
        <br />
        <button type="button" onClick={handleDeleteProduct}>Delete Product</button>
      </form>
    </div>

  );
}