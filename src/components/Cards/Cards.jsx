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
          data={dataApi.positif} 
          title="Positif" 
          remark="Jumlah pasien terinfeksi"
           />
        <CardEl 
          data={dataApi.sembuh} 
          title="Sembuh" 
          remark="Jumlah pasien sembuh"
          />
        <CardEl 
          data={dataApi.meninggal} 
          title="Meninggal" 
          remark="Jumlah pasien meninggal"
          />
      </Grid>
    </div>
  )
}

export default Cards;
