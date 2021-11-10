import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Products from '../ProductCard';

export default function ProductPage() {
    const params = useParams(); 
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
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
    }, [params.category]);

    return (
        <>
        <div style={{minHeight: '62vh', maxWidth:1000, margin:'auto'}}>
        <Grid sx={{justifyContent: 'center'}} container spacing={0.5} >
            <Products data={data}/>
        </Grid>
        </div>
        </>
    );
};