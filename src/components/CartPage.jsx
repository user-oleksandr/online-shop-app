import React from 'react';

const CartPage = ({cart, removeFromCart, calculateTotal, removeAllFromCart, makePurchase}) => {

    return (
        <div className='container cart-box'>
            {cart.length === 0 ? (
                <div className='row title-cart'>
                    <h6>Корзина пуста, спочатку додайте товари.</h6>
                </div>
            ) : (
                <div>
                    <div className='container pt-5 pb-5'>
                        {cart.map((item) => (
                            <div key={item.id} className='col m-2 rounded'>
                                <div className='row rounded product-card-cart'>
                                    <div className='col-lg-3 '>
                                        <img className='img-fluid rounded' src={item.image} alt={item.name}/>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <h3>{item.name}</h3>
                                        <p>${item.price}</p>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='col mt-5 text-center'>
                                        <button className='btn btn-sm btn-danger col mb-3'
                                                onClick={() => removeFromCart(item.id)}>Видалити
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr/>
                    <div className='container mt-1'>
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
