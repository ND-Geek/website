import React from 'react';

import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://p.kindpng.com/picc/s/1-11932_amazon-logo-png-amazon-a-logo-transparent-png.png" alt="Amazon Logo" /
          >
        </nav>
        </header>

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="ProductPreview" />
          </div>

          <div classname={classes.ProductData}></div>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png"
          alt="Red Colored Watch" />
        </div>
    </div>
  );
}

export default App;
