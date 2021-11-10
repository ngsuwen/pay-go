import React, { useState, useEffect } from "react";
import { Grid, Container } from '@mui/material';
import Products from '../../ProductCard';

export default function FetchData({ category }) {
    const [data, setData] = useState([]);
    const products = data.map((element) => <Grid item><Products data={element} /></Grid>)

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
        <Container maxWidth='lg'>
            <Grid sx={{ justifyContent: 'center' }} container spacing={0.5} >
                {products}
            </Grid>
        </Container>
    );
};