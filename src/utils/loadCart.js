function normalizePrice(price) {
  if (typeof price === "string") {
    return Number(price.replace("€", ""));
  }

  return price;
}

export default function loadCart() {
  const savedCart = localStorage.getItem("cart");

  if (!savedCart) {
    return [];
  }

  try {
    return JSON.parse(savedCart).map((item) => ({
      ...item,
      price: normalizePrice(item.price),
    }));
  } catch {
    return [];
  }
}
