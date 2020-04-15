import React from 'react';
const ProductItem = (props) => {
    return (
        <div className="container">
            <p><b>Title: {props.item.title}</b></p>
            <p><b>Description: {props.item.desc}</b></p>
            <p><b>Price: {props.item.price}$</b></p>
            <p><b>Size: {props.item.size}</b></p>
        </div>
    )
}

export default ProductItem;