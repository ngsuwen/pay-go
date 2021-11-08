import React from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

export default function ProductCard({ data }) {
    return (
        <Card style={{
            width: 220,
            height: 330,
            margin: 5
        }} sx={{
            boxShadow: 0
        }}>
            <CardActionArea sx={{
                '&:hover':{opacity:0.7},
                '.MuiCardActionArea-focusHighlight': {
                    bgcolor: 'white',
                }
            }}>
                <div
                    style={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                        height: 200
                    }}
                >
                    <CardMedia
                        style={{
                            maxWidth: 150,
                            maxHeight: 200,
                            objectFit: 'scale-down'
                        }}
                        component='img'
                        image={data.image}
                        alt={data.title}
                    />
                </div>
                <CardContent>
                    <Typography textAlign='center' gutterBottom variant="subtitle2" component="div">
                        {data.title}
                    </Typography>
                    <Typography textAlign='center' variant="subtitle2" color="text.secondary">
                        US$ {data.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};