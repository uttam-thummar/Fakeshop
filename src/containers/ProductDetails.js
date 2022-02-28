import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {
    removeSelectedProduct,
    selectedProduct
} from '../redux/actions/productActions';
import Loader from './Loader';
import StarRatings from './StarRatings';

function ProductDetails() {
    const history = useHistory();
    const { productId } = useParams();
    const product = useSelector(state => state.product);
    const { title, image, price, category, description, rating } = product
    var starRatingsProps = {}, totalStar, filledStar, unfilledStar;
    if(rating){
        totalStar = 5;
        filledStar = Math.round(rating.rate);
        unfilledStar = totalStar - filledStar;
        starRatingsProps = {filledStar, unfilledStar}
    }
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((error) => {
                console.log("Api Error", error);
            });
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <>
            {Object.keys(product).length === 0 ? (
                <div><Loader /></div>
            ) : (
                <main>
                    <div className="card-pd">
                        <div className="card__title">
                                <div className="icon" onClick={history.goBack}>
                                    <i className="fa fa-arrow-left"></i>
                                </div>
                            <h3>New products</h3>
                        </div>
                        <div className="card__body">
                            <div className="half">
                                <div className="featured_text">
                                    <h1>{title}</h1>
                                    <p className="sub">{category}</p>
                                </div>
                                <div className="image">
                                    <img src={image} alt=""/>
                                </div>
                            </div>
                            <div className="half">
                                <div className="description">
                                    <p>{description}</p>
                                </div>
                                <div className="product-price-pd">
                                    <small>${(price + 13).toFixed(2)}</small>
                                    <p className="price">${price}</p>
                                </div>
                                {filledStar===5 && <p className="hot-tag">TOP RATED</p>}
                                <span className="stock"><i className="fa fa-pen"></i> In stock</span>
                                <div className="reviews">
                                    <ul className="stars">
                                        <StarRatings {...starRatingsProps}/>
                                    </ul>
                                    <span>({rating.count} reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className="card__footer">
                            <div className="recommend">
                                <p>Recommended by</p>
                                <h3>Francisco Armstrong</h3>
                            </div>
                            <div className="action">
                                <button type="button">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    )
}

export default ProductDetails
