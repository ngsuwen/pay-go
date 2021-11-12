import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart({ data }) {
    return (
        <>
            <ListItem>
                <ListItemAvatar sx={{ padding: '20px', flex: 2 }} >
                    <img style={{width:'100%'}} src='https://mui.com/static/images/grid/complex.jpg' />
                </ListItemAvatar>
                <ListItemText sx={{ flexGrow: 2 }} primary="Name" secondary="Description" />
                <Typography sx={{ flexGrow: 1 }} color="text.secondary">Quantity</Typography>
                <Typography sx={{ flexGrow: 0.5 }} color="text.secondary">Cost</Typography>
                <IconButton >
                    <DeleteIcon />
                </IconButton>
            </ListItem>

        </>
    )
}