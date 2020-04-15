import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../../actions/cartActions'
import Recipe from '../Recipe'
import Form from '../Form'
class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          phoneNumber: null,
          email: '',
          errormessage: ''
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "phoneNumber") {
          if (val !="" && !Number(val)) {
            err = <strong>Your phone number must be digits</strong>;
          }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
      }

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    renderCartItems() {
        return this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p><b>Price: {item.price}$</b></p>
                                <p><b>Quantity: {item.quantity}</b></p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons"
                                        onClick={() => { this.handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons"
                                        onClick={() => { this.handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove"
                                    onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                            </div>
                        </li>
                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
    }
    render() {
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {this.renderCartItems()}
                    </ul>
                </div>
                <Recipe name={this.state.name} 
                        email={this.state.email}
                        phoneNumber={this.state.phoneNumber}/>
                <div>
                    <Form myChangeHandler={this.myChangeHandler} errormessage={this.state.errormessage}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)