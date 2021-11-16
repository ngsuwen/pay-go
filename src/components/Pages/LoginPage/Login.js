import React, { useState, useRef, useContext, useEffect } from 'react';
import { Button, TextField, Typography, Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginAuth } from './LoginAuth'
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const userLogin = useRef();
    const userPassword = useRef();
    const [match, setMatch]=useState(false)
    const [userId, setUserId] = useContext(UserContext)

    const handleClickShowPassword = () => {
        setShowPassword(showPassword ? false : true)
    };

    async function changeHandler() {
        // console.log(userLogin.current.value)
        const checkUserAuth = await loginAuth(userLogin.current.value, userPassword.current.value)
        const token = checkUserAuth[0]
        setMatch(token?true:false)
    }

    async function buttonHandler() {
        // console.log(userLogin.current.value)
        setUserId(match?userLogin.current.value:null)
    }

    return (
        <Box sx={{ minHeight: '62vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 3 }}>
                <Typography variant="h5" color="#757575">
                    Login
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField sx={{ width: 500 }} label="User Login" variant="outlined" inputRef={userLogin} onChange={changeHandler}/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                <FormControl sx={{ m: 1, width: 500 }} variant="outlined">
                    <InputLabel >
                        Password
                    </InputLabel>
                    <OutlinedInput
                        inputRef={userPassword}
                        type={showPassword ? 'text' : 'password'}
                        onChange={changeHandler}
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
                <Link to={match?'/user':'/login-invalid'} style={{textDecoration:'none'}}>
                    <Button sx={{
                        backgroundColor: "#757575",
                        '&:hover': {
                            backgroundColor: "#757575"
                        }
                    }}
                        variant="contained" disableElevation onClick={buttonHandler}>Sign In</Button>
                </Link>
            </Box>
        </Box>
    )
}