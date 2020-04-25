import React from 'react';
import {Grid} from '@material-ui/core';

import styles from './Cards.module.css';
import CardEl from './CardEl/CardEl';

const Cards = ({dataApi}) => {

  if(!dataApi) {
    return 'Load Data...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardEl 
          data={dataApi.Confirmed} 
          title="Positif" 
          remark="Jumlah pasien terinfeksi"
           />
        <CardEl 
          data={dataApi.Recovered} 
          title="Sembuh" 
          remark="Jumlah pasien sembuh"
          />
        <CardEl 
          data={dataApi.Deaths} 
          title="Meninggal" 
          remark="Jumlah pasien meninggal"
          />
        <CardEl 
          data={dataApi.Active} 
          title="Dirawat" 
          remark="Jumlah pasien sedang dirawat"
          />
      </Grid>
    </div>
  )
}

export default Cards;
