import React, { useState } from 'react';
import AdvancedTable from '../../components/AdvancedTable';

function createData(series, minPh, maxPh, minTemp, maxTemp, minDo, maxDo, minBrix, maxBrix, other) {
  return { series, minPh, maxPh, minTemp, maxTemp, minDo, maxDo, minBrix, maxBrix, other };
}

export default () => {
  const columns = [
    { title: '품목명', field: 'series' },
    { title: '최저 PH', field: 'minPh', type: 'numeric' },
    { title: '최고 PH', field: 'maxPh', type: 'numeric' },
    { title: '최저 온도', field: 'minTemp', type: 'numeric' },
    { title: '최고 온도', field: 'maxTemp', type: 'numeric' },
    { title: '최저 DO', field: 'minDo', type: 'numeric' },
    { title: '최고 DO', field: 'maxDo', type: 'numeric' },
    { title: '최저 당도', field: 'minBrix', type: 'numeric' },
    { title: '최고 당도', field: 'maxBrix', type: 'numeric' },
    {},
  ];

  const [data, setData] = useState([createData('Original', 2.5, 3.6, 35, 36.5, 13.33, 13.37, 77, 79)]);

  return (
    <AdvancedTable columns={columns} data={data} setData={setData}/>
  )
}
