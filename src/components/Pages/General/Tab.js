import React, { useState, useRef, useContext } from 'react';
import { styled, Tabs, Tab, Box, Container, ClickAwayListener, IconButton, Input, Badge, Menu, MenuItem, Fade } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'rgb(128,128,128)',
    }
});

const StyledTab = styled((props) => <Link style={{ textDecoration: 'none' }} to={`${props.link}`}><Tab disableRipple {...props} /></Link>)({
    textTransform: 'none',
    color: 'rgb(169,169,169)',
    '&.Mui-selected': {
        color: 'rgb(80,80,80)',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
},
);

export default function CustomizedTabs({ cart }) {
    const searchRef = useRef();
    const [value, setValue] = useState(0);
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState(false);
    const [userId, setUserId] = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseLogout = () => {
        setAnchorEl(null);
        setUserId(null)
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let totalCart = 0
    const calTotalCart = () => cart.forEach(item => totalCart += item.quantity)
    calTotalCart()

    const setSearchHandler = () => {
        setSearch(true)
    }

    const searchHandler = () => {
        setSearch(false)
    }

    const handleClickAway = () => {
        setSearch(false)
    }

    const searchChangeHandler = () => {
        setSearchValue(searchRef.current.value)
    }

    return (
        <Container maxWidth='lg'>
            <Box sx={{ marginBottom: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {search ?
                        <>
                            <Link to={`/search/${searchValue ? searchValue : ''}`}>
                                <IconButton>
                                    <SearchIcon onClick={searchHandler} />
                                </IconButton>
                            </Link>
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <Input sx={{ fontSize: 14 }} placeholder="Search" inputRef={searchRef} onChange={searchChangeHandler} />
                            </ClickAwayListener>
                        </>
                        :
                        <IconButton>
                            <SearchIcon onClick={setSearchHandler} />
                        </IconButton>}
                    {userId ?
                        <>
                            <IconButton
                                aria-controls="fade-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <PersonIcon />
                            </IconButton>
                        </> :
                        <Link to="/login">
                            <IconButton>
                                <PersonIcon />
                            </IconButton>
                        </Link>}
                    <Link to="/cart">
                        <IconButton>
                            <Badge badgeContent={totalCart} color="default">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Link>
                </Box>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                >
                    <StyledTab label="HOME" link='/' />
                    <StyledTab label="ELECTRONICS" link='/category/electronics' />
                    <StyledTab label="JEWELLERY" link='/category/jewelery' />
                    <StyledTab label="MENS" link="/category/men's%20clothing" />
                    <StyledTab label="WOMENS" link="/category/women's%20clothing" />
                </StyledTabs>
            </Box>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {userId ?
                    <>
                        <Link to="/user" style={{ textDecoration: 'none', color: 'rgb(80,80,80)' }}><MenuItem onClick={handleClose}>My Account</MenuItem></Link>
                        <Link to="/login" style={{ textDecoration: 'none', color: 'rgb(80,80,80)' }}><MenuItem onClick={handleCloseLogout}>Logout</MenuItem></Link></> :
                    ''}
            </Menu>
        </Container>
    );
}