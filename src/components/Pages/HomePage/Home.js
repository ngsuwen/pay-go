import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Carousel from './Carousel';
import Top from './TopSelling';

const TopSelling = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

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

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(13),
        marginRight: theme.spacing(1),
        color: 'rgb(169,169,169)',
        '&.Mui-selected': {
            color: 'rgb(80,80,80)',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <Box sx={{ marginBottom: 5 }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                centered
            >
                <StyledTab label="HOME" />
                <StyledTab label="ELECTRONICS" />
                <StyledTab label="JEWELRY" />
                <StyledTab label="MENS" />
                <StyledTab label="WOMENS" />
                <StyledTab label="SIGN IN" />
                <StyledTab label="CART" />
                <StyledTab label="SEARCH" />
            </StyledTabs>
        </Box>
        <Carousel/>
        <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center' }}>
        <TopSelling>{"New Products"}</TopSelling>
        </Box>
        <Top category="men's%20clothing"/>
        <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center' }}>
        <TopSelling>{"Top Selling"}</TopSelling>
        </Box>
        <Top category="men's%20clothing"/>
        </>
    );
}