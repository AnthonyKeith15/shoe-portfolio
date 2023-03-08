import React from "react";
import Cart from './Cart'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
    }
  }
  openCart = (e) => {
    this.setState({
      isCartOpen: true
    })
  }
  render() {
    return (
      <nav>
        <img src="./icons/shoe-prints-solid.svg" />
        <ul>
          <a href=""><li>Home</li></a>
          <a href=""><li>About Us</li></a>
          <a href=""><li>Shop</li></a>
          <li><img onClick={this.openCart} isCartOpen={this.state.isCartOpen} src="./icons/cart-shopping-solid.svg"></img></li>
          <Cart></Cart>

        </ul>
      </nav>
    )
  }
}
export default Header