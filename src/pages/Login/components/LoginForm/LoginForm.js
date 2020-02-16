import React from 'react';
import { Button, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import validationSchema from './validationSchema';

const Login = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log({ values });
      Toast.success('Login successful!', 2);
      localStorage.setItem('accessToken', 'sampleToken');
      history.push('/');
    },
    enableReinitialize: true,
    validationSchema,
  });

  const { handleSubmit, setFieldValue, values, errors } = formik;

  return (
    <form>
      <InputItem
        clear
        placeholder="Username"
        value={values.username}
        onChange={e => setFieldValue('username', e)}
        error={errors.username}
        onErrorClick={() => Toast.info(errors.username, 2)}
      />
      <WhiteSpace />
      <InputItem
        clear
        placeholder="Password"
        type="password"
        value={values.password}
        onChange={e => setFieldValue('password', e)}
        error={errors.password}
        onErrorClick={() => Toast.info(errors.password, 2)}
      />
      <WhiteSpace />
      <WhiteSpace />
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default Login;
