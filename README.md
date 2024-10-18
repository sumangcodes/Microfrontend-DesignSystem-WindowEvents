# Microfrontend-DesignSystem-WindowEvents

## Overview

This project showcases a microfrontend architecture using React and a custom design system built with Styled Components, featuring dynamic communication between microfrontends through window events. It includes a product catalog and shopping cart with a techie, Amazon-like design system for consistent styling across components.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Styled Components**: For CSS-in-JS styling.
- **Custom Design System**: For consistent styling across components.
- **ThemeProvider**: From Styled Components to manage themes.
- **Window Events**: For communication between microfrontends.
- **Lazy Loading**: For dynamically loading components.

## Features

- **Product Catalog**: Displays a list of products.
- **Shopping Cart**: Manages and displays items added to the cart.
- **Themed Design**: Custom Amazon-like geeky theme using Styled Components.
- **Inter-Microfrontend Communication**: Uses window events to communicate between the product catalog and shopping cart.
- **Consistent Styling**: Ensures a consistent look and feel across components using a centralized design system.

## Setup

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/yourusername/Microfrontend-DesignSystem-WindowEvents.git
    cd Microfrontend-DesignSystem-WindowEvents
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Run the Application:**
    ```bash
    npm start
    ```

## Components

### `ProductList`
- Displays a list of products.
- Dispatches an `add-to-cart` custom event when a product is added to the cart.

### `Cart`
- Listens for the `add-to-cart` custom event.
- Adds products to the cart and displays them.

### `App`
- Container app that integrates `ProductList` and `Cart` components.
- Uses `ThemeProvider` to apply the custom theme.

## Theme Customization

The theme is defined in the `theme.js` file and can be customized as needed:

```js
export const theme = {
  colors: {
    primary: "#FF9900",
    secondary: "#232F3E",
    background: "#1A1A1A",
    text: "#39FF14",
  },
  fonts: {
    body: "'Source Code Pro', monospace",
    heading: "'Source Code Pro', monospace",
  },
  button: {
    backgroundColor: "#FF9900",
    color: "#232F3E",
    fontFamily: "'Source Code Pro', monospace",
    border: "1px solid #39FF14",
    borderRadius: "4px",
    padding: "10px 20px",
  },
  spacing: (factor) => `${8 * factor}px`,
  microfrontendBorder: "1px solid #39FF14"
};
