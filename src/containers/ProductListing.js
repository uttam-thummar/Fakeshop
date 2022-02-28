import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

function ProductListing() {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error) => {
            console.log("Api Error", error);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <ProductComponent />
        </>
    )
}

export default ProductListing
