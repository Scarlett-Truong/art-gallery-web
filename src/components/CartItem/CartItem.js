import React, { Component } from 'react';
import './CartItem.scss';

export default class CartItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	render(){
		const { product } = this.props;
		return (
		    <div className="card" style={{ marginBottom: "10px"}}>
			  <div className="card-body">
          <div className="cartContent">
            <img className="cartPic" src={product.pic_url} alt=""/>
            <h5 className="card-title">{product.name}</h5>
            <h5 className="card-text">${product.price}</h5>
            <h5 className="card-text text-success">Quantity:{product.qty}</h5>
          </div>
			    
			    <button className="btn btn-sm btn-warning float-right" onClick={() => this.props.remove(product)}>Remove from cart</button>

			  </div>
			</div>
		)
	}
}
