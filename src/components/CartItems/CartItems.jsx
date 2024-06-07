import React from "react";
import "./CartItem.css";
import remove_icon from "../../Assets/cart_cross_icon.png";
import image from "../../Assets/product_1.png";
import { Link } from "react-router-dom";

const CartItems = () => {
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="hr"/>
      <div className="cartitems-format cartitems-format-main">
        <img src={image} alt="" className="carticon-product-icon" />
        <p>{'.........'}</p>
        <p>${0}</p>
        <button className="cartitems-quantity">{0}</button>
        <p>${0}</p>
        <img src={remove_icon} alt="" className="cartitems-remove-icon" />
      </div>
      <hr className="hr"/>
      <div />
      <div className="cartitems-down-parent">
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
          </div>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${0}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${0}</h3>
          </div>
          <Link to="/Checkout">{" "}
            <button>PROCEED TO CHECKOUT</button>{" "}
          </Link>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
