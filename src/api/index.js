import axios from 'axios';

const url = 'https://api.kawalcorona.com/';

export const fetchData = async () => {
  const { data } = await axios.get(url);
  const dataIndonesia = data.filter(country => country.attributes['Country_Region'] === 'Indonesia');
  return dataIndonesia[0];
}

export const fetchDataProvinsi = async () => {
  const { data } = await axios.get(`${url}indonesia/provinsi/`);
  return data;
}


