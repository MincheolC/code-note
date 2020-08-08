import React, { useState, useEffect } from 'react';
import { getTankData, getTanks } from '../apis/internal';

export default () => {
  const [tankDatas, setTankDatas] = useState([]);
  const [tanks, setTanks] = useState([]);

  useEffect(() => {
    retrieveTankDatas();
  }, [])

  const retrieveTankDatas = () => {
    setTankDatas(getTankData())
  }

  return (
    <div>{JSON.stringify(tankDatas)}</div>
  )
}