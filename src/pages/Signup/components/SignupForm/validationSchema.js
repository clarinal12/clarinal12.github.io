import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email('Email is not valid'),
  username: yup.string().required('Username is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  password: yup.string().required('Password is required'),
  sex: yup.string().required('Choose a sex'),
  firstName: yup.string().required('First name is required'),
  middleName: yup.string().required('Middle name is required'),
  lastName: yup.string().required('Last name is required'),
  memberType: yup.string().required('Choose a member type'),
});
