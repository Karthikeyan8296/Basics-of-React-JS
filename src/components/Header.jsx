import React from "react";

export const title = "hello";

function Header() {
  return (
      <>
      <header>
        <h1>Top Hitting Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
