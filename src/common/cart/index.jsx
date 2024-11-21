import React from "react";
import "./cart.scss";
import { IoMdArrowBack, IoMdAdd, IoMdRemove } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../redux/cart/cart";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, change) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      dispatch(updateCartItemQuantity({ id, quantity: item.quantity + change }));
    }
  };

  const backButton = () => {
    window.history.back();
  };

  const handleProceedToCheckout = () => {
    const checkoutData = {
      items: cartItems,
      totalItems: totalItems,
      totalAmount: totalPrice
    };
    
    // Store checkout data in localStorage
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="back-btn">
          <IoMdArrowBack onClick={backButton} aria-label="Go back" />
        </div>
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.discounted_price || item.price) * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <div className="back-btn">
        <IoMdArrowBack onClick={backButton} aria-label="Go back" />
      </div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="product-page-cart">
          <MdClose
            className="remove-btn-top"
            onClick={() => handleRemove(item.id)}
            aria-label={`Remove ${item.name} from cart`}
          />
          <div className="gallery">
            <div className="main-image">
              <img src={item.image} alt={item.name} />
            </div>
          </div>
          <div className="product-info">
            <div className="product-name-cart">
              <h2>{item.name}</h2>
            </div>
            <p className="price">
              $ {((item.discounted_price || item.price) * item.quantity).toFixed(2)}
            </p>
            <div className="shoes-size">
              {item.size && item.size.map((size, index) => <p key={index}>{size}</p>)}
            </div>
            <div className="quantity-control">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                aria-label="Decrease quantity"
              >
                <IoMdRemove />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                aria-label="Increase quantity"
              >
                <IoMdAdd />
              </button>
            </div>
            <div className="add-to-cart-data">
              <Link to="/checkout">
                <button>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: $ {totalPrice}</p>
        <button 
          className="checkout-btn"
          onClick={handleProceedToCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

