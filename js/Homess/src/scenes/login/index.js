import * as React from 'react';
import styled from 'styled-components/native';
import {api} from '_services';
import Button from '_atoms/button';
import {Colors} from '_styles';

const LoginContainer = styled.SafeAreaView`
  flex: 1;
`;

const LoginButtonContainer = styled.View`
  flex: 5;
  align-items: center;
  justify-content: space-around;
`;

const TitleView = styled.View`
  flex: 9;
  align-items: center;
  justify-content: center;
`;

const SpaceView = styled.View`
  flex: 1;
`;

const LogoImage = styled.Image`
  width: 50%;
  height: 50%;
`;

const LoginScreen = ({navigation}) => (
  <LoginContainer>
    <TitleView>
      <LogoImage source={require('_assets/images/homess_logo_2x.png')} />
    </TitleView>
    <LoginButtonContainer>
      <Button
        backgroundColor={Colors.HOMESS_BLUE_MEDIUM_2}
        text={'이메일로 로그인하기'}
        textColor={Colors.WHITE}
        onPress={() => {
          api
            .checkStatus()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }}
      />
      <Button
        backgroundColor={Colors.WHITE}
        text={'Facebook 로그인하기'}
        textColor={Colors.BLACK}
        onPress={() => {
          api
            .checkStatus()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }}
        theme={'facebook'}
      />
      <Button
        backgroundColor={Colors.WHITE}
        text={'Google 로그인하기'}
        textColor={Colors.BLACK}
        onPress={() => {
          api
            .checkStatus()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }}
        theme={'google'}
      />
      <Button
        backgroundColor={Colors.WHITE}
        text={'Kakao 로그인하기'}
        textColor={Colors.BLACK}
        onPress={() => {
          api
            .checkStatus()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }}
        theme={'kakao'}
      />
    </LoginButtonContainer>
    <SpaceView />
  </LoginContainer>
);

export default LoginScreen;
