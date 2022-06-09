import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function NewOrderPage({ user, setUser }) {
  // If your state will ultimately be an array, ALWAYS
  // initialize to an empty array
  const [menuProducts, setMenuProducts] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  // const [activeBrand, setActiveBrand] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  // const brandsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = [...new Set(products.map(product => product.category.name))];
      setMenuProducts(products);
      setActiveCat(categoriesRef.current[0]);
      // setActiveBrand(products[0].brand.name);
    }
    getProducts();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // An empty dependency array results in the effect
  // function running ONLY after the FIRST render
  
  /*-- Event Handlers --*/
  async function handleAddToOrder(productId) {
    const cart = await ordersAPI.addProductToCart(productId);
    setCart(cart);
  }

  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    // programatically change client-side routes
    navigate('/orders');
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
      </aside>
      <MenuList
        menuProducts={menuProducts.filter(product => product.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}