import React from 'react';
import { shape, string } from 'prop-types';
import { Page, Toolbar, Button } from 'react-onsenui';
import SecondPage from './SecondPage';

const TabPage = props => {
  const { title, navigator } = props;

  const push = () => {
    navigator.pushPage({
      component: SecondPage,
    });
  };

  return (
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className="center">{title}</div>
        </Toolbar>
      )}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button onClick={() => push()}>Push page</Button>
      </div>
    </Page>
  );
};

TabPage.propTypes = {
  title: string,
  navigator: shape({}),
};

TabPage.defaultProps = {
  title: '',
  navigator: {},
};

export default TabPage;
