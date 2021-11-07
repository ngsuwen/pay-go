import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function Footer() {
    return (
        <AppBar sx={{bgcolor: '#e0e0e0'}} position="static">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="subtitle2" color="#757575">
                © 2021 GA Suwen
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}