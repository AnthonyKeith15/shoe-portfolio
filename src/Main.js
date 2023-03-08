import React from "react";
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Cart from './Cart';
import './Main.css';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCartOpen: false,
      openTab: ''
    }
  }
  render() {
    return(
      <>
      <Home></Home>
      <About></About>
      <Shop></Shop>
      {this.state.isCartOpen && <Cart />}
      </>
    )
  }
}

export default Main