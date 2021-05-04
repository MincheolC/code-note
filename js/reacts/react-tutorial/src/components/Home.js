import React from 'react';
import _ from 'lodash';

class Home extends React.Component {
  state = {
    magicNumber: 23,
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.randomMagicNumber(),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  randomMagicNumber = () => {
    return this.setState({
      magicNumber: _.random(100),
    });
  }

  render() {
    return (
      <div>
        { this.state.magicNumber }
        <ChildOfHome magicNumber={this.state.magicNumber} />
        <ChildOfHomeBrother magicNumber={this.state.magicNumber} />
      </div>
    )
  }
}

// Rerender automatically
class ChildOfHome extends React.Component {
  render() {
    return (
      <div>
        {this.props.magicNumber}
      </div>
    )
  }
}

// Not rerender automatically (render doesn't know props has changed)
class ChildOfHomeBrother extends React.Component {
  state = {
    magicNumber: 0,
  }

  componentDidMount() {
    this.setState({
      magicNumber: this.props.magicNumber,
    })
  }

  render() {
    return (
      <div>
        {this.state.magicNumber}
      </div>
    )
  }
}


export default Home;