import './SellProductForm.css';
import SellProductContainer from "../SellProductContainer/SellProductContainer";

export default function SellProductForm({ user, products, query, setQuery, handleGetProducts, addProduct }) {

    return (
        <div>
            <input
                value={query}
                onChange={(evt) => setQuery(evt.target.value)}
                placeholder="Search Products"
                required
            />
            <br />
            <button className="sell-form" onClick={() => handleGetProducts(query)}>Search</button>
            <hr />
            <br />
            <SellProductContainer user={user} products={products} addProduct={addProduct} />
        </div>
    );
}