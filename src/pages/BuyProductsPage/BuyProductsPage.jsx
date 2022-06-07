import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyProductsPage.css';
import BuyProductCardContainer from '../../components/BuyProductCardContainer/BuyProductCardContainer';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function BuyProductsPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getAvaliableProducts() {
      const products = await productsAPI.getAll();
      setProducts(products);
    }
    getAvaliableProducts();
  }, []);

  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(productId) {
    const updatedCart = await ordersAPI.addProductToCart(productId);
    setCart(updatedCart);
  }

  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(productId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className="ProductBuyPage">
      <ul>
        <BuyProductCardContainer products={products} handleAddToOrder={handleAddToOrder} />
      </ul>
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>

  );
}