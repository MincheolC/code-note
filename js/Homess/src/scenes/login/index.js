import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {api} from '_services';
import Button from '_atoms/button';
import {Colors, Typography} from '_styles';

const LoginScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <Button
      buttonColor={Colors.BLUE_LIGHT_2}
      title={'회원가입'}
      titleColor={Colors.WHITE}
      fontSize={Typography.FONT_SIZE_16}
      onPress={() => {
        api
          .checkStatus()
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default LoginScreen;
