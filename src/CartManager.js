// CartManager.js
class CartManager {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.listeners = [];
  }

  getCart() {
    return this.cart;
  }

  getCount() {
    return this.cart.length;
  }

  addToCart(product) {
    if (this.cart.length >= 10) {
      alert("You can only add up to 10 products.");
      return;
    }

    const exists = this.cart.find((item) => item.id === product.id);
    if (exists) {
      alert("This product is already in the cart.");
      return;
    }

    this.cart.push(product);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.notify(); // 🔔 notify all listeners
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  unsubscribe(callback) {
    this.listeners = this.listeners.filter((fn) => fn !== callback);
  }

  notify() {
    this.listeners.forEach((callback) => callback(this.cart));
  }
}

// singleton instance
const cartManager = new CartManager();
export default cartManager;
