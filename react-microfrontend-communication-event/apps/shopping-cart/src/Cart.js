import React, { useEffect, useState } from "react";
import { theme } from '@sumangcodes/design-system';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const CartWrapper = styled.div`
  border: ${(props) => props.theme.microfrontendBorder};
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.background};
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("Window object:", window);  // Prints the window object to the console

    const handleAddToCart = (event) => {
      const product = event.detail;
      console.log(`Received product in cart: ID - ${product.id}, Name - ${product.name}, Price - ₹${product.price}`);
      setCartItems((prevItems) => {
        const exists = prevItems.some((item) => item.id === product.id);
        if (exists) {
          console.log(`Product with ID ${product.id} is already in the cart.`);
          return prevItems;
        }
        return [...prevItems, product];
      });
    };

    console.log("Setting up listener for add-to-cart event");
    window.addEventListener('add-to-cart', handleAddToCart);

    return () => {
      console.log("Cleaning up listener for add-to-cart event");
      window.removeEventListener('add-to-cart', handleAddToCart);
    };
  }, []);

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);  // Calculate total price

  return (
    <ThemeProvider theme={theme}>
      <CartWrapper>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{item.price.toLocaleString()}
                </li>
              ))}
            </ul>
            <h3>Total: ₹{cartTotal.toLocaleString()}</h3>
          </>
        )}
      </CartWrapper>
    </ThemeProvider>
  );
};

export default Cart;