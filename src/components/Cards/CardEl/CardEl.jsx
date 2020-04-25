import React from 'react';
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import cN from 'classnames';

import styles from './CardEl.module.css';

const CardEl = ({data, title, remark}) => {
  
  let addClass = null;

  if (title === 'Positif') addClass = `${styles.infected}`
  else if (title === 'Sembuh') addClass = `${styles.recovered}`
  else if (title === 'Meninggal') addClass = `${styles.deaths}`

  return (
    <Grid item component={Card} xs={12} md={3} className={cN(styles.card, addClass)}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h1>
          {data}
        </h1>
        <Typography variant="body2">
          {remark}
        </Typography>
      </CardContent>
    </Grid>
  )
}

export default CardEl;
