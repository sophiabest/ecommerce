import './OrderListItem.css';

export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
  return (
    <div className={`OrderListItem${isSelected ? ' selected' : ''}`} onClick={() => handleSelectOrder(order)}>
      <div>
        <div>Order Id: <span className="smaller">{order.orderId}</span></div>
        <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
      </div>
    </div>
  );
}
