import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import Table from '../../components/Table';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWarp: 'wrap',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
      width: 400
    },
  },
  rangeWrapper: {
    display: 'flex',
    flexWarp: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    '& > h6': {
      minWidth: 50,
    }
  }
}));

function createData(name, minPh, maxPh, minTemp, maxTemp, minDo, maxDo, minBrix, maxBrix) {
  return { name, minPh, maxPh, minTemp, maxTemp, minDo, maxDo, minBrix, maxBrix };
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Series' },
  { id: 'minPh', numeric: true, disablePadding: false, label: '최저 PH' },
  { id: 'maxPh', numeric: true, disablePadding: false, label: '최고 PH' },
  { id: 'minTemp', numeric: true, disablePadding: false, label: '최저 온도' },
  { id: 'maxTemp', numeric: true, disablePadding: false, label: '최고 온도' },
  { id: 'minDo', numeric: true, disablePadding: false, label: '최저 DO' },
  { id: 'maxDo', numeric: true, disablePadding: false, label: '최고 DO' },
  { id: 'minBrix', numeric: true, disablePadding: false, label: '최저 당도' },
  { id: 'maxBrix', numeric: true, disablePadding: false, label: '최고 당도' },
];

const rows = [
  createData('Original', 2.5, 3.6, 35, 36.5, 13.33, 13.37, 77, 79),
  createData('Lemon', 2.5, 3.6, 35, 36.5, 13.33, 13.37, 77, 79),
  createData('Black Current', 2.5, 3.6, 35, 36.5, 13.33, 13.37, 77, 79),
];

function createTestData(name, ph, temp, doxy, brix) {
  return { name, ph, temp, doxy, brix };
}

const testHeadCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Series' },
  { id: 'ph', numeric: true, disablePadding: false, label: 'PH' },
  { id: 'temp', numeric: true, disablePadding: false, label: '온도' },
  { id: 'doxy', numeric: true, disablePadding: false, label: 'DO' },
  { id: 'brix', numeric: true, disablePadding: false, label: '당도' },
];

const testRows = [
  createTestData('Original', 2.5, 36.5, 13.33, 79),
  createTestData('Lemon', 2.5, 36.5, 13.33, 79),
  createTestData('Black Current', 2.5, 36.5, 13.33, 79),
];

export default () => {
  const classes = useStyles();

  const [kombuItems, setKombuItems] = useState(new Map());
  const [kombuItem, setKombuItem] = useState({
    series: '',
    minPh: null,
    maxPh: null,
    minTemp: null,
    maxTemp: null,
    minDo: null,
    maxDo: null,
    minBrix: null,
    maxBrix: null,
  });

  const handleKombuItem = (e) => {
    const { id, value, type } = e.target;
    setKombuItem({
      ...kombuItem,
      [id]: type === "text" ? value : Number(value),
    })
  }
  const handleClick = () => setKombuItems(kombuItems.set(kombuItem.series, kombuItem));

  return (
    <>
    <div className={classes.root}>
      <form noValidate autoComplete="off">
        <div className={classes.rangeWrapper}>
          <Typography variant="h6">
            이름
          </Typography>
          <TextField
            id="series"
            label="시리즈"
            variant="outlined"
            type="text"
            size="small"
            onChange={handleKombuItem}
            fullWidth
          />
        </div>
        <div className={classes.rangeWrapper}>
          <Typography variant="h6">
            PH
          </Typography>
          <TextField
            id="minPh"
            label="최저"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleKombuItem}
          />
          <Typography variant="h6">
            ~
          </Typography>
          <TextField
            id="maxPh"
            label="최고"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleKombuItem}
          />
        </div>
        <div className={classes.rangeWrapper}>
          <Typography variant="h6">
            온도
          </Typography>
          <TextField
            id="minTemp"
            label="최저"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleKombuItem}
          />
          <Typography variant="h6">
            ~
          </Typography>
          <TextField
            id="maxTemp"
            label="최고"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleKombuItem}
          />
        </div>
        <div className={classes.rangeWrapper}>
          <Typography variant="h6">
            DO
          </Typography>
          <TextField
            id="minDo"
            label="최저"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleKombuItem}
          />
          <Typography variant="h6">
            ~
          </Typography>
          <TextField
            id="maxDo"
            label="최고"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleKombuItem}
          />
        </div>
        <div className={classes.rangeWrapper}>
          <Typography variant="h6">
            당도
          </Typography>
          <TextField
            id="minBrix"
            label="최저"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleKombuItem}
          />
          <Typography variant="h6">
            ~
          </Typography>
          <TextField
            id="maxBrix"
            label="최고"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleKombuItem}
          />
        </div>
      </form>
      <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleClick}>
        저장
      </Button>
    </div>
    <div>
      <Table headCells={headCells} rows={rows}/>
    </div>
    <div>
      <Table headCells={testHeadCells} rows={testRows}/>
    </div>
    </>
  )
}