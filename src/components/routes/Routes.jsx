import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ProductListPage from '../ProductListPage';
import ProductDetails from '../ProductDetails';
import CartPage from '../CartPage';
import {lapTop, phones, tablet} from '../products/products';

const AppRoutes = ({addToCart, cart, removeFromCart, calculateTotal, removeAllFromCart, makePurchase}) => {
    return (
        <Routes>
            <Route
                path="/"
                element={<ProductListPage products={lapTop} addToCart={addToCart} path="/details" title="Ноутбуки"/>}
            />
            <Route
                path="/tablet"
                element={<ProductListPage products={tablet} addToCart={addToCart} path="/tablet-details"
                                          title="Планшети"/>}
            />
            <Route
                path="/phones"
                element={<ProductListPage products={phones} addToCart={addToCart} path="/phone-details"
                                          title="Телефони"/>}
            />
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
                element={
                    <CartPage
                        cart={cart}
                        removeFromCart={removeFromCart}
                        calculateTotal={calculateTotal}
                        removeAllFromCart={removeAllFromCart}
                        makePurchase={makePurchase}
                    />
                }
            />
        </Routes>
    );
};

export default AppRoutes;
