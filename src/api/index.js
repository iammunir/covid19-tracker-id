import axios from 'axios';

const url = 'https://api.kawalcorona.com/indonesia/';

export const fetchData = async () => {
  const { data } = await axios.get(url);
  return data[0];
}

export const fetchDataProvinsi = async () => {
  const { data } = await axios.get(`${url}provinsi/`);
  return data;
}
