import './ProductDetailPage.css';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from "../../utilities/orders-api";
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


function ProductDetailPage() {
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState(null);
    let { productName } = useParams();
    const isMounted = useRef(true);
    const navigate = useNavigate();

    async function handleAddToOrder(productId) {
        const cart = await ordersAPI.addProductToCart(productId);
        setCart(cart);
        navigate('/orders/new');
    }

    async function getProduct() {
        const productOne = await productsAPI.getById(productName)
        console.log(productOne);
        setProduct(productOne);
    }

    useEffect(function() {
        if(isMounted.current) {
            getProduct();
        }
        return () => {
            isMounted.current = false
        }
    })

    return (
        <>
        <header>
            <Link className='grow' id='back-to-shopping' to="/"><i className="fa-regular fa-angle-left"></i> Back To Shopping</Link>
        </header>
        <main className='page-container'>
            <div className='details-container'>
                <div className='price-container'>
                    <div>
                        <span className='price'>${product.price}</span>
                        <div className="buy">
                        <button className="btn-sm grow" id="buy-button" onClick={() => handleAddToOrder(product._id)}>
                        <i className="far fa-cart-plus"></i>
                        <span id="add-to-cart">ADD TO CART</span>
                        </button>
                    </div>
                </div>
            </div>
            <img className='product-details-img grow' src={product.img} alt="" />
            <h4 id='product-name'>{product.name}</h4>
            <div className='product-details-container'>
                <div className='product-property'>
                    <span className='bold'>Size(s):</span>
                </div>
                <div>
                    <span className='smaller'>{product.size}</span>
                </div>
                <div className='product-property'>
                    <span className='bold'>Description:</span>
                </div>
                <div className='description'>
                    <span className='smaller'>{product.description}</span>
                </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default ProductDetailPage;