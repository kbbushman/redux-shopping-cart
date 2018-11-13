import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CartActions from '../actions/CartActions';
import Shelf from '../components/Shelf';

class Cart extends Component {
  state = {}

  render() {
    const CartItems = this.props.cart.map((item, id) => {
      return <li key={id}>{ item }</li>;
    });

    return (
      <div>
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Cart</h2>
        <ol>
          { CartItems }
        </ol>
      </div>
    );
  };
};

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
