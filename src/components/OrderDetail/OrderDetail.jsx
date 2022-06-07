import './OrderDetail.css';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(product =>
    <LineItem
      lineItem={product}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={product._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              <h5>Products In Cart: {order.totalQty}</h5>
              <br />
              <h5 className="right">${order.orderTotal.toFixed(2)}</h5>
              <br />
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
            </section>
          </>
          :
          <div className="empty-cart">Your Cart Is Empty</div>
        }
      </div>
    </div>
  );
}