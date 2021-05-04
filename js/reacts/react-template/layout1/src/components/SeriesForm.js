import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

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

export default (props) => {
  const { save, closeModal  } = props;
  const classes = useStyles();

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
      <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={() => {
        save(kombuItem)
        if (closeModal) closeModal()
      }}>
        저장
      </Button>
    </div>
    </>
  )
}