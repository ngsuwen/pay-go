import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from 'react-router-dom'
import { Alert, Snackbar, IconButton, Box, Container, Card, CardContent, Typography, CardMedia } from '@mui/material';
import QtySelector from "./QtySelector";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ImageZoom from "./ImageZoom";
import { DataContext } from '../../../App'


export default function ProductPage() {
    const params = useParams();
    const [data, setData] = useState([]);
    const [cart, setCart] = useContext(DataContext);
    const [alert, setAlert] = useState(false);
    const qtyRef = useRef();

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

    const addToCart = () => {
        const index = cart.findIndex((element)=>element.title===data.title)
        if (index === -1) {
            if (qtyRef.current.value === '') {
                data.quantity = 1
            } else {
                data.quantity = Number(qtyRef.current.value)
            }
            setCart([...cart, data])
        } else {
            if (qtyRef.current.value === '') {
                cart[index].quantity+=1
                setCart([...cart])
            } else {
                cart[index].quantity+=Number(qtyRef.current.value)
                setCart([...cart])
            }
        }
        setAlert(true)
    }

    const handleClose = () => {
        setAlert(false)
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
                        <QtySelector qtyRef={qtyRef} />
                        <IconButton aria-label="add to shopping cart">
                            <AddShoppingCartIcon onClick={addToCart} />
                        </IconButton>
                    </CardContent>
                </Box>
            </Card>
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={alert} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Added to cart!
                </Alert>
            </Snackbar>
        </Container >
    );
};