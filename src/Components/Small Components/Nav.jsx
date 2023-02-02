import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
      <div className='mainDiv'>
        <div
        to="/"
        className='backDiv'>
          <img
           className='backArrow'
           src="./Images/Vector (Stroke).png" alt="back button" />
          <p
          className='backText'
          >Back</p>
        </div>
        <div className='ZfundsDiv'>
        <img src="/Images/ZFunds Logo.png" alt="ZFunds Logo" className='ZfundsImg'/>
        </div>
        <div className='right_tools'>
          <img src="/Images/Search.png" alt="Search"  className='search'/>
          <img src="/Images/Cart.png" alt="Cart" className='cart' />
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav;
