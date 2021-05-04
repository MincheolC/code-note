import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import locale from "../../locale/ko_KR.json";

const TANK = locale.TANK;

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    alignItems: "flex-start",
    "& .MuiTextField-root": {
      margin: 8,
      width: 130,
    },
    "& .MuiButton-root": {
      margin: 8,
      width: 130,
    },
  },
  equal: {
    paddingTop: 5,
    paddingLeft: 10,
  },
}));

const schema = Yup.object().shape({
  name: Yup.string().max(50, "Too Long!").required("필수 항목"),
  phLowOp: Yup.number()
    .typeError("필수 항목")
    .min(0, "0 ~ 10")
    .max(10, "0 ~ 10")
    .required("필수 항목"),
  phHighOp: Yup.number().typeError("필수 항목").min(0).max(10),
  email: Yup.string().email("잘못된 이메일"),
  phone: Yup.string()
    .min(8, "짧아요")
    .max(11, "길어요")
    .when("email", {
      is: (email) => !email || email.length === 0,
      then: Yup.string().required("전화번호 또는 이메일 필수로 입력"),
    }),
});

function BForm(props) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        name: "",
        phLowOp: null,
        phHighOp: null,
        email: "",
        phone: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        handleChange,
        submitForm,
        isSubmitting,
        values,
        touched,
        errors,
      }) => {
        console.log(errors);
        return (
          <Form>
            <Box className={classes.box} margin={1}>
              <TextField
                type="text"
                label="탱크명"
                name="name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={
                  touched.name && Boolean(errors.name) ? errors.name : ""
                }
              />
              <TextField
                type="email"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={
                  touched.email && Boolean(errors.email) ? errors.email : ""
                }
              />
              <TextField
                type="text"
                label="전화번호"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={
                  touched.phone && Boolean(errors.phone) ? errors.phone : ""
                }
              />
              <TextField
                required
                name="phLowOp"
                label={TANK.PH_LOW}
                type="number"
                onChange={handleChange}
                error={touched.phLowOp && Boolean(errors.phLowOp)}
                helperText={
                  touched.phLowOp && Boolean(errors.phLowOp)
                    ? errors.phLowOp
                    : ""
                }
              />
              <TextField
                required
                name="phHighOp"
                label={TANK.PH_HIGH}
                type="number"
                onChange={handleChange}
                error={touched.phHighOp && Boolean(errors.phHighOp)}
                helperText={
                  touched.phHighOp && Boolean(errors.phHighOp)
                    ? errors.phHighOp
                    : ""
                }
              />
            </Box>
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
        );
      }}
    </Formik>
  );
}

export default BForm;
