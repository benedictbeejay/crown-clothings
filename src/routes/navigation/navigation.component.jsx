import React from 'react'
import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { UserContext } from '../../context/user.context'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)
  
  return (
    <Fragment>
        <div className='navigation' >
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>  
            </Link>
            
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                  currentUser ?  (
                    <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                  ) : (
                      <Link className='nav-link' to='/auth'>
                       Sign In
                     </Link>
                  )
                }
               <CartIcon /> 
            </div> 
            {isCartOpen && <CartDropdown />}       
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation
