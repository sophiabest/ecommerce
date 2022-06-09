import './OrderListProduct.css';

export default function OrderListProduct({ orderProduct, handleShowOrder }) {
  const orderDate = new Date(orderProduct.createdAt).toLocaleDateString();

  return (
    <div className="OrderListProduct" onClick={() => handleShowOrder(orderProduct)}>
      <div className="left">
        <div className="orderId">ORDER &nbsp; - &nbsp;<span className="orderIdText">{orderProduct.orderId}</span></div>
        <div className="orderDate bottom">{orderDate}</div>
      </div>
      <div className="right">
        <div className="orderTotal">${orderProduct.orderTotal.toFixed(2)}</div>
        <div className="totalQty bottom">{orderProduct.totalQty} product{orderProduct.totalQty > 1 && 's'}</div>
      </div>
    </div>
  );
}
