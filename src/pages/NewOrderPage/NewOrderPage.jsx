import { useState, useEffect } from 'react';
import './BuyProductsPage.css';
import BuyProductCardContainer from '../../components/BuyProductCardContainer/BuyProductCardContainer';
import * as ordersAPI from '../../utilities/orders-api';
import * as itemsAPI from '../../utilities/items-api';


export default function SearchProductsPage() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setMenuItems(items);
    } [];
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*-- Event Handlers --*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addToCart(itemId);
    setCart(updatedCart);
  }


  return (
    <main className="ProductBuyPage">
      <h1>Search Products</h1>
      <ul>
        <BuyProductCardContainer products={products} cart={cart} setCart={setCart} items={items} handleAddToOrder={handleAddToOrder} />
      </ul>
    </main>

  );
}