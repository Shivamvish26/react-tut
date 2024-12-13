import React from "react";

export default function Home() {
  return (
    <div>
      <div className="cart__wrapper__at_left">
        <h1>Home Page</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfEiR2h6vjf6x1JgDIZ52TkFgyTXAx1ROng&s" />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper items">
          <img src="https://m-cdn.phonearena.com/images/phones/48955-350/Apple-iPhone-6.jpg?w=1" />
        </div>
        <div className="text-wrapper items">
          <span>Price : 20000</span>
          <span>Brand : Iphone 6</span>
        </div>
        <div className="button-wrapper items">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
