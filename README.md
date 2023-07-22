# West Buy

"West Buy" is a full-stack, fully-responsive ecommerce website built using TypeScript, React, React Bootstrap, Node.js, and Express. It utilizes the Stripe API to securely process payments on the backend, thus providing users with a seamless shopping experience that allows them to browse and purchase products from the catalog with ease. Additionally, the app utilizes local storage, enabling the contents of the user's cart to persist between sessions.

## Features

- **Payment Processing**: West Buy utilizes a backend server built with Node.js and Express to securely process payments using the Stripe API. Shoppers can confidently make payments for their purchases with ease and security.
- **Navigation**: Upon visiting West Buy, users are greeted with a visually appealing ecommerce homepage with a navbar that allows them to easily navigate between different pages and view the contents of their cart.
- **Store Page**: The store page showcases a collection of product cards. Each product card includes information such as the product's image, name, description, and price.
- **Shopping Cart**: Users can select a desired quantity of a product and add it to their shopping cart. The shopping cart keeps track of the selected items, displaying the product names, quantities, individual prices, and a total price for the entire order. Via the navbar, users can easily view and manage the contents of their cart at any time.
- **Responsive Design**: West Buy is designed to be responsive and provide an optimal viewing experience across a wide range of devices, including desktops, tablets, and mobile phones.

## Demo

https://github.com/n-tse/ts-shopping-cart/assets/101606128/f0cf8a19-c9d4-49c0-9e7e-6d56b1b79dbd

See the live site at <a href="https://n-tse.github.io/ts-shopping-cart/" target="_blank">https://n-tse.github.io/ts-shopping-cart/</a>

## Tech Stack

The following technologies were used in the development of West Buy:

### Frontend
- **React**: A JavaScript library for building interactive and user-friendly user interfaces.
- **TypeScript**: TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors early and improve code quality.
- **React Bootstrap**: React Bootstrap is a library that integrates Bootstrap's components with React, providing a set of pre-styled and responsive UI elements.
- **React-Router-DOM**: React Router is a collection of navigational components for React applications, and React Router DOM is the specific package for web applications, enabling navigation between different views and components.

### Backend
- **Node.js**: A runtime environment that allows executing JavaScript code on the server-side.
- **Express**: A fast and minimalist web application framework for Node.js that simplifies the creation of robust APIs and web applications.
- **Stripe**: A payment processing platform that enables businesses to securely accept and manage online payments.

<a href="https://reactjs.org" target="_blank" rel="noreferrer">
  <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React" width="40" height="40"/>
</a>

<a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
  <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="TypeScript" width="40" height="40"/>
</a>

<a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer">
  <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" alt="React Bootstrap" width="40" height="40"/>
</a>

<a href="https://nodejs.org" target="_blank" rel="noreferrer">
  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Node.js" width="40" height="40"/>
</a>

<a href="https://expressjs.com" target="_blank" rel="noreferrer">
  <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="Express" width="40" height="40"/>
</a>

<a href="https://stripe.com" target="_blank" rel="noreferrer">
  <img src="https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" alt="Stripe" width="40" height="40"/>
</a>

## Deployment

The client is deployed using GitHub Pages, and the server is deployed via the Cyclic.sh platform. Check out the site for yourself at [https://n-tse.github.io/ts-shopping-cart/](https://n-tse.github.io/ts-shopping-cart/)

## Getting Started

If you would like to run the website locally, follow these steps:

1. Clone the repository: `git clone https://github.com/n-tse/ts-shopping-cart.git`
2. Navigate to the "store" directory: `cd store/`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:5173/ts-shopping-cart` to view the website locally.

** Note: because the server has been deployed, you do not need to worry about running the backend 

## Roadmap

This ecommerce project is in ongoing development, and there are a several exciting features and enhancements planned for the future. Some of the upcoming additions and improvements include:

- **Search Functionality**: Adding a search feature to help users quickly find products they are interested in.
- **Product Categories**: Organizing products into categories to improve navigation and filtering options.
- **Product Details**: By clicking on a product card, users can view detailed information about the selected product, including a larger image, additional descriptions, and other relevant details.

I am planning on working on these features shortly and am excited to integrate them in future updates. Any feedback and suggestions are always welcome and appreciated.

## Contributing

Contributions to West Buy are welcome. Feel free to open issues and submit pull requests to suggest improvements, add new features, or fix bugs.

## License

West Buy is open-source project licensed under the [MIT License](LICENSE).\
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
