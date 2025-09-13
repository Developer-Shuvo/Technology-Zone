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

  setCart(newCart) {
    this.cart = newCart;
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.notify();
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

    this.setCart([...this.cart, product]);
  }

  removeFromCart(id) {
    this.setCart(this.cart.filter((item) => item.id !== id));
  }

  clearCart() {
    this.setCart([]);
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

const cartManager = new CartManager();
export default cartManager;
