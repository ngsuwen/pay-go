import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Grid, Container } from '@mui/material';
import Product from '../../ProductCard';
import SortOption from '../CategoryPage/SortOption'
import { sortFunction } from '../CategoryPage/sortFunction'

export default function FetchData() {
    const [sort, setSort] = React.useState('');
    const params = useParams();

    const [data, setData] = useState([]);
    let filteredData = data.filter((element) => element.title.toLowerCase().includes(`${params.term}`))
    const products = filteredData.map((element) => <Grid item><Product data={element} /></Grid>)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();
            // console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            // console.log(sort)
            sortFunction(response, sort)
            // console.log(response)
            setData(response);
        };
        getData();
    }, [params.term, sort]);

    return (
        <Container maxWidth='lg' sx={{minHeight:'62vh'}}>
            <SortOption sort={sort} setSort={setSort}/>
            <Grid sx={{ justifyContent: 'center' }} container spacing={0.5} >
                {products}
            </Grid>
        </Container>
    );
};