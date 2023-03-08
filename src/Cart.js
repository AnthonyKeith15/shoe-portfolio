import React from "react";
import './Cart.css';


class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cartState: this.props.isCartOpen,
  }
}

  render() {
    console.log(this.state.cartState);
    return(
      <>
      <h1>This is on Carts</h1>
      </>
    )
  }
}

export default Cart