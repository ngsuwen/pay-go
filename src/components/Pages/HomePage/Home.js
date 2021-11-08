import React from 'react';
import { Box, styled } from '@mui/material';
import Carousel from './Carousel';
import Products from './HomeProducts';

const Heading = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

export default function Home() {

    return (
        <>
        <Carousel/>
        <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center' }}>
        <Heading>{"New Products"}</Heading>
        </Box>
        <Products category="men's%20clothing"/>
        <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center' }}>
        <Heading>{"Products Selling"}</Heading>
        </Box>
        <Products category="men's%20clothing"/>
        </>
    );
}