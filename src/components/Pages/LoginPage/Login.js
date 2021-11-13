import React, { useState } from 'react';
import { Button, TextField, Typography, Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(showPassword ? false : true)
    };

    return (
        <Box sx={{ minHeight: '62vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 3 }}>
                <Typography variant="h5" color="#757575">
                    Login
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField sx={{ width: 500 }} label="User Login" variant="outlined" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                    <InputLabel>
                        Password
                    </InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                <Button sx={{
                    backgroundColor: "#757575",
                    '&:hover': {
                        backgroundColor: "#757575"
                    }
                }}
                    variant="contained" disableElevation>Sign In</Button>
            </Box>
        </Box>
    )
}