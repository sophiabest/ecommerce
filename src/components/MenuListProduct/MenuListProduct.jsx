import './MenuListProduct.css';
import { Link } from 'react-router-dom';

export default function MenuListProduct({ menuProduct, handleAddToOrder }) {
  return (
    <div className="MenuListProduct">
        <div className='img-details'>
            <img className='product-img grow' src={menuProduct.img} alt="" />
            <Link className='grow' id='details-button'to={`products/${menuProduct._id}`}>DETAILS</Link>
        </div>
      <div className="name">
        {menuProduct.name}
      </div>
      <div className="buy">
        <span>${menuProduct.price.toFixed(2)}</span>
        <button className="btn-sm grow" id="buy-button" onClick={() => handleAddToOrder(menuProduct._id)}>
          <i className="far fa-cart-plus"></i>
          <span id="add-to-cart">ADD TO CART</span>
        </button>
        <div></div>
      </div>
    </div>
  );
}

