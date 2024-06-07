import React, { useState } from 'react'
import './Head.css'
import './head'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react'

const Navbar = () => {

useEffect(()=> {
  $(document).ready(function(){
    $(document).on("click", ".fa-bars",function(){
      $('.nav-menu, .nav-login-cart').toggle();
    });
  });
  
});

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <i class="fa-solid fa-bars" id='menu-icon'></i>
        <ul className="nav-menu">
            <li><Link to='/'>Shop</Link></li>
            <li><Link to='/mens'>Men</Link></li>
            <li><Link to='/womens'>Women</Link></li>
            <li><Link to='/kids'>Kids</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/cart'><img src={cart_icon} alt="" /></Link></li>
        </ul>
    </div>
  )
}

export default Navbar
