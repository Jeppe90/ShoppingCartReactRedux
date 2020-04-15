import React, { Component } from 'react';
import { connect } from 'react-redux'
class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          phoneNumber: null,
          email: '',
        };
      }

    componentWillUnmount(){
        this.props.substractShipping()
    }

    componentDidMount(){
        const { email } = this.props.match.params
        const { name } = this.props.match.params
        const { phoneNumber } = this.props.match.params
        this.setState({
            email: email,
            name: name,
            phoneNumber: phoneNumber
        })
    }
    //      componentDidMount(){
    //     this.setState({
    //         email: this.props.match.params.email,
    //         userName: this.props.match.params.userName,
    //         phoneNumber: this.props.match.params.phoneNumber
    //     })
    //  }

    renderOrderDetails() {
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
                            <p><b>Size: {item.size}</b></p>
                            <p><b>Price: {item.price}</b></p>
                            <p><b>Quantity: {item.quantity}</b></p>
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
                    <h5>Your order has been sent:</h5>
                    <p><b>Total: {this.props.total}$</b></p>
                    <ul className="collection">
                        {this.renderOrderDetails()}
                    </ul> 
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) },
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.addedItems,
        total: state.items.total
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)