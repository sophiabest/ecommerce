import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      <div className="flex-ctr-ctr">{lineItem.product.title}</div>
      <span>{lineItem.product.price.toFixed(2)}</span>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}
          >−</button>
        }&nbsp;
        <span>{lineItem.qty}</span>
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}