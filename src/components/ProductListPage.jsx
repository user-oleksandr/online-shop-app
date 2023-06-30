import React from 'react';
import {NavLink} from 'react-router-dom';

const ProductListPage = ({products, addToCart, path, title}) => {
    return (
        <div className='container'>
            <div className='row title'>
                <h2>{title}</h2>
            </div>
            <div className='row mt-5'>
                {products.map((product) => (
                    <div key={product.id} className='col-lg-4'>
                        <div className='product-card mt-4 rounded'>
                            <img className='img-fluid rounded product-image' src={product.image} alt={product.name}/>
                            <div className='row mt-5 text-center'>
                                <div className='col-12'>
                                    <h3>{product.name}</h3>
                                </div>
                                <div className='col m-3'>
                                    <NavLink to={`${path}/${product.id}`} className="btn btn-primary btn-sm">Детальніше</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;
