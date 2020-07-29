import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    maxBirx: null,
  });

  const handleKombuItem = (e) => {
    const { id, value, type } = e.target;
    setKombuItem({
      ...kombuItem,
      [id]: type === "text" ? value : Number(value),
    })
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="series"
          label="시리즈"
          variant="outlined"
          type="text"
          size="small"
          onChange={handleKombuItem}
        />
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
    </>
  )
}