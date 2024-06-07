import React from 'react'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>

    <div className="billing-detail">
        <h2>Billing Details</h2>
        <div className="name-div">
        <input className='first-name name' type="text" placeholder='First Name'/>
        <input className='second-name name' type="text" placeholder='Last Name'/><br />
        </div>
        <label htmlFor="">Company Name (optional) </label><br />
        <input type="text" placeholder='Company Name'/><br />
        <label htmlFor="">Country / Region</label><br />
        <input type="text" placeholder='Country Name / Region'/><br />
        <label htmlFor="">Town / City</label><br />
        <input type="text" placeholder='Town / City'/><br />
        <label htmlFor="">State</label><br />
        <input type="text" placeholder='State'/><br />
        <label htmlFor="">Pincode</label><br />
        <input type="text" placeholder='Enter Pincode'/><br />
        <label htmlFor="">Phone</label><br />
        <input type="text" placeholder='Phone No.'/><br />
        <label htmlFor="">Email Address</label><br />
        <input type="text" placeholder='Email Address'/><br />
        <div className="additoonal-div">
        <h3>Additional Information</h3><br />
        <p>Order Notes (optional) </p><br />
        <textarea name="" id="" cols="" rows="5" placeholder='Notes about your, eg. special notes for delivery'></textarea>
   
        </div>
         </div>





    <div className="checkout-order-details-main">
    <div className="order-detail">
    <h2>Your Order</h2>

    <div className="pro-sub-head">
        <div>Product</div>
        <div>Subtotal</div>
    </div>

    <div className="pro">
        <div>Shirt</div>
        <div className='price'>${19.00}</div>
    </div>

    <div className="sub">
        <div>Subtotal</div>
        <div className='price'>${19.00}</div>
    </div>

    <div className="total">
        <div>Total</div>
        <div className='price'>${19.00}</div>
    </div>

    </div>
    
    <div className="checkout-coupon">
        Have a coupon? <span>Click here to enter your coupon code</span>
    </div>

    <div className="checkout-payment">
    <p>Paypal</p>
    <div className="chechout-paypal-innertext">
    Pay via PayPal, You can pay with your credit card if you do not have a PayPal account.
    </div>
    <p className='checkout-para'>Your personaldata will be used to process your order. Support your experience throughout this website. and for other purposes descriped in our <br /> <span>Privacy Policy</span></p>

    <div className="paypal-by">
        <p><span className='credit-pay'><i>Pay</i></span><span className='credit-pal'>Pal</span> <span className='credit'>CREDIT</span> <span className="credit-para">No Interest paid in full in 6 months.</span> <span className='learn-more'>Learn more....</span></p>
    </div>

    </div>


    <button className='checkout-paypal-btn'><span className='pay'><i>Pay</i></span><span className='pal'>Pal</span></button>
    <button className='checkout-pay-letter-btn'>Pay Letter</button>
    <button className='checkout-debit-credit-btn'>Debit or Credit Card</button>

    <p className='checkout-powered-by'>Powered by <span className='pay'><i>Pay</i></span><span className='pal'>Pal</span></p>

    </div>



      
    </div>
  )
}

export default Checkout
