import React, { SyntheticEvent, useCallback } from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  LabelWrapper,
  LinkContainer,
  SignUpContainer,
  SignUpHeader,
  SignUpWrapper,
  SplashWrapper,
} from '@pages/SignUp/styles';
import { Link, useHistory } from 'react-router-dom';
import useInputs from '@hooks/useInputs';
import axios, { AxiosResponse } from 'axios';

const SignUp = () => {
  const [state, onChange] = useInputs({
    userid: '',
    sid: '',
    password: '',
    pscheck: '',
    email: '',
    username: '',
    phone: '',
  });
  const { userid: userId, sid: studentId, password, pscheck, email, username: name, phone } = state;
  const history = useHistory();

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      axios
        .post('/api/auth/signup', { userId, studentId, password, email, name, phone })
        .then((response: AxiosResponse<any> | void) => {
          // console.log('[onSubmit]', response);
          history.push('/login');
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    [userId, studentId, password, pscheck, email, name, phone],
  );

  return (
    <SignUpContainer>
      <SplashWrapper>
        <img src="/assets/logo.png" alt="splashimage" />
      </SplashWrapper>

      <SignUpWrapper>
        <SignUpHeader>회원가입을 진행하세요.</SignUpHeader>

        <Form onSubmit={onSubmit}>
          <LabelWrapper>
            <Label id="label-id">
              <span>아이디</span>
              <div>
                <Input type="text" id="userid" name="userid" value={userId} onChange={onChange} />
              </div>
            </Label>
            <Label id="label-sid">
              <span>학번</span>
              <div>
                <Input type="text" id="sid" name="sid" value={studentId} onChange={onChange} />
              </div>
            </Label>
          </LabelWrapper>
          <LabelWrapper>
            <Label id="label-password">
              <span>비밀번호</span>
              <div>
                <Input type="password" id="password" name="password" value={password} onChange={onChange} />
              </div>
            </Label>
            <Label id="label-pscheck">
              <span>비밀번호 확인</span>
              <div>
                <Input type="password" id="pscheck" name="pscheck" value={pscheck} onChange={onChange} />
              </div>
            </Label>
          </LabelWrapper>
          <Label id="label-email">
            <span>이메일 주소</span>
            <div>
              <Input type="email" id="email" name="email" value={email} onChange={onChange} />
            </div>
          </Label>
          <Label id="label-username">
            <span>이름</span>
            <div>
              <Input type="text" id="username" name="username" value={name} onChange={onChange} />
            </div>
          </Label>
          <Label id="label-phone">
            <span>핸드폰</span>
            <div>
              <Input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                value={phone}
                onChange={onChange}
              />
            </div>
          </Label>
          <Button type="submit">회원가입</Button>
        </Form>

        <LinkContainer>
          이미 회원가입을 했었나요?&nbsp;
          <Link to="/login">로그인하기</Link>
        </LinkContainer>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
