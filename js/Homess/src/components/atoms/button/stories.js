import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import Button from './';
import {Colors, Typography} from '_styles';

storiesOf('Button', module).add('default', () => (
  <Button
    buttonColor={Colors.BLUE_LIGHT_1}
    title={'회원가입'}
    titleColor={Colors.WHITE}
    fontSize={Typography.FONT_SIZE_16}
    onPress={action('clicked')}
  />
));
