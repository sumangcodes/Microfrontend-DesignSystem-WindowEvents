import React from "react";
import { Button, theme } from '@sumangcodes/design-system';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const MicrofrontendWrapper = styled.div`
  border: ${(props) => props.theme.microfrontendBorder};
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.background};
`;

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ];

  const handleAddToCart = (product) => {
    console.log(`Emitting add-to-cart event for product ID: ${product.id}`);
    console.log("Window object before dispatch:", window);  // Debugging window

    // Ensure cross-browser compatibility with CustomEvent
    const customEvent = new CustomEvent('add-to-cart', {
      detail: product,
      bubbles: true,
      cancelable: true
    });

    window.dispatchEvent(customEvent); // Dispatch event to global window object
  };

  return (
    <ThemeProvider theme={theme}>
      <MicrofrontendWrapper>
        <h2>Product Catalog</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name}{" "}
              <Button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </li>
          ))}
        </ul>
      </MicrofrontendWrapper>
    </ThemeProvider>
  );
};

export default ProductList;