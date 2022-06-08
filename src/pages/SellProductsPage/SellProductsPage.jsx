import { useState } from 'react';
import SellProductForm from '../../components/SellProductForm/SellProductForm';
import * as productsAPI from '../../utilities/products-api';
import './SellProductsPage.css';


export default function SellProductsPage({ user }) {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState({ items: [] });


  async function handleGetProducts(query) {
    const product = await productsAPI.search(query);
    setProducts(product)
  };

  async function addProduct(newProduct) {
    const products = await productsAPI.addProduct(newProduct)
    setProducts(products)
  }

  return (
    <div>
      <h1 className="sell-product">Sell A Product</h1>
      <div>
        <h3>Please follow the instructions below to list a product for sale.</h3>
        <br />
        <h6>1. Search for your product using the search bar below by entering the product's name.</h6>
        <br />
        <h6>2. Once you find your product, enter the price and condition.</h6>
        <br />
        <h6>3. Select "Add Listing" and update your listing as needed from the "My Listings" page.</h6>
        <br />
      </div>
      <SellProductForm user={user}
        products={products} query={query}
        setQuery={setQuery}
        handleGetProducts={handleGetProducts}
        addProduct={addProduct} />
    </div>
  );
}