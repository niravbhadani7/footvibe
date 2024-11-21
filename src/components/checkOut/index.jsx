import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoArrowBack } from 'react-icons/io5';
import { clearCart } from '../../redux/cart/cart';
import './checkOut.scss';
import { jsPDF } from 'jspdf';

function CheckOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  
  // Get checkout data from localStorage
  const checkoutData = JSON.parse(localStorage.getItem('checkoutData')) || null;
  
  // Redirect if no checkout data
  useEffect(() => {
    if (!checkoutData) {
      navigate('/cart');
      return;
    }
  }, [checkoutData, navigate]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Store order details before clearing cart
    setOrderDetails({
      items: checkoutData.items,
      totalItems: checkoutData.totalItems,
      totalAmount: checkoutData.totalAmount
    });
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentComplete(true);
      dispatch(clearCart());
      localStorage.removeItem('checkoutData');
    }, 2000);
  };

  const generateInvoice = () => {
    if (!orderDetails) return;
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Add company header
    doc.setFontSize(20);
    doc.text('SHOE STORE', pageWidth/2, 20, { align: 'center' });
    
    // Add invoice details
    doc.setFontSize(12);
    doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 20, 40);
    doc.text(`Invoice Number: INV-${Date.now().toString().slice(-6)}`, 20, 50);
    
    // Add order items
    doc.text('Order Details:', 20, 70);
    let yPos = 80;
    
    orderDetails.items.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name}`, 30, yPos);
      doc.text(`Quantity: ${item.quantity}`, 30, yPos + 7);
      doc.text(`Price: $${(item.discounted_price || item.price) * item.quantity}`, 30, yPos + 14);
      yPos += 25;
    });
    
    // Add total
    doc.text('------------------------', 20, yPos);
    doc.text(`Total Items: ${orderDetails.totalItems}`, 20, yPos + 10);
    doc.text(`Total Amount: $${orderDetails.totalAmount}`, 20, yPos + 20);
    
    // Save the PDF
    doc.save('invoice.pdf');
  };

  if (!checkoutData) {
    return null;
  }

  const { items, totalItems, totalAmount } = checkoutData;

  return (
    <div className="checkout-page">
      <IoArrowBack className="back-btn" onClick={() => navigate(-1)} />
      <h1>Checkout</h1>

      {!isPaymentComplete ? (
        <form onSubmit={handlePayment} className="checkout-form">
          <div className="form-section">
            <h2>Order Summary</h2>
            <div className="order-items">
              {items.map((item) => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${(item.discounted_price || item.price) * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h2>Shipping Information</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Postal Code" required />
          </div>

          <div className="form-section">
            <h2>Payment Method</h2>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit/Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                PayPal
              </label>
            </div>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <p>Total Items: {totalItems}</p>
              <p>Total Amount: ${totalAmount}</p>
            </div>
          </div>

          <button type="submit" className="payment-btn" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : `Pay $${totalAmount}`}
          </button>
        </form>
      ) : (
        <div className="payment-success">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <button onClick={generateInvoice} className="download-invoice-btn">
            Download Invoice
          </button>
          <button onClick={() => navigate('/')} className="continue-shopping-btn">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
