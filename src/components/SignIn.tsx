import { Field, Form, Formik } from 'formik';
import { ComponentType } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SignInRequestPayload } from '../reducers/authReducer';
import { signIn } from '../thunks/authThunk';
import { Button } from './common/Button';

const StyledForm = styled(Form)`
  display: grid;
  gap: 8px;
  margin: 0 auto;
  max-width: 320px;
  padding: 16px 0;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 8px;
`;

const initialValues: SignInRequestPayload = { username: '', password: '' };

export const SignIn: ComponentType = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: SignInRequestPayload) => {
    dispatch(signIn(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm autoComplete="off">
        <h1>Please, sign in</h1>
        <FormGroup>
          <label>Username</label>
          <Field type="text" name="username" />
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <Field type="password" name="password" />
        </FormGroup>
        <FormGroup>
          <Button type="submit">OK</Button>
        </FormGroup>
      </StyledForm>
    </Formik>
  );
};
