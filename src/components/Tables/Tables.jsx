import React, { useState, useEffect } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

import { fetchDataProvinsi } from '../../api/index';

const Tables = () => {

  const [dataProv, setDataProv] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      setDataProv(await fetchDataProvinsi());
    }
    fetchingData();
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        
        <TableHead>
          <TableRow>
            <TableCell>Provinsi</TableCell>
            <TableCell align="right">Positif</TableCell>
            <TableCell align="right">Sembuh</TableCell>
            <TableCell align="right">Meninggal</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {dataProv.map((data) => (
            <TableRow key={data.attributes.Kode_Provi}>
              <TableCell component="th" scope="row">
                {data.attributes.Provinsi}
              </TableCell>
              <TableCell align="right">{data.attributes.Kasus_Posi}</TableCell>
              <TableCell align="right">{data.attributes.Kasus_Semb}</TableCell>
              <TableCell align="right">{data.attributes.Kasus_Meni}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default Tables;
