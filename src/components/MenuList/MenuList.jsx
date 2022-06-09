import './MenuList.css';
import MenuListProduct from '../MenuListProduct/MenuListProduct';

export default function MenuList({ menuProducts, handleAddToOrder, user }) {
  const products = menuProducts.map(product =>
    <MenuListProduct
      key={product._id}
      menuProduct={product}
      handleAddToOrder={handleAddToOrder}
      user={user}
    />
  );
  return (
    <main className="MenuList">
      {products.length ? 
      <>
        {products}
      </>
      :
      <h2 className='no-products-msg'>No Products Here Yet...</h2>
    }
    </main>
  );
}