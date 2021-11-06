import React, { useState, useEffect } from "react";
import Products from '../src/components/ProductCard';
import Grid from '@mui/material/Grid';

export default function FetchData() {
    const [data, setData] = useState([]);
    const products=data.map((element)=><Grid item><Products data={element}/></Grid>)
    
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
        <Grid sx={{justifyContent: 'center'}} container spacing={0.5} >
            {products}
        </Grid>
        </>
    );
};