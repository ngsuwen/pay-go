import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard({ data }) {
    return (
        <Card style={{ maxWidth: 300, maxHeight: 450, margin: 5 }}>
            <CardActionArea>
                <div
                    style={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                        height: 300
                    }}
                >
                    <CardMedia
                        style={{ maxWidth: 250, maxHeight: 280, objectFit: 'scale-down' }}
                        component='img'
                        image={data.image}
                        alt={data.title}
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        US$ {data.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};