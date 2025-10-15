# ABC Ecommerce (React + Vite)

Minimal ecommerce demo built with React + Vite. This repository demonstrates routing, simple components, and static product data.

Quick links:
- Main entry: [`main.jsx`](src/main.jsx) — mounts the app and provides routing.
- App root: [`App`](src/App.jsx).
- Nav: [`NavBar`](src/components/Navbar.jsx).
- Product list: [`ProductPage`](src/pages/ProductPage.jsx) and [`ProductCard`](src/components/ProductCard.jsx).
- Product detail + nested reviews: [`ProductDetailPage`](src/pages/ProductDetailPage.jsx) and [`Reviews`](src/pages/Reviews.jsx).
- Static data: [`products`](src/data/products.js).
- Styling: [`App.css`](src/App.css), [`ProductCard.css`](src/components/ProductCard.css), [`index.css`](src/index.css).
- Build config: [`vite.config.js`](vite.config.js) and [`package.json`](package.json).

Features
- Client-side routing with nested routes (see [`App`](src/App.jsx) and [`ProductDetailPage`](src/pages/ProductDetailPage.jsx)).
- Product filtering via query string (see [`ProductPage`](src/pages/ProductPage.jsx) using `?category=`).
- Static product dataset in [`src/data/products.js`](src/data/products.js).
- Simple responsive product grid and card styles in CSS files.

Getting started

1. Install dependencies
```sh
npm install
```
2. Run the App
```sh
npm run dev
```

# Kevin was Here 🤫