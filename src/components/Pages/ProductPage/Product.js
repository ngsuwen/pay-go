import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import { IconButton, Box, Container, Card, CardContent, Typography, CardMedia } from '@mui/material';
import QtySelector from "./QtySelector";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ImageZoom from "./ImageZoom";
import { DataContext } from '../../../App'

export default function ProductPage() {
    const params = useParams();
    const [data, setData] = useState([]);
    const [cart, setCart] = useContext(DataContext);

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

    const addToCart =()=>{
        setCart([...cart, data])
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setData(response);
        };
        getData();
    }, [params.category]);

    return (
        <Container maxWidth='lg'>
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px 50px 75px', boxShadow: 'none' }}>
                <CardContent sx={{ padding: 10 }}>
                    <ImageZoom image={data.image} />
                </CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography sx={{ padding: 1 }} variant="h6" fontWeight='bold'>
                            {data.title}
                        </Typography>
                        <Typography sx={{ padding: 1, fontStyle: 'italic' }} variant="subtitle1" color="text.secondary" >
                            Rating: {data.rating ? data.rating.rate : ''}/5
                        </Typography>
                        <Typography sx={{ padding: 1 }} variant="subtitle1" color="text.secondary" >
                            <Typography variant="subtitle2" fontWeight='bold'>
                                DESCRIPTION:
                            </Typography>
                            {data.description}
                        </Typography>
                        <Typography sx={{ padding: 1 }} variant="subtitle1" color="text.secondary" fontWeight='bold'>
                            US ${data.price}
                        </Typography>
                        <Typography sx={{ padding: 1 }} variant="subtitle1" color="text.secondary">
                            Quantity:<br />
                        </Typography>
                        <QtySelector />
                        <IconButton aria-label="add to shopping cart">
                            <AddShoppingCartIcon onClick={addToCart}/>
                        </IconButton>
                    </CardContent>
                </Box>
            </Card>
        </Container >
    );
};