import React, { Component } from 'react';

class Form extends Component {
    renderForm = () => {
     return  <form>
       <h3>Enter your information:</h3> 
      <p>Enter your name:</p>
      <input
        type='text'
        name='name'
        onChange={this.props.myChangeHandler}
      />
      <p>Enter your Email:</p>
            <input
        type='text'
        name='email'
        onChange={this.props.myChangeHandler}
      />
      <p>Enter your phone number:</p>
      <input
        type='text'
        name='phoneNumber'
        onChange={this.props.myChangeHandler}
      />
      {this.props.errormessage}
      </form>
    }
     render() {
      return (
        <div>
          {this.renderForm()}
        </div>
      );
    }
  }
  export default Form