import React from 'react';
import {
  Button,
  InputItem,
  WhiteSpace,
  Toast,
  List,
  Picker,
} from 'antd-mobile';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import validationSchema from './validationSchema';

const sexOptions = [
  { label: 'Male', value: 'MALE' },
  { label: 'Female', value: 'FEMALE' },
];

const memberTypes = [
  {
    label: 'Self-Employed (Single Proprietor/Professional)',
    value: 'SELF_EMPLOYED',
  },
  { label: 'Mixed-Income Individuals', value: 'MIXED_INCOME_INDIVIDUALS' },
  { label: 'Employed', value: 'EMPLOYED' },
  {
    label: 'Non-Resident Alien - Engaged in Trade/Business, Estate, and Trust',
    value: 'NON_RESIDENT_ALIEN',
  },
];

const SignupForm = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      phoneNumber: '',
      password: '',
      sex: 'MALE',
      firstName: '',
      middleName: '',
      lastName: '',
      memberType: 'SELF_EMPLOYED',
    },
    onSubmit: values => {
      console.log({ values });
      Toast.success('Signup successful!', 2);
      localStorage.setItem('accessToken', 'sampleToken');
      history.push('/');
    },
    enableReinitialize: true,
    validationSchema,
  });

  const { handleSubmit, setFieldValue, values, errors } = formik;

  return (
    <form style={{ width: '100%' }}>
      <InputItem
        clear
        type="text"
        placeholder="juandelacruz@gmail.com"
        labelNumber={7}
        value={values.email}
        onChange={e => setFieldValue('email', e)}
        error={errors.email}
        onErrorClick={() => Toast.info(errors.email, 2)}
      >
        Email
      </InputItem>
      <WhiteSpace />
      <InputItem
        clear
        type="text"
        placeholder="juandelacruz"
        labelNumber={7}
        value={values.username}
        onChange={e => setFieldValue('username', e)}
        error={errors.username}
        onErrorClick={() => Toast.info(errors.username, 2)}
      >
        Username
      </InputItem>
      <WhiteSpace />
      <InputItem
        clear
        type="phone"
        placeholder="09495534423"
        labelNumber={7}
        value={values.phoneNumber}
        onChange={e => setFieldValue('phoneNumber', e)}
        error={errors.phoneNumber}
        onErrorClick={() => Toast.info(errors.phoneNumber, 2)}
      >
        Phone
      </InputItem>
      <WhiteSpace />
      <InputItem
        clear
        type="password"
        placeholder="******"
        labelNumber={7}
        value={values.password}
        onChange={e => setFieldValue('password', e)}
        error={errors.password}
        onErrorClick={() => Toast.info(errors.password, 2)}
      >
        Password
      </InputItem>
      <WhiteSpace />
      <Picker
        data={sexOptions}
        cols={1}
        value={[values.sex]}
        onChange={e => setFieldValue('sex', e[0])}
        okText="Select"
        dismissText="Cancel"
      >
        <List.Item arrow="horizontal">Gender</List.Item>
      </Picker>
      <WhiteSpace />
      <InputItem
        clear
        type="text"
        placeholder="Juan"
        labelNumber={7}
        value={values.firstName}
        onChange={e => setFieldValue('firstName', e)}
        error={errors.firstName}
        onErrorClick={() => Toast.info(errors.firstName, 2)}
      >
        First name
      </InputItem>
      <WhiteSpace />
      <InputItem
        clear
        type="text"
        placeholder="Doe"
        labelNumber={7}
        value={values.middleName}
        onChange={e => setFieldValue('middleName', e)}
        error={errors.middleName}
        onErrorClick={() => Toast.info(errors.middleName, 2)}
      >
        Middle name
      </InputItem>
      <WhiteSpace />
      <InputItem
        clear
        type="text"
        placeholder="Dela Cruz"
        labelNumber={7}
        value={values.lastName}
        onChange={e => setFieldValue('lastName', e)}
        error={errors.lastName}
        onErrorClick={() => Toast.info(errors.lastName, 2)}
      >
        Last name
      </InputItem>
      <WhiteSpace />
      <Picker
        data={memberTypes}
        cols={1}
        value={[values.memberType]}
        onChange={e => setFieldValue('memberType', e[0])}
        okText="Select"
        dismissText="Cancel"
      >
        <List.Item arrow="horizontal">Type</List.Item>
      </Picker>
      <WhiteSpace />
      <WhiteSpace />
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default SignupForm;
