// https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
// https://github.com/evedes/variations-in-set-state/blob/master/src/Home.js

import React from 'react';

let makeUpdater = apply => key => state => ({
  [key]: apply(state[key]),
})

const toggleKey = makeUpdater(previous => !previous)
const incrementCounter = makeUpdater(previous => previous + 1)

class SetStateEx extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    counter: 0,
    isValid: false,
  }

  logFields = () => {
    const { firstName, lastName } = this.state;
    console.log('Full name: ', `${firstName} ${lastName}`);
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    }, () => this.logFields());
    this.handleCounter();
  }

  handleCounter = () => {
    this.setState(incrementCounter('counter'))
  }

  handleIsValid = () => {
    this.setState(toggleKey('isValid'));
    this.handleCounter();
  }

  render() {
    return (
      <div className="container">
        <h2>How to setState in React</h2>
        <h5>by mincheol</h5>
        <hr />
        <div className="my3">
          <h3>User Info</h3>
          <div>First Name: {this.state.firstName}</div>
          <div>Last Name: {this.state.lastName}</div>
          <hr />
        </div>
        <div className="my3">
          <h5>Form</h5>
          <div className="form">
            <label htmlFor="firstName">First Name: </label>
            <input className="my2" type="text" name="firstName" onChange={this.handleFormChange} />
            <label htmlFor="lastName">Last Name: </label>
            <input className="my2" type="text" name="lastName" onChange={this.handleFormChange} />
            <label>This info is valid: </label>
            <input className="my2" type="checkbox" onChange={this.handleIsValid} />
          </div>
        </div>
      </div>
    )
  }
}

export default SetStateEx;