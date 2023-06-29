import React, {useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes, useParams, useNavigate} from 'react-router-dom';
import {lapTop, phones, tablet} from './components/products';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ProductListPage = ({products, addToCart, path, title}) => {
    return (
        <div className='container'>
            <div className='row title'>
                <h2>{title}</h2>
            </div>
            <div className='row mt-5'>
                {products.map((product) => (
                    <div key={product.id} className='col-lg-6'>
                        <div className='product-card'>
                            <img className='img-fluid' src={product.image} alt={product.name}/>
                            <div className='row mt-5 text-center'>
                                <div className='col-12'>
                                    <h3>{product.name}</h3>
                                </div>
                                <div className='mt-3 col-12'>
                                    <NavLink to={`${path}/${product.id}`}
                                             className="btn btn-secondary btn-sm w-100">Детальніше</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

const ProductDetails = ({products, onClose, onBack, addToCart, cart}) => {
    const {productId} = useParams();
    const product = products.find((p) => p.id === parseInt(productId));
    const navigate = useNavigate();

    if (!product) {
        return <div>Product not found.</div>;
    }

    const goBack = () => {
        navigate(-1);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className='container details'>
            <div className='row text-center'>
                <h2>{product.name}</h2>
            </div>
            <div className='row mt-5'>
                <img className='img-fluid rounded' src={product.image} alt={product.name}/>
            </div>
            <div className='row mt-5 text-center'>
                <h4>{product.description}</h4>
            </div>
            <div className='row mt-5 text-end'>
                <h5>Ціна: ${product.price}</h5>
            </div>
            <div className='row mt-5'>
                <button className='btn btn-sm btn-secondary' onClick={goBack}>Назад</button>
                <button className='btn btn-sm btn-secondary mt-2' onClick={handleAddToCart}>Додати в кошик</button>
            </div>
        </div>
    );
};

const CartPage = ({cart, removeFromCart, calculateTotal, removeAllFromCart, makePurchase}) => {
    return (
        <div className='container cart-box'>
            {cart.length === 0 ? (
                <div className='row title-cart'>
                    <h6>Корзина пуста, спочатку додайте товари.</h6>
                </div>
            ) : (
                <div className='row'>
                    {cart.map((item) => (
                        <div key={item.id} className='d-flex flex-wrap'>
                            <div className='row d-flex rounded product-card-cart' style={{border: '1px solid white'}}>
                                <div className='col-12 col-lg-6'>
                                    <img className='img-fluid' src={item.image} alt={item.name}/>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className='col mt-3 text-end mb-5'>
                                <button className='btn btn-sm btn-danger col'
                                        onClick={() => removeFromCart(item.id)}>Видалити
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className='container mt-5'>
                        <div className='row pt-5 text-end'>
                            <h2>До сплати: ${calculateTotal()}</h2>
                        </div>
                        <div className='col text-end mt-3'>
                            <button className='btn btn-sm btn-primary col b' onClick={makePurchase}>Купити</button>
                        </div>
                        <div className='col text-end mt-3'>
                            <button className='btn btn-sm btn-danger col' onClick={removeAllFromCart}>Видалити все</button>
                        </div>
                    </div>


                </div>
            )}
        </div>
    );
};


const App = () => {
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    const removeAllFromCart = () => {
        setCart([]);
    };

    const calculateTotal = () => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        return total;
    };

    const makePurchase = () => {
        alert('Товар успішно куплений!');
    };

    const goBack = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <Router>
                <div>
                    <nav className="navbar navbar-dark navigations fixed-top navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler text-light" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end navigations-menu" tabIndex="-1" id="navbarNav"
                                 aria-labelledby="navbarNavLabel" style={{width: '20em'}}>
                                <div className="offcanvas-header ">
                                    <h5 className="offcanvas-title text-light" id="navbarNavLabel">My Online Store</h5>
                                    <button type="button" className="btn-close btn-close-white"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body align-items-center">
                                    <ul className="navbar-nav ms-auto">
                                        <NavLink exact={true.toString()} to="/" className="nav-link"
                                                 activeClassName="active">
                                            Ноутбуки
                                        </NavLink>
                                        <NavLink exact={true.toString()} to="/tablet" className="nav-link"
                                                 activeClassName="active">
                                            Планшети
                                        </NavLink>
                                        <NavLink exact={true.toString()} to="/phones" className="nav-link"
                                                 activeClassName="active">
                                            Телефони
                                        </NavLink>
                                    </ul>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <NavLink to="/cart" className="nav-link"
                                                     activeClassName="active">Кошик</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/"
                               element={<ProductListPage products={lapTop} addToCart={addToCart} path="/details"
                                                         title="Ноутбуки"/>}/>
                        <Route path="/tablet"
                               element={<ProductListPage products={tablet} addToCart={addToCart} path="/tablet-details"
                                                         title="Планшети"/>}/>
                        <Route path="/phones"
                               element={<ProductListPage products={phones} addToCart={addToCart} path="/phone-details"
                                                         title="Телефони"/>}/>
                        <Route
                            path="/details/:productId"
                            element={<ProductDetails products={lapTop} addToCart={addToCart} cart={cart}/>}
                        />
                        <Route
                            path="/tablet-details/:productId"
                            element={<ProductDetails products={tablet} addToCart={addToCart} cart={cart}/>}
                        />
                        <Route
                            path="/phone-details/:productId"
                            element={<ProductDetails products={phones} addToCart={addToCart} cart={cart}/>}
                        />
                        <Route
                            path="/cart"
                            element={<CartPage cart={cart} removeFromCart={removeFromCart}
                                               calculateTotal={calculateTotal} removeAllFromCart={removeAllFromCart}
                                               makePurchase={makePurchase}/>}
                        />
                    </Routes>
                </div>
            </Router>
            <footer className=" text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h5>About Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-lg-4">
                            <h5>Contact</h5>
                            <ul className="list-unstyled">
                                <li>Phone: 123-456-7890</li>
                                <li>Email: info@example.com</li>
                                <li>Address: 123 Main Street, City</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default App;
