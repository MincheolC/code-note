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

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const createData = () => {
  const data = [];
  for(let i=1; i<=14; i+=1) {
    const actual = randomIntFromInterval(4000, 7000);
    data.push({
      date: `2020-08-${i}`,
      min: randomIntFromInterval(2000, actual),
      actual,
      max: randomIntFromInterval(actual, 8000),
    });
  }
  return data;
}

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: createData(),
    };
    setInterval(() => this.randomize(), 5000);
  }

  randomize() {
    const data = createData();
    this.setState({
      data,
    });
  }

  render() {
    const dv = new DataSet.View()
      .source(this.state.data)
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
        ticks: this.state.data.map(({ date }) => date),
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