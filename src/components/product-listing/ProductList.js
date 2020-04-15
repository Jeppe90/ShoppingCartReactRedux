import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

class ProductList extends Component {
    state = { show: false };

    handleClick = (id) => {
        this.props.addToCart(id);
    }
    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    renderProductList = () => {
        return this.props.itemList.map(item => {
            return (
            <div className="card" key={item.id}>
                <div className="card-image">
                    <Link to={`/productdetail/${item.id}`}>
                        <img
                            src={item.img}
                            alt={item.title} />
                    </Link>

                    <span className="card-title">{item.title}</span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                </div>
                <div className="card-content">
                    <ProductItem item={item} />
                </div>
            </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="center">Our Products</h3>
                <div className="box">
                    {this.renderProductList()}
                </div>
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
    }
}

export default connect(null, mapDispatchToProps)(ProductList)