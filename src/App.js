import React, { useState, useEffect } from 'react';

import styles from './App.module.css';

import { fetchData } from './api/index'; 
import Header from './components/Header/Header';
import Card from './components/Cards/Cards';
import Tables from './components/Tables/Tables';

function App() {

  const [ data, setData ] = useState({})

  useEffect(() => {
    const fetchingData = async () => {
      setData(await fetchData());
    }
    fetchingData();
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <Card dataApi={data} />
      <Tables />
    </div>
  );
}

export default App;
