import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getProducts } from "../redux/modules/products";
import SortTable from "../components/Tables/SortTable";
import TableCard from "../components/Cards/TableCard";

const useStyles = makeStyles((theme) => ({
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 5,
  },
}));

const columns = [
  { id: "createdAt", numeric: true, label: "제조일 (년월일)" },
  { id: "series", numeric: false, label: "품목명" },
  { id: "ph", numeric: true, label: "PH" },
  { id: "dox", numeric: true, label: "용존산소량" },
  { id: "temp", numeric: true, label: "온도" },
  { id: "brix", numeric: true, label: "당도" },
];

function TablesContainer() {
  const classes = useStyles();
  const { loading, error, data } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
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
        <TableCard title="제품 생산 히스토리">
          <SortTable rows={data} columns={columns} />
        </TableCard>
      )}
    </>
  );
}

export default TablesContainer;
