import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Input, Select, Divider, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;

class Compose extends React.Component {
  state = {
    workoutNames: [{
      id: '1',
      name: '2분할',
      selected: false,
      workoutRoutineNames: [{
        id: '1',
        name: '상체',
        selected: false,
      }, {
        id: '2',
        name: '하체',
        selected: false,
      }],
    }, {
      id: '2',
      name: '3분할',
      selected: false,
      workoutRoutineNames: [],
    }],
    newWorkoutName: '',
    newWorkoutRoutineNames: '',
  };

  onSelectedWorkoutName = id => {
    const { workoutNames } = this.state;
    this.setState({
      workoutNames: workoutNames.map(workoutName => ({
        ...workoutName,
        selected: workoutName.id === id,
      }))
    })
  }

  onWorkoutNameChange = event => {
    this.setState({
      newWorkoutName: event.target.value,
    });
  };

  addWorkoutName = () => {
    const { workoutNames, newWorkoutName } = this.state;
    this.setState({
      workoutNames: [
        ...workoutNames,
        {
          id: workoutNames.length ? workoutNames[workoutNames.length - 1].id + 1 : 0,
          name: newWorkoutName,
          selected: true,
        },
      ],
      newWorkoutName: '',
    });
  };

  onSelectedWorkoutRoutineName = id => {
    const { workoutNames } = this.state;

    this.setState({
      workoutNames: workoutNames.map((workoutName) => {
        if (!workoutName.selected) return workoutName;
        const { workoutRoutineNames } = workoutName;
        return {
          ...workoutName,
          workoutRoutineNames: workoutRoutineNames.map(workoutRoutineName => ({
            ...workoutRoutineName,
            selected: workoutRoutineName.id === id,
          }))
        };
      }),
    });
  }

  onWorkoutRoutineNameChange = event => {
    this.setState({
      newWorkoutRoutineNames: event.target.value,
    });
  };

  addWorkoutRoutineName = () => {
    const { workoutNames, newWorkoutRoutineNames } = this.state;

    this.setState({
      workoutNames: workoutNames.map((workoutName) => {
        if (!workoutName.selected) return workoutName;
        const { workoutRoutineNames } = workoutName;
        return {
          ...workoutName,
          workoutRoutineNames: [
            ...workoutRoutineNames,
            {
              id: workoutRoutineNames.length ? workoutRoutineNames[workoutRoutineNames.length - 1].id + 1 : 1,
              name: newWorkoutRoutineNames,
              selected: true,
            }
          ],
        };
      }),
      newWorkoutRoutineNames: '',
    });
  };

  render() {
    const { workoutNames, newWorkoutName, newWorkoutRoutineNames } = this.state;
    const { workoutRoutineNames=[] }  = workoutNames.filter(({ selected }) => selected).pop() || {};

    return (
      <PageContainer>
        <Card>
          <Text>운동 이름</Text>
          <Select
            style={{ marginTop: '4px', width: '100%' }}
            placeholder="운동 이름"
            onChange={this.onSelectedWorkoutName}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                  <Input style={{ flex: 'auto' }} value={newWorkoutName} onChange={this.onWorkoutNameChange} />
                  <a
                    style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                    onClick={this.addWorkoutName}
                  >
                    <PlusOutlined /> 추가
                  </a>
                </div>
              </div>
            )}
          >
            {workoutNames.map(({ id, name }) => (
              <Option key={id}>{name}</Option>
            ))}
          </Select>
          <Text>운동 루틴</Text>
          <Select
            style={{ marginTop: '4px', width: '100%' }}
            placeholder="운동 루틴"
            onChange={this.onSelectedWorkoutRoutineName}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                  <Input style={{ flex: 'auto' }} value={newWorkoutRoutineNames} onChange={this.onWorkoutRoutineNameChange} />
                  <a
                    style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                    onClick={this.addWorkoutRoutineName}
                  >
                    <PlusOutlined /> 추가
                  </a>
                </div>
              </div>
            )}
          >
            {workoutRoutineNames.map(({ id, name }) => (
              <Option key={id}>{name}</Option>
            ))}
          </Select>
        </Card>
      </PageContainer>
    );
  }
}

export default Compose;
