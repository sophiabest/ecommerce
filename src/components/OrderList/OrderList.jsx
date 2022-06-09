import './OrderList.css';
import OrderListProduct from '../OrderListProduct/OrderListProduct';

export default function OrderList({ orderProducts, handleShowOrder }) {
  const products = orderProducts.map(order =>
    <OrderListProduct
      key={order._id}
      orderProduct={order}
      handleShowOrder={handleShowOrder}
    />
  );
  return (
    <main className="OrderList">
      {products}
    </main>
  );
}