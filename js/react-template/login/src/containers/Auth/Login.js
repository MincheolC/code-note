import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'query-string';
import { login } from '../../redux/modules/auth';
import { AuthContent, InputWithLabel, AuthButton, AuthError } from '../../components/Auth';
import storage from '../../lib/storage';

function Login({ history, location }) {
  const query = qs.parse(location.search);
  const auth = useSelector(state => state.auth)
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(query.expired !== undefined ? '세션이 만료되었습니다. 다시 로그인하세요.' : null);
  const dispatch = useDispatch();

  const handleId = (e) => setId(e.target.value);
  const handlePwd = (e) => setPassword(e.target.value);
  const handleLogin = () => dispatch(login({ id, password }));

  useEffect(() => {
    if (auth.id || storage.get('id')) {
      storage.set('id', auth.id);
      history.push('/');
    }
  }, [auth.id, history]);

  useEffect(() => {
    if (auth.error) {
      setError('잘못된 아이디 또는 패스워드입니다.');
    }
  }, [auth.error, setError]);

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
      {error && <AuthError>{error}</AuthError>}
      <AuthButton onClick={handleLogin}>로그인</AuthButton>
      {/* <RightAlignedLink to='/auth/signup'>회원가입</RightAlignedLink> */}
    </AuthContent>
  );
}

export default Login;
