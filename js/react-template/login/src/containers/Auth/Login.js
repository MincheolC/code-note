import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/modules/auth';
import { AuthContent, InputWithLabel, AuthButton, AuthError, RightAlignedLink } from '../../components/Auth';

function Login() {
  const auth = useSelector(state => state.auth)
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleId = (e) => setId(e.target.value);
  const handlePwd = (e) => setPassword(e.target.value);
  const handleLogin = () => dispatch(login({ id, password }));

  return (
    <AuthContent title='로그인'>
      <InputWithLabel
        label='아이디'
        name='id'
        placeholder='아이디'
        value={id}
        onChange={handleId}
      />
      <InputWithLabel
        label='비밀번호'
        name='password'
        placeholder='비밀번호'
        type='password'
        value={password}
        onChange={handlePwd}
      />
      {
        auth.error && <AuthError>잘못된 아이디 또는 패스워드입니다.</AuthError>
      }
      <AuthButton onClick={handleLogin}>로그인</AuthButton>
      {/* <RightAlignedLink to='/auth/signup'>회원가입</RightAlignedLink> */}
    </AuthContent>
  );
}

export default Login;
