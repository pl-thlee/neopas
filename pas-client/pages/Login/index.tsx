import React, { SyntheticEvent, useCallback, useState } from 'react';
import { Button, Form, Input, Label, LinkContainer } from '@pages/SignUp/styles';
import { Link, Redirect } from 'react-router-dom';
import useInputs from '@hooks/useInputs';
import { LoginContainer, LoginWrapper } from './styles';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';

/** @see https://stackoverflow.com/questions/44312170/displaying-a-static-image-using-react-typescript-and-webpack */
const SplashImage = require('@assets/logo.png');

const LogIn = () => {
  const [state, onChange] = useInputs({ userid: '', password: '' });
  const { userid: userId, password } = state;

  const loginUser = async () => {
    const { data: response } = await axios.post('/api/auth/login', { userId, password });
    return response.data;
  };
  const mutation = useMutation(loginUser, {
    onMutate: (accessToken: string) => {
      if (accessToken) {
        localStorage.setItem('user', JSON.stringify(accessToken));
      }

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    },
  });

  const [logInError, setLogInError] = useState(false);

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      axios
        .post('/api/auth/login', { userId, password })
        .then((response: AxiosResponse) => {
          const { accessToken } = response.data;
          mutation.mutate(accessToken);
        })
        .catch((error: AxiosError) => {
          setLogInError(error.response?.data?.statusCode === 401);
        });
    },
    [userId, password],
  );

  // const onLogout = useCallback(() => {
  //   localStorage.removeItem('user');
  // }, []);

  // const getCurrentUser = () => {
  //   return JSON.parse(localStorage.getItem('user')!);
  // };

  if (mutation.isSuccess || localStorage.getItem('user')) {
    return <Redirect to="/playgrounds/" />;
  }

  return (
    <LoginContainer>
      <LoginWrapper>
        <img src={SplashImage} alt="splashimage" style={{ marginBottom: '1rem' }} />

        <Form onSubmit={onSubmit}>
          <Label id="label-id">
            <span style={{ color: '#ccc' }}>아이디</span>
            <div>
              <Input type="text" id="userid" name="userid" value={userId} onChange={onChange} />
            </div>
          </Label>
          <Label id="label-password">
            <span style={{ color: '#ccc' }}>비밀번호</span>
            <div>
              <Input type="password" id="password" name="password" value={password} onChange={onChange} />
            </div>
            {logInError && <div>아이디 또는 비밀번호가 일치하지 않습니다.</div>}
          </Label>

          <Button type="submit" style={{ border: '1px solid #ccc', marginTop: '1rem' }}>
            로그인
          </Button>
        </Form>

        <LinkContainer style={{ color: '#ccc' }}>
          아직 계정이 없으신가요?&nbsp;
          <Link to="/signup">회원가입</Link>
        </LinkContainer>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LogIn;
