import './OrderDetail.css';
import LineProduct from '../LineProduct/LineProduct';

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineProducts = order.lineProducts.map(product =>
      <LineProduct
        lineProduct={product}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={product._id}
      />
    );
  
    return (
      <div className="OrderDetail">
        <div className="section-heading">
          {order.isPaid ?
            <>
              <span>ORDER <span className="smaller">{order.orderId}</span></span>
              <span className='order-date'>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </>
            :
            <div className='cart-header'>
              <span>SHOPPING CART &nbsp;</span>
              <div className='product-counter'>{order.totalQty}</div>
            </div>
        }
        </div>
        <div className="line-product-container flex-ctr-ctr flex-col scroll-y">
          {lineProducts.length ?
            <>
              {lineProducts}
              <div className="total">
                {order.isPaid ?
                  <div></div>
                  :
                  <div>
                  <div className='total-container'>
                    </div>
                        <div className='checkout-container'>
                            <button
                            className="btn-sm" id='checkout-btn'
                            onClick={handleCheckout}
                            disabled={!lineProducts.length}
                            >CHECKOUT &nbsp;<i className="far fa-credit-card"></i></button>
                        </div>
                  </div>
                }
                <div className='total-container'>
                    <span>{order.totalQty}</span>
                    <span className="right">${order.orderTotal.toFixed(2)}</span>
                    </div>
              </div>
            </>
            :
            <>
            <div className="cart-img"><p id='cart-message'>Nothing in cart</p><i className="far fa-cart-arrow-down"></i></div>
            </>
        }
      </div>
    </div>
  );
}