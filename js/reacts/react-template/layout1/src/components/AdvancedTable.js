import React, { forwardRef } from 'react';
import {
  Edit, Delete, Search, FirstPage, LastPage, AddBox, Check, Clear, ChevronRight, SaveAlt,
  FilterList, ChevronLeft, ArrowUpward, Remove, ViewColumn,
} from '@material-ui/icons';
import MaterialTable from 'material-table';

export default function AdvancedTable(props) {
  const { columns, data, setData, title, pageSize } = props;
  const [state, setState] = React.useState({columns, data});

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} color='primary' ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  return (
    <MaterialTable
      icons={tableIcons}
      title={title || "Editable Example"}
      columns={columns}
      data={state.data}
      // data={data}
      localization={{
        header: {
          actions: '수정 | 삭제'
        },
        body: {
          editRow: {
            deleteText: '정말 삭제하시겠습니까?'
          }
        }
      }}
      options={{
        pageSize: pageSize || 5,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                setData(data)
                return { ...prevState, data };
              });
              // setData(() => [...data, newData]);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  console.log(prevState.data, newData);
                  console.log('updated', data)
                  setData(data)
                  return { ...prevState, data };
                });
                // setData((() => {
                //   const nData = [...data];
                //   nData[nData.indexOf(oldData)] = newData;
                //   return nData;
                // })());
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                setData(data)
                return { ...prevState, data };
              });
              // setData((() => {
              //   const nData = [...data];
              //   nData.splice(nData.indexOf(oldData), 1);
              //   return nData;
              // })());
            }, 600);
          }),
      }}
    />
  );
}