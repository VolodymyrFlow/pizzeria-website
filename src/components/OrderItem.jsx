function OrderItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="order-item">
      <div>
        <span>{item.name}</span>
        <div className="quantity-controls">
          <button onClick={() => onDecrease(item.name)}>-</button>
          <span>{item.quantity}</span>

          <button onClick={() => onIncrease(item.name)}>+</button>
        </div>
      </div>

      <strong>€{(item.price * item.quantity).toFixed(2)}</strong>

      <button className="remove-button" onClick={() => onRemove(item.name)}>
        Remove
      </button>
    </div>
  );
}

export default OrderItem;
