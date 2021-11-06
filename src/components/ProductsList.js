import React, { useState, useEffect } from "react";
import Products from './ProductCard';

export default function FetchData() {
    const [data, setData] = useState([]);
    const products=data.map((element)=><Products data={element}/>)
    
    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setData(response);
        };
        getData();
    }, []);


    return (
        <>
        {products}
        </>
    );
};