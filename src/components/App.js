import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './navigation/Navbar'
import Home from './Home'
import Cart from './cart/Cart'
import { connect } from 'react-redux'
import OrderDetails from './product-listing/OrderDetails';
import ProductDetail from './product-listing/ProductDetail';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Navbar cartItems={this.props.items} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/productdetail/:id" component={ProductDetail} />
              <Route path="/:orderdetails" component={OrderDetails} />
            </Switch>
          </div>
        </BrowserRouter>
    
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.addedItems
  }
}
export default connect(mapStateToProps)(App)