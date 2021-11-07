import React, { useState, useEffect } from "react";
import Products from '../../ProductCard';
import Grid from '@mui/material/Grid';

export default function FetchData({category}) {
    const [data, setData] = useState([]);
    const products=data.map((element)=><Grid item><Products data={element}/></Grid>)
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
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
        <div style={{maxWidth:1200, margin:'auto'}}>
        <Grid sx={{justifyContent: 'center'}} container spacing={0.5} >
            {products}
        </Grid>
        </div>
        </>
    );
};