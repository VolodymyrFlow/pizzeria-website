export default function calculateItemCount(items) {
  return items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
}
