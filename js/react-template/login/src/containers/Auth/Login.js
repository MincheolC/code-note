import React from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from '../../components/Auth';

function Login() {
  return (
    <AuthContent title='로그인'>
      <InputWithLabel label='아이디' name='id' placeholder='아이디' />
      <InputWithLabel label='비밀번호' name='password' placeholder='비밀번호' type='password' />
      <AuthButton>로그인</AuthButton>
      <RightAlignedLink to="/auth/signup">회원가입</RightAlignedLink>
    </AuthContent>
  );
}

export default Login;
