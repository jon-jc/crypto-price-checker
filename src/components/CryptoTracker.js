// src/components/CryptoTracker.js

import React, { useState, useEffect } from 'react';
import { getCryptoPrice } from '../services/cryptoService';
import { TextField, Typography, Container, Box } from '@mui/material';

const CryptoTracker = () => {
  const [crypto, setCrypto] = useState('bitcoin');
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoPrice(crypto, 'usd');
      setPrice(data[crypto]?.usd);
    };

    fetchData();
  }, [crypto]);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" marginTop={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Crypto Tracker
        </Typography>
        <TextField
          label="Cryptocurrency ID"
          variant="outlined"
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)}
          helperText="e.g., bitcoin, ethereum"
          margin="normal"
        />
        <Typography variant="h6" component="h2" marginTop={2}>
          {price ? `USD ${price}` : 'Loading...'}
        </Typography>
      </Box>
    </Container>
  );
};

export default CryptoTracker;
