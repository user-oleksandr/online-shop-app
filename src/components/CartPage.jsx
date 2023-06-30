import React from 'react';

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
                        <div key={item.id} className=''>
                            <div className='row rounded product-card-cart'>
                                <div className='col-12 col-lg-3'>
                                    <img className='img-fluid' src={item.image} alt={item.name}/>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <p>{item.description}</p>
                                </div>
                                <div className='col mt-3 text-end mb-5'>
                                    <button className='btn btn-sm btn-danger col'
                                            onClick={() => removeFromCart(item.id)}>Видалити
                                    </button>
                                </div>
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
                            <button className='btn btn-sm btn-danger col' onClick={removeAllFromCart}>Видалити все
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
