import './LineProduct.css';

function LineProduct({ lineProduct, isPaid, handleChangeQty }) {
  return (
    <div className="LineProduct">
      <div className="flex-ctr-ctr flex-col" id='name-price'>
        <span className="" id='product-name'>{lineProduct.product.name}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs grow" id='qty-minus'
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty - 1)}
            >−</button>
          }
        <span>{lineProduct.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs grow" id='qty-plus'
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineProduct.extPrice.toFixed(2)}</div>
    </div>
  );
}

export default LineProduct;