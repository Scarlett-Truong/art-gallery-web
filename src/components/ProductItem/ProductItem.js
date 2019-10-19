import React, { Component } from 'react';
import './ProductItem.scss';

export default class ProductItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity; 
		} else {
			cart[id] = qty
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	render(){
    const { product } = this.props;
		return (
		    <div className="card">
			  <div className="card-body">  
			    <h4 className="card-title title">{product.name}</h4>
          <img className="productPic" src={product.pic_url} alt=""/>
			    {/* <p className="card-text">{product.description}</p> */}
			    <div className="productDesc">
            <h5 className="card-text">${product.price}</h5>
            {/* <span className="card-text"><small>Available Quantity: </small>{product.available_quantity}</span> */}
            { product.available_quantity > 0 ?
              <div>
                <div>
                  <span>Quantity: </span>
                  <input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="inputQty"/>
                </div>
                <button className="btn btn-sm btn-warning btnAdd" onClick={this.addToCart}>Add to cart</button>
              </div> : 
              <p className="text-danger">Sold out</p>
            }
          </div>
			  </div>
			</div>
		)
	}
}
