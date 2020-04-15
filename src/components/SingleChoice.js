import React, { Component } from 'react';

class SingleChoice extends Component {
  render() {
    return (
      <div>
          <label>Order by
               <select style={{ display: "block" }} 
               value={this.props.sort} 
               onChange={this.props.handleChangeSort}>
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        <label > Filter Size
       <select style={{ display: "block" }} 
       value={this.props.size} 
       onChange={this.props.handleChangeSize}>
            <option value="">ALL</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SingleChoice