import React, { useContext } from 'react';
import { List, Container, ListItem, Typography, Button, Grid, Divider } from '@mui/material';
import CartItem from './CartItem';
import { DataContext } from '../../../App'


export default function Cart() {
    const [cart, setCart] = useContext(DataContext);
    const cartItemList = cart.map((item, index) =>
        <CartItem data={item} key={index} />)
    return (
        <Container maxWidth='lg' sx={{ minHeight: '62vh' }}>
            <List
                sx={{
                    justifyContent: 'center',
                }}
            >
                <ListItem>
                    <Typography sx={{ paddingLeft: '20px', paddingBottom: '20px' }} variant='h6' fontWeight="bold" color="text.secondary">Products</Typography>
                </ListItem>
                <Divider />
                {cartItemList}
                <Divider />
                <ListItem >
                    <Grid container direction="column" spacing={3} >
                        <Grid item />
                        <Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Typography fontWeight='bold' color="text.secondary">Total Cost: $$$</Typography>
                        </Grid><Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button sx={{ color: "text.secondary", fontSize: 12 }} variant="outlined" color='inherit'>Check out</Button>
                        </Grid>
                        <Grid item />
                    </Grid>
                </ListItem>

            </List>
        </Container>
    )
}