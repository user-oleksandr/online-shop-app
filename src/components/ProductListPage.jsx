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

export default ProductListPage;
