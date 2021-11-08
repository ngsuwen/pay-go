import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Products from '../ProductCard';

export default function FetchData() {
    const params = useParams();
    
    const [data, setData] = useState([]);
    const products=data.map((element)=><Grid item><Products data={element}/></Grid>)
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${params.category}`);
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
        <div style={{maxWidth:1200, margin:'auto'}}>
        <Grid sx={{justifyContent: 'center'}} container spacing={0.5} >
            {products}
        </Grid>
        </div>
        </>
    );
};