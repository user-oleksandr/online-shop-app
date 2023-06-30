import React, {useState} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Navigation from './components/navigations/Navigation';
import Routes from './components/routes/Routes';
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);

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

    return (
        <div>
            <Router>
                <Navigation/>
                <Routes
                    addToCart={addToCart}
                    cart={cart}
                    removeFromCart={removeFromCart}
                    calculateTotal={calculateTotal}
                    removeAllFromCart={removeAllFromCart}
                    makePurchase={makePurchase}
                />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
