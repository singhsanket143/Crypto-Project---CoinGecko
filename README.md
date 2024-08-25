
<div align="center">
    <img height="100px" src="./public/crytoImage.png"/>
    <h1>Crypto Tracker</h1>
</div>

The Cryptocurrency Tracker App is a robust, user-friendly application built with React.js. It allows users to monitor real-time cryptocurrency data, including prices, market caps, and more, using the CoinGecko API. The app offers a comprehensive view of various cryptocurrencies, making it an ideal tool for both casual users and serious investors.

<a style="font-size:1.5rem;" href="https://crypto-project-coin-gecko-topaz.vercel.app">Live Website</a>

## Table of Contents
- [Features](#features)
- [Preview](#preview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features
- Home Page displays a table of cryptocurrencies with images, names, prices, 24-hour changes, and market cap.
- Currency Selector to toggle between USD and INR for displaying data.
- Pagination for browsing through an extensive list of cryptocurrencies.
- Detailed View available by clicking on a cryptocurrency, showing image, description, current price, and a dashboard with market cap, all-time high/low, total volume, and price changes over different periods.
- Interactive Charts displaying price, market cap, and volume data over 24 hours, 30 days, and one year.
- Reusable Components built using the presenter-container pattern for maintainable code.
- Custom Hooks implemented for reusable logic.
- State Management handled by Zustand.
- API Caching done using React Query.
- Responsive Design powered by DaisyUI.
- Performance Optimization with features like lazy loading, suspense, and error boundaries.
- Search box with suggestion functionality and implimented debounce.
- Crypto Compare functionality add two cryto coins and compare data in compare page.

## Preview
**Home Page**
<img src="./public/desktop-preview.png">

**Crypto Detail Page**
<img src="./public/coinPagePreview.png">

**Crypto coin Search**
<img src="./public/search-suggestion-functionality.png">

**Compare Drawer**
<img src="./public/Coin-Comapre.png">

**Coin Compare Page**
<img src="./public/comparePage.png">

## Tech Stack
- **Frontend**: React.js, DaisyUI, Zustand, Chart.js 2
- **API**: CoinGecko Free API
- **State Management**: Zustand
- **API Caching**: React Query
- **Patterns**: Presenter-Container, Custom Hooks
- **Performance**: Suspense, Error Boundaries, Lazy Loading



## Getting Started

### Installation
1. Clone the repository:<br>
   `git clone https://github.com/ManikMaity/Crypto-Project---CoinGecko.git`<br>
   `cd Crypto-Project---CoinGecko`
   

2. Install the dependencies:<br>
   `npm install`
   

3. Start the development server:<br>
   `npm run dev`
   

4. **Access the app**:
   Open your browser and navigate to `http://localhost:5173` to start using the app.

## Usage
- Use the currency selector in the navbar to toggle between USD and INR.
- Browse through the list of cryptocurrencies on the homepage.
- Click on any cryptocurrency to view detailed information and interactive charts.
- Toggle between different time frames (24 hours, 30 days, one year) on the charts.
