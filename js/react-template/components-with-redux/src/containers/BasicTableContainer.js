import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFoods } from "../redux/modules/foods";
import BasicTable from "../components/BasicTable";

const useStyles = makeStyles((theme) => ({
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 5,
  },
}));

const columns = [
  "Dessert (100g serving)",
  "Calories",
  "Fat (g)",
  "Carbs (g)",
  "Protein (g)",
];

function BasicTableContainer() {
  const classes = useStyles();
  const { loading, error, data } = useSelector((state) => state.foods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  if (error) return <div>Aysnc Error 발생</div>;
  return (
    <>
      {loading && (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
      {data && <BasicTable rows={data} columns={columns} />}
    </>
  );
}

export default BasicTableContainer;
