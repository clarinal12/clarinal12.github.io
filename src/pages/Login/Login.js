import React from "react";
import { Button, Flex, Card, InputItem, WhiteSpace } from "antd-mobile";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return (
    <>
      <Flex justify="center" style={{ minHeight: "100vh" }}>
        <Card style={{ minWidth: 300 }}>
          <Card.Header title="Login" />
          <Card.Body>
            <InputItem clear placeholder="Username" />
            <WhiteSpace />
            <InputItem clear placeholder="Password" type="password" />
            <WhiteSpace />
            <WhiteSpace />
            <Button type="primary">Submit</Button>
            <WhiteSpace />
            <WhiteSpace />
          </Card.Body>
          <Card.Footer
            extra={
              <>
                <a href="#action" onClick={() => history.push("/signup")}>
                  Signup here
                </a>
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
