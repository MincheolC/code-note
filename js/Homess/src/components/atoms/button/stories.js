import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import Button from './';
import {Colors} from '_styles';

storiesOf('Button', module)
  .add('default', () => (
    <Button
      backgroundColor={Colors.HOMESS_BLUE_MEDIUM_2}
      text={'이메일로 로그인하기'}
      textColor={Colors.WHITE}
      onPress={action('clicked')}
    />
  ))
  .add('facebook', () => (
    <Button
      backgroundColor={Colors.WHITE}
      text={'Facebook 로그인하기'}
      textColor={Colors.BLACK}
      onPress={action('clicked')}
      theme={'facebook'}
    />
  ))
  .add('google', () => (
    <Button
      backgroundColor={Colors.WHITE}
      text={'Google 로그인하기'}
      textColor={Colors.BLACK}
      onPress={action('clicked')}
      theme={'google'}
    />
  ))
  .add('kakao', () => (
    <Button
      backgroundColor={Colors.WHITE}
      text={'Kakao 로그인하기'}
      textColor={Colors.BLACK}
      onPress={action('clicked')}
      theme={'kakao'}
    />
  ));
