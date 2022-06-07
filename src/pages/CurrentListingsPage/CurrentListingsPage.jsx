import './CurrentListingsPage.css';
import { useState, useEffect } from 'react';
import ListingCardContainer from '../../components/ListingCardContainer/ListingCardContainer';
import * as productsAPI from '../../utilities/products-api';


export default function CurrentListingsPage({ user }) {
  const [products, setProducts] = useState([]);
  const [updateProduct, setUpdateProduct] = useState({
    condition: '',
    price: ''
  });
  const [deleteProduct, setDeleteProduct] = useState();

  useEffect(function () {
    async function getAvaliableListings() {
      const products = await productsAPI.getListings();
      setProducts(products);
    }
    getAvaliableListings();
  }, []);

  async function updateProductListings(updateProduct, id) {
    const product = await productsAPI.updateListings(updateProduct, id)
    setUpdateProduct(product);
  }

  async function deleteProductListings(deleteProduct, id) {
    const product = await productsAPI.deleteListings(deleteProduct, id)
    setDeleteProduct(product)
  }

  return (
    <div>
      <h1 className="product-listing">My Product Listings</h1>
      <ul>
        <ListingCardContainer
          products={products}
          user={user}
          updateProduct={updateProduct}
          setUpdateProduct={setUpdateProduct}
          updateProductListings={updateProductListings}
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
          deleteProductListings={deleteProductListings}
        />
      </ul>
    </div>

  );
}