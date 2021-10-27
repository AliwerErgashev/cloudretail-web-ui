import { Field, Form, Formik } from 'formik';
import { ComponentType } from 'react';
import { useDispatch } from 'react-redux';
import { SignInRequestPayload } from '../reducers/authReducer';
import { signIn } from '../thunks/authThunk';
import classes from './SignIn.module.scss';

const initialValues: SignInRequestPayload = { username: '', password: '' };

export const SignIn: ComponentType = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: SignInRequestPayload) => {
    dispatch(signIn(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={classes.form} autoComplete="off">
        <div className={classes.inputGroup}>
          <label className={classes.label}>Username</label>
          <Field className={classes.input} type="text" name="username" />
        </div>
        <div className={classes.inputGroup}>
          <label className={classes.label}>Password</label>
          <Field className={classes.input} type="password" name="password" />
        </div>
        <div className={classes.inputGroup}>
          <button className={classes.button} type="submit">
            OK
          </button>
        </div>
      </Form>
    </Formik>
  );
};
