import sendRequest from './send-request';

const BASE_URL = '/api/products';

export function search(query) {
    return sendRequest(`${BASE_URL}/search`, 'POST', {query});
}

export function addProduct(product) {
    return sendRequest(`${BASE_URL}/add`, 'POST', product);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getListings() {
  return sendRequest(`${BASE_URL}/listings`);
}

export function updateListings(product, id) {
  return sendRequest(`${BASE_URL}/edit`, 'PUT', {product, id});
}

export function deleteListings(product, id) {
  return sendRequest(`${BASE_URL}/delete`, 'DELETE', {product, id});
}