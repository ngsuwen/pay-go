import React, { useState, useEffect, useContext } from "react";
import { Grid, Divider, Container, Box, Typography } from '@mui/material';
import { UserContext } from "../../../App";

export default function FetchData() {
    const [data, setData] = useState()
    const [userId, setUserId] = useContext(UserContext)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/`);
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
            const filter = response.filter((element, index)=>(element.username===userId))
            setData(filter[0])
        };
        getData();
    }, []);

    return (
        <Container maxWidth='lg' sx={{ minHeight: '62vh' }}>
            <Box sx={{ justifyContent: 'center' }} >
                {data ?
                    <>
                        <Typography variant='body1' fontWeight='bold'>Personal Profile</Typography>
                        <Divider />
                        <Grid container rowSpacing={1} sx={{ marginTop: 2, marginBottom: 3, marginLeft: 2 }}>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Name:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{`${data.name.firstname} ${data.name.lastname}`}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Email:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{data.email}</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant='body1' fontWeight='bold'>Shipping Address</Typography>
                        <Divider />
                        <Grid container rowSpacing={1} sx={{ marginTop: 2, marginBottom: 3, marginLeft: 2 }}>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">City:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{data.address.city}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Street:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{`${data.address.number} ${data.address.street}`}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Zipcode:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{data.address.zipcode}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle1' color="text.secondary">Phone:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='subtitle1' color="text.secondary">{data.phone}</Typography>
                            </Grid>
                        </Grid>
                    </>
                    : 'Loading'}
            </Box>
        </Container>
    );
};