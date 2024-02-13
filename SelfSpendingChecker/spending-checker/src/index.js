import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header.js';
// import Main from './main.js';
// import LeftBar from './leftBar.js';
import './css/index.css';
import './css/header.css'

const header = ReactDOM.createRoot(document.getElementById('header-id'))
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

// const leftBar = ReactDOM.createRoot(document.getElementById('leftBar-id'))
// leftBar.render(
//   <React.StrictMode>
//     <LeftBar />
//   </React.StrictMode>
// );

// const main = ReactDOM.createRoot(document.getElementById('main-id'));
// main.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>
// );
