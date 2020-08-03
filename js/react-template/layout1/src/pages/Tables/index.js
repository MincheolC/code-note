import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Table from '../../components/Table';
import AdvancedTable from '../../components/AdvancedTable';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWarp: 'wrap',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function createData(name, ph, temp, doxy, brix) {
  return { name, ph, temp, doxy, brix };
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Series' },
  { id: 'ph', numeric: true, disablePadding: false, label: 'PH' },
  { id: 'temp', numeric: true, disablePadding: false, label: '온도' },
  { id: 'doxy', numeric: true, disablePadding: false, label: 'DO' },
  { id: 'brix', numeric: true, disablePadding: false, label: '당도' },
];

const rows = [
  createData('Original', 2.5, 36.5, 13.33, 79),
  createData('Lemon', 2.5, 36.5, 13.33, 79),
  createData('Black Current', 2.5, 36.5, 13.33, 79),
];

function createAdvancedData(series, minPh, maxPh, minTemp, maxTemp, minDo, maxDo, minBrix, maxBrix, other) {
  return { series, minPh, maxPh, minTemp, maxTemp, minDo, maxDo, minBrix, maxBrix, other };
}

const columns = [
  { title: 'Series', field: 'series' },
  { title: '최저 PH', field: 'minPh', type: 'numeric' },
  { title: '최고 PH', field: 'maxPh', type: 'numeric' },
  { title: '최저 온도', field: 'minTemp', type: 'numeric' },
  { title: '최고 온도', field: 'maxTemp', type: 'numeric' },
  { title: '최저 DO', field: 'minDo', type: 'numeric' },
  { title: '최고 DO', field: 'maxDo', type: 'numeric' },
  { title: '최저 당도', field: 'minBrix', type: 'numeric' },
  { title: '최고 당도', field: 'maxBrix', type: 'numeric' },
  {},
];
const data = [
  createAdvancedData('Original', 2.5, 3.6, 35, 36.5, 13.33, 13.37, 77, 79),
  createAdvancedData('Lemon', 2.5, 3.6, 35, 36.5, 13.33, 13.37, 77, 79),
  createAdvancedData('Black Current', 2.5, 3.6, 35, 36.5, 13.33, 13.37, 77, 79),
];

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" noWrap>
        Material UI Table
      </Typography>
      <Table headCells={headCells} rows={rows}/>
      <Divider />
      <Typography variant="h5" noWrap>
        Material Table
      </Typography>
      <AdvancedTable columns={columns} data={data}/>
    </div>
  )
}