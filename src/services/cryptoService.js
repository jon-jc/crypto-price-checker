// src/services/cryptoService.js

import axios from 'axios';

const baseUrl = 'https://api.coingecko.com/api/v3';

export const getCryptoDetails = async (vsCurrency, order, perPage, page) => {
  try {
    const response = await axios.get(`${baseUrl}/coins/markets`, {
      params: {
        vs_currency: vsCurrency,
        order: order,
        per_page: perPage,
        page: page,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto details:', error);
    return [];
  }
};

