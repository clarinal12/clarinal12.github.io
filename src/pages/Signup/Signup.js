import React from 'react';
import { WingBlank, WhiteSpace, Icon, NavBar, Flex } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import SignupForm from './components/SignupForm';

const Login = () => {
  const history = useHistory();
  return (
    <>
      <NavBar
        mode="light"
        leftContent={[
          <Icon key="1" type="left" onClick={() => history.goBack()} />,
        ]}
      >
        Signup
      </NavBar>
      <WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <Flex style={{ minHeight: 'calc(100vh - 72px)' }}>
          <SignupForm />
        </Flex>
        <WhiteSpace />
      </WingBlank>
    </>
  );
};

export default Login;
