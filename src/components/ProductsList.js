import React, { useState, useEffect } from "react";
import Products from './ProductCard';

//this is a function to generate proxyURL
const getProxyURL = (endPoint) =>
    `https://shrill-cloud-4f83.wenjie-teo.workers.dev/${endPoint}?ga_proxy=`;

//this is the api base URL
const apiBaseURL = "mywaifulist.moe";

//anything after base url
const options = {
    method: "GET",
    headers: { "x-requested-with": "XMLHttpRequest" },
};


export default function FetchData({ id }) {
    const [data, setData] = useState([]);
    const products=data.map((element)=><Products data={element}/>)
    
    const fetchData = async () => {
        try {
            //const apiEndPoint = '`api/waifu/${id}`';
            //const URL = getProxyURL(apiEndPoint) + apiBaseURL;
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    // const clickHandler = async () => {
    //     const response = await fetchData();
    //     setData(response);
    // }

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


/* <button onClick={clickHandler}>Random</button> */