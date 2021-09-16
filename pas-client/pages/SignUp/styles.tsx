import styled from '@emotion/styled';

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SplashWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #012326;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignUpHeader = styled.header`
  font-family: sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.5;
  wthie-space: pre-wrap;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 25rem;
  min-width: 25rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
`;

export const Label = styled.label`
  & > span {
    cursor: pointer;
    display: block;
    font-size: 0.938rem;
    font-weight: bold;
    line-height: 1.5;
    padding-bottom: 0.5rem;
    text-align: left;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.75rem;
  border: 1px solid;
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: rgba(29, 28, 29, 1);
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 1.25rem;
  padding: 0.75rem;

  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(29, 155, 209, 0.3);
  }
`;

export const Button = styled.button`
  width: 100%;
  min-width: 6rem;
  max-width: 100%;
  height: 2.75rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.3);
  color: #fff;
  cursor: pointer;
  margin-bottom: 0.75rem;
  background-color: rgb(2, 35, 38, 0.9);
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  outline: none;
  padding: 0 1rem 0.188rem;
  transition: all 80ms linear;
  user-select: none;

  &:hover {
    background-color: rgb(2, 35, 38);
    border: none;
  }
  &:focus {
    box-shadow: 0 0 0 0.375rem rgba(29, 155, 209, 0.3);
  }
`;

export const LinkContainer = styled.p`
  color: #5e5f61;
  font-size: 0.875rem;
  margin: 0 auto;
  max-width: 25rem;
  width: 25rem;

  & a {
    color: #1264a3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
