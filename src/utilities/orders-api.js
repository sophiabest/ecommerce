import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getOrders() {
    return sendRequest(BASE_URL);
}

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addProductToCart(productId) {
  return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'POST');
}

export function setProductQtyInCart(productId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { productId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}