import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard({ data }) {
    return (
        <Card style={{
            width: 280,
            height: 380,
            margin: 5
        }} sx={{
            boxShadow: 0
        }}>
            <CardActionArea sx={{
                '& .MuiCardActionArea-focusHighligh':{backgroundColor:'black'}
            }}>
                <div
                    style={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                        height: 250
                    }}
                >
                    <CardMedia
                        style={{
                            maxWidth: 230,
                            maxHeight: 250,
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