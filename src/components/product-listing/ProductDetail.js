import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetailItem from './ProductDetailItem'
import _ from 'lodash';

class ProductDetail extends Component {

  renderProductList = (item) => {
    return (
      <div className="card" key={item.id}>
      {console.log(item)}
        <div className="card-image">
          <img
            src={item.img}
            alt={item.title} />
        </div>
        <div className="card-content">
          <ProductDetailItem item={item} />
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="container">
        <h3 className="center">The Chosen Product</h3>
        <div className="box">
          {this.renderProductList(this.props.item)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>
  ({
    item: _.find(state.items.items, 'id', ownProps.match.params.id - 1)
  });

export default connect(mapStateToProps)(ProductDetail);