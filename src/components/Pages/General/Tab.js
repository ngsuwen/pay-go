import React from 'react';
import { styled, Tabs, Tab, Box, Container, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='lg'>
            <Box sx={{ marginBottom: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <Link to="/cart">
                        <IconButton>
                            <Badge badgeContent={cart.length} color="default">
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
        </Container>
    );
}