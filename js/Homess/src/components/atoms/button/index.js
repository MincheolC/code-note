import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {buttonColor, titleColor, title, onPress, fontSize} = props;

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonColor}]}
      onPress={onPress}>
      <Text style={{fontSize: fontSize, color: titleColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

/*
 * TODO: Button 종류 별로 theme을 만들어 놓기.
 */
const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Button;
