import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  View,
} from 'bizcharts';
import DataSet from '@antv/data-set';

class Temperature extends React.PureComponent {
  render() {
    const data = [
      {
        date: '2020-08-01',
        min: 6756,
        actual: 7819,
        max: 9284,
      },
      {
        date: '2020-08-02',
        min: 5584,
        actual: 6554,
        max: 8016,
      },
      {
        date: '2020-08-03',
        min: 5419,
        actual: 6332,
        max: 7754,
      },
      {
        date: '2020-08-04',
        min: 4414,
        actual: 5191,
        max: 6491,
      },
      {
        date: '2020-08-05',
        min: 5134,
        actual: 6069,
        max: 7501,
      },
      {
        date: '2020-08-06',
        min: 5508,
        actual: 6879,
        max: 9221,
      },
      {
        date: '2020-08-07',
        min: 3019,
        actual: 4119,
        max: 5656,
      },
      {
        date: '2020-08-08',
        min: 3386,
        actual: 4473,
        max: 5915,
      },
      {
        date: '2020-08-09',
        min: 3202,
        actual: 4233,
        max: 5559,
      },
      {
        date: '2020-08-10',
        min: 3195,
        actual: 4304,
        max: 5482,
      },
      {
        date: '2020-08-11',
        min: 3929,
        actual: 5326,
        max: 7077,
      },
      {
        date: '2020-08-12',
        min: 3662,
        actual: 4849,
        max: 6194,
      },
      {
        date: '2020-08-13',
        min: 3075,
        actual: 4068,
        max: 5259,
      },
      {
        date: '2020-08-14',
        min: 3891,
        actual: 5262,
        max: 6924,
      },
    ];

    const dv = new DataSet.View()
      .source(data)
      .transform({
        type: 'map',
        callback: (row) => {
          row['min - max'] = [row.min / 1000, row.max / 1000];
          row.Median = row.actual / 1000;
          return row;
        },
      })
      .transform({
        type: 'fold',
        fields: ['min - max'],
        key: 'grade',
        value: 'times',
      });

    const view1Scale = {
      date: {
        type: 'time',
        ticks: data.map(({ date }) => date),
      },
      times: {
        min: 0,
        max: 18,
        nice: false,
        alias: 'Time(s)',
        tickInterval: 2,
      },
      Median: {
        min: 0,
        max: 18,
        nice: false,
      },
    };

    return (
      <Chart padding='auto' height={400} autoFit>
        <Tooltip crosshairs />
        <Axis name="Median" visible={false} />
        <Axis name="date" title={null} tickLine={false} />

        <Axis
          name="times"
          title={{
            fill: '#000',
          }}
          line={{
            stroke: '#000',
          }}
          tickLine={false}
          grid={{
            line: {
              stroke: '#d9d9d9',
              lineDash: [0, 0],
            },
          }}
        />
        <Tooltip crosshairs />
        <View data={dv.rows} scale={view1Scale}>
          <Axis />
          <Axis name="Median" visible={false} />
          <Geom
            type="area"
            position="date*times"
            color={['grade', ['#d8d8ff', '#6060ff']]}
            shape="smooth"
            opacity={0.8}
          />
          <Geom type="line" position="date*Median" color="#000" shape="smooth" size={2} />
        </View>
        <Legend name="type" visible={false} />
      </Chart>
    );
  }
}

export default Temperature;