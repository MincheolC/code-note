import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";

function CTableCell(props) {
  const { isModifying, type, id, value, error, onChange } = props;

  return (
    <TableCell padding="none">
      {isModifying ? (
        <TextField
          error={error ? true : false}
          helperText={error}
          id={id}
          value={value}
          onChange={onChange}
          color="primary"
          type={type}
          style={{ padding: 5, maxWidth: 300 }}
        />
      ) : (
        <Typography variant="body2">{value}</Typography>
      )}
    </TableCell>
  );
}

function EditableTableRow(props) {
  const { row, columns, onUpdate, onRemove, validator } = props;
  const [state, setState] = useState({
    isModifying: false,
    rowData: { ...row },
  });
  const [rowErrors, setRowErrors] = useState({});

  const onChange = (e) => {
    const { id, type, value } = e.target;
    const v = type === "number" ? Number(value) : value;
    const errors = validator({ ...state.rowData, [id]: v });

    setState((prev) => ({
      ...prev,
      rowData: { ...prev.rowData, [id]: v },
    }));
    setRowErrors({ ...errors });
  };

  const handleUpdate = () => {
    if (Object.keys(rowErrors).length === 0) {
      onUpdate(state.rowData);
      setState({ ...state, isModifying: false });
    }
  };

  const getType = (key) => columns.find((e) => e.id === key).type;

  return (
    <TableRow key={row.id}>
      <TableCell padding="none">
        {state.isModifying ? (
          <>
            <Tooltip title="저장">
              <IconButton onClick={handleUpdate}>
                <DoneIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="취소">
              <IconButton
                onClick={() =>
                  setState({
                    ...state,
                    rowData: { ...row },
                    isModifying: false,
                  })
                }
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="수정">
              <IconButton
                onClick={() => setState({ ...state, isModifying: true })}
              >
                <CreateIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="삭제">
              <IconButton onClick={() => onRemove(row.id)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </TableCell>
      {columns.map(({ id }, index) => (
        <CTableCell
          isModifying={state.isModifying}
          id={id}
          key={index}
          value={state.rowData[id]}
          error={rowErrors[id]}
          onChange={onChange}
          color="primary"
          type={getType(id)}
        />
      ))}
    </TableRow>
  );
}

export default EditableTableRow;
