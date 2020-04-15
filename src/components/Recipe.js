import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Recipe extends Component {
    state = { 
        linkTo: "/cart",
        name: '',
        phoneNumber: null,
        email: ''
     };

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
            if (this.props.addedItems.length > 0) {
                this.setState({ linkTo: "/orderdetails" });
            }
        }
        else {
            this.props.substractShipping();
            this.setState({ linkTo: "/cart" });
        }
    }
    handleMakeOrder = () => {
        if (!this.refs.shipping.checked) {
            alert("Make sure to check the shipping box")
        }
        else if (this.refs.shipping.checked && this.props.addedItems.length === 0) {
            alert("The cart can't be empty if you want ot make an order")
        }
    }
    render() {
        console.log(" recipe" + this.state.name)
        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} $</b>
                    </li>

                </div>
                <div className="checkout">   
                    <Link onClick={this.handleMakeOrder} 
                    to={{
                        pathname:this.state.linkTo,
                        state: {
                            email: this.props.email,
                            name: this.props.name,
                            phoneNumber: this.props.phoneNumber                      
                        }}}
                    className="#76ff03 light-green accent-3 btn">
                        Make Order
                    </Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.items.addedItems,
        total: state.items.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recipe)