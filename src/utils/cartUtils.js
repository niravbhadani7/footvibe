import toast from "react-hot-toast";
import categoryApi from "../categoryApi/categoryApi";

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cartData")) || [];
};

export const saveCartItems = (cartItems) => {
  localStorage.setItem("cartData", JSON.stringify(cartItems));
};

export const addToCart = (productId) => {
  const cartItems = getCartItems();
  const existingItem = cartItems.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
    toast.success("Item quantity increased in cart");
  } else {
    const allProducts = categoryApi.flatMap(category => category.product);
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      cartItems.push({ ...product, quantity: 1 });
      toast.success("Item added to cart");
    } else {
      toast.error("Product not found");
      return;
    }
  }

  saveCartItems(cartItems);
};

export const removeFromCart = (productId) => {
  const cartItems = getCartItems();
  const updatedCart = cartItems.filter(item => item.id !== productId);
  saveCartItems(updatedCart);
  toast.success("Item removed from cart");
  return updatedCart;
};

export const updateCartItemQuantity = (productId, newQuantity) => {
  const cartItems = getCartItems();
  const updatedCart = cartItems.map(item => 
    item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
  );
  saveCartItems(updatedCart);
  return updatedCart;
};

export const calculateTotalItems = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.quantity, 0);
};

export const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + (item.discounted_price || item.price) * item.quantity, 0).toFixed(2);
};