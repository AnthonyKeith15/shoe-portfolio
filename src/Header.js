import React from "react";
import './Header.css'

class Header extends React.Component {
  render() {
    return(
      <nav>
          <img src="./icons/shoe-prints-solid.svg"/>
        <ul>
          <a href=""><li>Home</li></a>
          <a href=""><li>About Us</li></a>
          <a href=""><li>Shop</li></a>
          <a href=""><li><img src="./icons/cart-shopping-solid.svg"></img></li></a>

        </ul>
      </nav>
    )
  }
}

export default Header