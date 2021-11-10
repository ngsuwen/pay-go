import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Box, Container, Card, CardContent, Typography, CardMedia } from '@mui/material';

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
        <Container maxWidth='lg'>
            <Card sx={{ display: 'flex', justifyContent:'center', padding:'50px 50px 75px', boxShadow:'none' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 300, padding: 5 }}
                    image={data.image}
                    alt={data.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography sx={{padding:1}} variant="h6" fontWeight='bold'>
                            {data.title}
                        </Typography>
                        <Typography sx={{padding:1}} variant="subtitle1" >
                            {data.rating?data.rating.rate:''}/5 ({data.rating?data.rating.count:''})
                        </Typography>
                        <Typography sx={{padding:1}} variant="subtitle1" color="text.secondary" >
                            {data.description}
                        </Typography>
                        <Typography sx={{padding:1}} variant="subtitle1" color="text.secondary">
                            US ${data.price}<br/>
                            #Quantity
                            #AddToCart
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Container>
    );
};