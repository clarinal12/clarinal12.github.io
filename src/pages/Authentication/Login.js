import React from 'react';
import {
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  Button,
  Tabbar,
  Tab,
} from 'react-onsenui';

const TabPage = ({ title }) => {
  return (
    <Page>
      <h1>{title}</h1>
      <Button modifier="large--cta">Hello Idiots</Button>
    </Page>
  );
};

const Login = () => {
  return (
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className="left">
            <ToolbarButton>
              <Icon icon="md-chevron-left" />
            </ToolbarButton>
          </div>
          <div className="center">
            <center>Title</center>
          </div>
          <div className="right">
            <ToolbarButton>
              <Icon icon="md-menu" />
            </ToolbarButton>
          </div>
        </Toolbar>
      )}
    >
      <h1>HELLO LOGIN</h1>
    </Page>
  );
};

export default Login;
