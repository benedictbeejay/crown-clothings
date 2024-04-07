import React from 'react'
import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { UserContext } from '../../context/user.context'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles'


import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)
  
  return (
    <Fragment>
        <NavigationContainer >
            <LogoContainer to='/'>
                <CrownLogo className='logo'/>  
            </LogoContainer>
            
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                  currentUser ?  (
                    <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                  ) : (
                      <NavLink to='/auth'>
                       Sign In
                     </NavLink>
                  )
                }
               <CartIcon /> 
            </NavLinks> 
            {isCartOpen && <CartDropdown />}       
        </NavigationContainer>
        <Outlet />
    </Fragment>
  )
}

export default Navigation
