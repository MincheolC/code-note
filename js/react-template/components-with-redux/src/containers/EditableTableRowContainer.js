import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditableTableRow from "../components/EditableTableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {
  getUsers,
  updateUser,
  removeUser,
  createUser,
} from "../redux/modules/users";

function EditableTableRowContainer() {
  const { loading, error, data } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const onUpdate = (data) => {
    dispatch(updateUser(data));
  };

  const onRemove = (id) => {
    dispatch(removeUser(id));
  };

  const onCreate = () => {
    const newUser = {
      id: data[data.length - 1].id + 1,
      name: "",
      age: 0,
      phone: "",
      email: "",
    };
    dispatch(createUser(newUser));
  };

  if (error) return <div>Aysnc Error 발생</div>;
  return (
    <>
      <IconButton onClick={onCreate}>
        <AddBoxIcon />
      </IconButton>
      {data && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <EditableTableRow
                  key={row.id}
                  row={row}
                  onUpdate={onUpdate}
                  onRemove={onRemove}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default EditableTableRowContainer;
