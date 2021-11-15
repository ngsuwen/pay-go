import React from 'react';
import { Typography, Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material';

const traditional = ['eur','sgd','usd']
const crypto = ['btc','eth','ltc']

const traditionalOp = traditional.map((currency)=><MenuItem value={`${currency} $`}><Typography variant="body2" color="textSecondary">{currency}</Typography></MenuItem>)
const cryptoOp = crypto.map((currency)=><MenuItem value={currency}><Typography variant="body2" color="textSecondary">{currency}</Typography></MenuItem>)

export default function CurrencyOption({currency, setCurrency}) {

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
            <Box sx={{ maxWidth: 200, marginBottom: 10, marginLeft:2 }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel><Typography variant="body2" color="textSecondary">Currency:</Typography></InputLabel>
                    <Select
                        value={currency}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em><Typography variant="body2" color="textSecondary">--TRADITIONAL--</Typography></em>
                        </MenuItem>
                        {traditionalOp}
                        <MenuItem value="">
                            <em><Typography variant="body2" color="textSecondary">--CRYPTO--</Typography></em>
                        </MenuItem>
                        {cryptoOp}
                    </Select>
                </FormControl>
            </Box>
    );
}