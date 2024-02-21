// src/components/HomePage.js

import React, { useState, useEffect } from 'react';
import { getCryptoDetails } from '../services/cryptoService';
import { TextField, Typography, Container, Box, Paper, Grid } from '@mui/material';

const HomePage = () => {
  const [usdAmount, setUsdAmount] = useState('100');
  const [cryptoDetails, setCryptoDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getCryptoDetails('usd', 'market_cap_desc', 20, 1);
      setCryptoDetails(data);
    };

    fetchDetails();
  }, []);

  // Inside HomePage.js component

  return (
  <Container maxWidth="md">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Cryptocurrency Tracker
      </Typography>
      <TextField
        fullWidth
        label="Amount in USD"
        type="number"
        variant="outlined"
        value={usdAmount}
        onChange={(e) => setUsdAmount(e.target.value)}
        margin="normal"
        onFocus={(e) => e.target.value === '100' && setUsdAmount('')}
        onBlur={(e) => e.target.value === '' && setUsdAmount('100')}
      />
      <Grid container spacing={2}>
        {cryptoDetails.map((crypto) => {
          // Calculate the amount of cryptocurrency based on the USD amount entered by the user
          // Assuming crypto.current_price is the price of the crypto in USD for 1 unit of the crypto
          const amountOfCrypto = usdAmount / crypto.current_price;

          return (
            <Grid item xs={12} sm={6} md={4} key={crypto.id}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6">{crypto.name} ({crypto.symbol.toUpperCase()})</Typography>
                <Typography variant="body2">Price: ${crypto.current_price}</Typography>
                <Typography variant="body2">You can buy: {amountOfCrypto.toFixed(6)} {crypto.symbol.toUpperCase()}</Typography>
                <Typography variant="body2">Market Cap: ${crypto.market_cap}</Typography>
                <Typography variant="body2">24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%</Typography>
                <Typography variant="body2">Volume: ${crypto.total_volume}</Typography>
                <Typography variant="body2">Circulating Supply: {crypto.circulating_supply}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  </Container>
  
);
      }

export default HomePage;


