import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View, TextInput } from '../components/Themed';

interface LoginScreenProps {
  isLogined: () => boolean;
}

const EMAIL = 'mccha0407@gmail.com';
const PWD = '12qwaszx';

export default function LoginScreen(props: LoginScreenProps) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}lightColor="#fff" darkColor="rgba(255,255,255,0.1)">
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="password"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  input: {
    height: 50,
    width: "80%",
    margin: 12,
    padding: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#212529',
  },
});
