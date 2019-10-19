import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { getProducts } from '../../repository';
import { Link } from 'react-router-dom';
import './ProductList.scss';

export default class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}

	componentWillMount() {
		getProducts().then((products) => {
	      this.setState({ products });
	    });
	}

	render() {
		const { products } =  this.state;
		return (
			<div className="container">
				<h3 className="card-title title">Available Originals</h3>
				<hr/>
				<div className="products">
					{products.map((product, index) =>
						<ProductItem product={product} key={index}/>
					)}
				</div>
				<hr/>
				<Link to="/checkout"><button className="btn btn-success float-right">Checkout</button></Link>
				<Link to="/cart"><button className="btn btn-primary float-right" style={{  marginRight: "10px" }}>View Cart</button></Link>
				<br/><br/><br/>
			</div>
		);
	}
}
