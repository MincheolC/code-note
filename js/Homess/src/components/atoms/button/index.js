import * as React from 'react';
import styled from 'styled-components/native';
import {Typography, Colors} from '_styles';

const ButtonContainer = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  padding: 12px;
  border-radius: 15px;
  background-color: ${props => props.backgroundColor};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px ${Colors.GRAY_MEDIUM};
`;

const ButtonText = styled.Text`
  font-size: ${Typography.FONT_SIZE_16}px;
  color: ${props => props.textColor};
  text-align: center;
`;

const Image = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

const getSupportingTheme = theme => {
  switch (theme) {
    case 'kakao':
      return <Image source={require('_assets/images/kakao_icon.png')} />;
    case 'google':
      return <Image source={require('_assets/images/google_icon.png')} />;
    case 'facebook':
      return <Image source={require('_assets/images/facebook_icon.png')} />;
    default:
      return null;
  }
};

const Button = props => {
  const {backgroundColor, textColor, text, onPress, theme} = props;

  return (
    <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      {getSupportingTheme(theme)}
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
