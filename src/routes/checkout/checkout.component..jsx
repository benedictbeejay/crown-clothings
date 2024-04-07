import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { Total, Span, HeaderBlock, CheckoutContainer, CheckoutHeader  } from './checkout.styles'
import CheckoutItem from '../../components/checkout-item/checkout.item.component'
// import CartItem from '../../components/cart-item/cart-item.component'

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);
  return (
    <CheckoutContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <Span>Product</Span>
      </HeaderBlock>
      <HeaderBlock>
        <Span>Description</Span>
      </HeaderBlock>
      <HeaderBlock>
        <Span>Quantity</Span>
      </HeaderBlock>
      <HeaderBlock>
        <Span>Price</Span>
      </HeaderBlock>
      <HeaderBlock>
        <Span>Remove</Span>
      </HeaderBlock>
  
    </CheckoutHeader>
      {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/> 
        ))}
      <Total >Total: ${cartTotal}</Total>  
    </CheckoutContainer>
  )
} 

export default Checkout
