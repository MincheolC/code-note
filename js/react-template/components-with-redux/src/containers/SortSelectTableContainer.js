import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFoods } from "../redux/modules/foods";
import SortSelectTable from "../components/SortSelectTable";

const useStyles = makeStyles((theme) => ({
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 5,
  },
}));

const columns = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
  { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
  { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" },
];

function SortSelectTableContainer() {
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
      {data && (
        <SortSelectTable
          rows={data}
          columns={columns}
          title="Sort & Select Table"
        />
      )}
    </>
  );
}

export default SortSelectTableContainer;
