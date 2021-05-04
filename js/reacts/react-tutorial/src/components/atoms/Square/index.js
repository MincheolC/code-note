import React from 'react';
import styles from './style.css';

// class Square extends React.Component {

//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     )
//   }
// }

function Square(props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;