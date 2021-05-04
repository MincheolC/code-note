import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import MultipleSelect from '../../components/Selects/MultipleSelect';
import HistoryChart from '../../components/Graphs/HistoryChart';
import HistoryChart2 from '../../components/Graphs/HistoryChart2';
import { getData, filterData } from './fakeHistoryData';
import { getBatchDatas } from '../../redux/modules/batchDatas';

function formatData(data, key) {
  return data.map((e) =>
    e.map((e, index) => ({
      x: index,
      y: e[key],
    }))
  );
}

const items = ['1', '2', '3', '4'];

function HistoryChartContainer() {
  const [rawBatchData, setRawBatchData] = useState();
  const [data, setData] = useState();
  const [selectedBatchs, setSelectedBatchs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatchDatas());
  }, [dispatch]);

  const handleSelectedBatchs = (e) => {
    const { value } = e.target;
    setSelectedBatchs(value);
    const batchData = [];
    value.map((v) =>
      batchData.push(getData(1600905600, 1601262000, parseInt(v)))
    );
    setRawBatchData(batchData);
    setData();
  };

  const handleData = (unit) => {
    if (!rawBatchData) return;
    switch (unit) {
      case 'hour':
        setData(rawBatchData.map((e) => filterData(e, 'hour')));
        break;
      case 'day':
        setData(rawBatchData.map((e) => filterData(e, 'day')));
        break;
      default:
        setData(rawBatchData);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MultipleSelect
          onChange={handleSelectedBatchs}
          values={selectedBatchs}
          items={items}
          label='Batch 선택'
        />
      </Grid>
      <Grid item xs={12}>
        <button onClick={() => handleData()}>15분</button>
        <button onClick={() => handleData('hour')}>60분</button>
        <button onClick={() => handleData('day')}>일</button>
      </Grid>
      <Grid item xs={12}>
        {data && <HistoryChart datas={formatData(data, 'ph')} />}
      </Grid>
      <Grid item xs={12}>
        {data && <HistoryChart2 datas={formatData(data, 'dox')} />}
      </Grid>
    </Grid>
  );
}

export default HistoryChartContainer;
