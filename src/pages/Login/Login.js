import React from 'react';
import { Flex, Card, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <>
      <Flex justify="center" style={{ minHeight: '100vh' }}>
        <Card style={{ minWidth: 300 }}>
          <Card.Header title="Login" />
          <Card.Body>
            <LoginForm />
            <WhiteSpace />
            <WhiteSpace />
          </Card.Body>
          <Card.Footer
            extra={
              <>
                <Link to="/signup">Signup here</Link>
                <WhiteSpace />
              </>
            }
          />
        </Card>
      </Flex>
    </>
  );
};

export default Login;
