import axios from 'axios';

const SERVER_URL = 'http://localhost:8000';

export function getProducts() {
	return axios.get(`${SERVER_URL}/products`)
		.then(response => response.data);
}

export function getCartProducts(cart) {
	return axios.post(`${SERVER_URL}/products`, {cart})
		.then(response => response.data);
}
