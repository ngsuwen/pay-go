import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';

const CCard = () => {
    return (
        <Card>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    draggable="false"
                    component="img"
                    height="450"
                    image="https://source.unsplash.com/featured/?lamp"
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        padding: '10px',
                    }}
                >
                    <Typography variant="h5">Lizard</Typography>
                    <Typography variant="body2">Subtitle</Typography>
                </Box>
                
            </Box>
        </Card>
    )
}

const Item = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={4}>
                <CCard />
            </Grid>
            <Grid item xs={4}>
                <CCard />
            </Grid>
            <Grid item xs={4}>
                <CCard />
            </Grid>
        </Grid>
    );
};

export default function ProductCarousel() {
    const items = [
        {
            name: 'Aya Bouchiha',
            description: 'Full Stack Web Developer',
        },
        {
            name: 'John Doe',
            description: 'Author',
        },
        {
            name: 'Pitsu Coma',
            description: 'Math Student',
        },
    ];

    return (
        <div style={{ maxWidth: 1000, margin: 'auto', height: 450 }}>
            <Carousel>
                {items.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </Carousel>
        </div>
    );
}

