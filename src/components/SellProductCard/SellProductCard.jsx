import './SellProductCard.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ProductCard({ user, product, addProduct }) {
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    condition: '',
    price: ''
  });


  function handleChangeState(evt) {
    const updatedNewProduct = {
      ...newProduct,
      [evt.target.name]: evt.target.value
    };
    setNewProduct(updatedNewProduct);
  }

  function handleAddProduct(id) {
    const productWithUserInfo = { ...product };
    productWithUserInfo.volumeInfo.condition = newProduct.condition;
    productWithUserInfo.volumeInfo.price = newProduct.price;
    productWithUserInfo.volumeInfo.user = id;
    addProduct(productWithUserInfo)
    navigate('/buy');
  }

  return (
    <div className="sell-product-card">
      <img
        name="imageLinks"
        alt={`${product.volumeInfo.title} product`}
        src={`${product.volumeInfo?.imageLinks.thumbnail}`}
      />
      <h6 className="card-title">Title:</h6>
      <p name="title">{product.volumeInfo.title}</p>
      <h6 className="card-title">Author(s):</h6>
      <p name="authors">{product.volumeInfo.authors}</p>
      <h6 className="card-title">Published Date:</h6>
      <p name="published">{product.volumeInfo.publishedDate}</p>
      <h6 className="card-title">Average Rating:</h6>
      <p name="averageRating">{product.volumeInfo.averageRating}</p>
      <h6 className="card-title">Category:</h6>
      <p name="categories">{product.volumeInfo.categories}</p>
      <h6 className="card-title">Decription:</h6>
      <p name="desciption">{product.volumeInfo.description}</p>
      <form>
        <label>Price: $</label>
        <input
          name="price"
          type="number"
          value={newProduct.price}
          onChange={handleChangeState}
          placeholder="Price"
          required
        />
        <label>Condition:</label>
        <input
          name="condition"
          value={newProduct.condition}
          onChange={handleChangeState}
          placeholder="e.g. Excellent, Good, Fair, Bad"
        />
        <br />
        <br />
        <button type="button" onClick={() => handleAddProduct(user._id)}>List This Product</button>
      </form>
    </div>
  );
}