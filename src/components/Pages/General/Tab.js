import React from 'react';
import { styled, Tabs, Tab, Box } from '@mui/material';
import {Link} from 'react-router-dom';

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

const StyledTab = styled((props) => <Link style={{textDecoration:'none'}}to={`${props.link}`}><Tab disableRipple {...props} /></Link>)({
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

export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ marginBottom: 5 }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                centered
            >
                <StyledTab label="HOME" link='/'/>
                <StyledTab label="ELECTRONICS" link='/category/electronics' />
                <StyledTab label="JEWELLERY" link='/category/jewelery'/>
                <StyledTab label="MENS" link="/category/men's%20clothing"/>
                <StyledTab label="WOMENS" link="/category/women's%20clothing"/>
                <StyledTab label="SIGN IN" />
                <StyledTab label="CART" link="/cart"/>
                <StyledTab label="SEARCH" />
            </StyledTabs>
        </Box>
    );
}