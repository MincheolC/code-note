import React, { useState } from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import locale from "../../locale/ko_KR.json";

const TANK = locale.TANK;

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 120,
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
      width: 120,
    },
  },
  equal: {
    paddingTop: 5,
    paddingLeft: 10,
  },
}));

function AForm(props) {
  const teaNames = ["original", "lemon", "plain"];
  const classes = useStyles();
  const [equal, setEqual] = useState(true);
  return (
    <Formik
      initialValues={{
        tankName: "",
        teaName: "original",
        phLowOp: null,
        phHighOp: null,
        tempLowOp: null,
        tempHighOp: null,
        doLowOp: null,
        doHighOp: null,
        brixLowOp: null,
        brixHighOp: null,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ handleChange, submitForm, isSubmitting, values, errors }) => (
        <Form>
          <Box className={classes.box} margin={1}>
            <TextField
              type="text"
              label="탱크명"
              name="tankName"
              value={values.tankName}
              onChange={handleChange}
            />
            <TextField
              select
              name="teaName"
              label="품목명"
              onChange={handleChange}
              variant="standard"
              value={values.teaName}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: 120 }}
            >
              {teaNames.map((teaName) => (
                <MenuItem key={teaName} value={teaName}>
                  {teaName}
                </MenuItem>
              ))}
            </TextField>
            <FormControlLabel
              className={classes.equal}
              control={
                <Checkbox
                  checked={equal}
                  onChange={() => setEqual(!equal)}
                  name="equal"
                />
              }
              label="품목과 동일"
            />
          </Box>
          {!equal && (
            <Box className={classes.box} margin={1}>
              <TextField
                required
                margin="dense"
                name="phLowOp"
                label={TANK.PH_LOW}
                type="number"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                name="phHighOp"
                label={TANK.PH_HIGH}
                type="number"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                name="tempLowOp"
                label={TANK.TEMP_LOW}
                type="number"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                name="tempHighOp"
                label={TANK.TEMP_HIGH}
                type="number"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                name="doLowOp"
                label={TANK.DO_LOW}
                type="number"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                name="doHighOp"
                label={TANK.DO_HIGH}
                type="number"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                name="brixLowOp"
                label={TANK.BRIX_LOW}
                type="number"
                onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                name="brixHighOp"
                label={TANK.BRIX_HIGH}
                type="number"
                onChange={handleChange}
              />
            </Box>
          )}
          <Box className={classes.box} margin={1}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              저장
            </Button>
            <Button variant="contained" color="secondary">
              취소
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default AForm;
