import axios from 'axios';

axios.defaults.baseURL = 'https://backendtest-fxbq.onrender.com/api';

//!                  Get  All  mcDonnyProducts
export const getMcDonnyProducts = async () => {
  try {
    const { data } = await axios.get(`/mcDonnyProducts`);
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

//!                  Get   mcDonnyProduct  by ID

export const getMcDonnyProductsById = async id => {
  try {
    const { data } = await axios.get(`/mcDonnyProducts/${id}`);

    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

//!                  Get  All  cfkProducts
export const getCfkProducts = async () => {
  try {
    const { data } = await axios.get(`/cfkProducts`);

    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

//!                  Get   cfkProducts  by ID
export const getCfkProductsById = async id => {
  try {
    const { data } = await axios.get(`/cfkProducts/${id}`);

    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

//!                  Get  All  etcProducts
export const getEtcProducts = async () => {
  try {
    const { data } = await axios.get(`/etcProducts`);

    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

//!                  Get   etcProducts  by ID
export const getEtcProductsById = async id => {
  try {
    const { data } = await axios.get(`/etcProducts/${id}`);

    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};
