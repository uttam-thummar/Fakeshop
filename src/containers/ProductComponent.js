import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import StarRatings from './StarRatings';
import Loader from './Loader';

function ProductComponent() {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category, rating: {rate} } = product
        const totalStar = 5;
        const filledStar = Math.round(rate);
        const unfilledStar = totalStar - filledStar;
        const starRatingsProps = {filledStar, unfilledStar}

        return (
            <div className="product-card" key={id}>
                <Link to={`/product/${id}`}>
                    {filledStar === 5 && <div className="badge">Hot</div>}
                    <div className="product-tumb">
                        <img src={image} alt={title} />
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">{category}</span>
                        <h4>{title}</h4>
                        <p><StarRatings {...starRatingsProps}/></p>
                        <div className="product-bottom-details">
                            <div className="product-price">
                                <small>${(price + 13).toFixed(2)}</small>
                                ${price}
                            </div>
                            <div className="product-links">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });

    return (
        <>
            {
                products.length === 0 ? (
                    <div><Loader /></div>
                ) : (
                    <>
                        <div className="container">
                            <h1 className='text-left' style={{margin: '50px 0 35px 0'}}>All Products</h1>
                            <div className="row">
                                {renderList}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default ProductComponent
