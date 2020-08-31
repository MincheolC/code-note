import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFoods, updateFood, removeFood } from "../redux/modules/foods";
import EditableTable from "../components/EditableTable";

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

function EditableTableContainer() {
  const classes = useStyles();
  const { loading, error, data } = useSelector((state) => state.foods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  const onUpdate = (data) => {
    dispatch(updateFood(data));
  };

  const onRemove = (id) => {
    dispatch(removeFood(id));
  };

  if (error) return <div>Aysnc Error 발생</div>;
  return (
    <>
      {loading && (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
      {data && (
        <EditableTable
          title="Sort & Select Table"
          rows={data}
          columns={columns}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      )}
    </>
  );
}

export default EditableTableContainer;
