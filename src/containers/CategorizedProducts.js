import React, {useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategorizedProducts, setCategorizedProducts } from '../redux/actions/productActions';
import StarRatings from './StarRatings';
import Loader from './Loader';

function CategorizedProducts() {
    const {category} = useParams();

    const dispatch = useDispatch();
    const categorizedProducts = useSelector(state => state.categorizedProducts.products);

    const fetchCategorizedProducts = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .catch((error) => {
            console.log("Api Error", error);
        });
        dispatch(setCategorizedProducts(response.data, category));
    };

    useEffect(() => {
        fetchCategorizedProducts();
        return () => {
            dispatch(removeCategorizedProducts());
        }
    }, [category]);

    const capitalized = (words) => {
        let wordArr = words.split(/[ ]+/);
        let capitalizedWords = wordArr.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        return capitalizedWords.join(" ");
    }

    const renderList = categorizedProducts.map((product) => {
        const { id, title, image, price, category, rating: {rate} } = product
        const totalStar = 5;
        const filledStar = Math.round(rate);
        const unfilledStar = totalStar - filledStar;
        const starRatingsProps = {filledStar, unfilledStar}

        return (
            <div className="product-card col-md-4" key={id}>
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
    })

    return (
        <>
            {
                categorizedProducts.length === 0 ? (
                    <div><Loader /></div>
                ) : (
                    <>
                        <div className="container">
                            <h1 className='text-left' style={{margin: '50px 0 35px 0'}}>{capitalized(category)}</h1>
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

export default CategorizedProducts
