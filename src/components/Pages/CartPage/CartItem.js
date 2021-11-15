import React, { useContext } from 'react';
import { ListItem, ListItemAvatar, ListItemText, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext, CurrencyContext , RateContext } from '../../../App';

export default function Cart({ data }) {
    const [cart, setCart] = useContext(DataContext);
    const [rate, setRate] = useContext(RateContext);
    const [currency, setCurrency] = useContext(CurrencyContext);

    const deleteHandler=()=>{
        const filteredCart = cart.filter((list)=>list!=data)
        setCart(filteredCart)
    }

    return (
        <>
            <ListItem>
                <ListItemAvatar sx={{ padding: '20px', flex:'0 200px' }} >
                    <img style={{width:'100%'}} src={data.image} />
                </ListItemAvatar>
                <ListItemText sx={{ paddingLeft: '20px', flex:'0 600px' }} primary={data.title} secondary="Description" />
                <Typography sx={{ flex:'0 125px' }} color="text.secondary">{data.quantity}</Typography>
                <Typography sx={{ flexGrow: 1 }} color="text.secondary">{currency?currency.toUpperCase():'USD $'}{Number(data.price*rate).toFixed(2)}</Typography>
                <IconButton sx={{ flex:'0 0 20px' }}>
                    <DeleteIcon onClick={deleteHandler}/>
                </IconButton>
            </ListItem>

        </>
    )
}