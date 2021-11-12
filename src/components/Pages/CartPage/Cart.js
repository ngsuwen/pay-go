import React from 'react';
import { List, Container, ListItem, Typography, Button, Grid } from '@mui/material';
import CartItem from './CartItem';

export default function Cart() {
    return (
        <Container maxWidth='lg' sx={{ minHeight: '62vh' }}>
            <List
                sx={{
                    justifyContent: 'center',
                }}
            >
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <ListItem >
                    <Grid container direction="column" spacing={3} >
                        <Grid item/>
                        <Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Typography fontWeight='bold' color="text.secondary">Total Cost: $$$</Typography>
                        </Grid><Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button sx={{color:"text.secondary", fontSize:12}} variant="outlined" color='inherit'>Check out</Button>
                        </Grid>
                        <Grid item/>
                    </Grid>
                </ListItem>

            </List>
        </Container>
    )
}