import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

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
                <button className='btn btn-sm btn-primary' onClick={goBack}>Назад</button>
                <button className='btn btn-sm btn-primary mt-2' onClick={handleAddToCart}>Додати в кошик</button>
            </div>
        </div>
    );
};

export default ProductDetails;
