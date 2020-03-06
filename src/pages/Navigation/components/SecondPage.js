import React from 'react';
import { shape } from 'prop-types';
import { Button, Page, Toolbar, BackButton } from 'react-onsenui';

const SecondPage = props => {
  const { navigator } = props;

  const push = () => {
    navigator.pushPage({ component: SecondPage });
  };

  const pop = () => {
    navigator.popPage();
  };

  return (
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">Another page</div>
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
        <Button onClick={() => pop()}>Pop page</Button>
      </div>
    </Page>
  );
};

SecondPage.propTypes = {
  navigator: shape({}),
};

SecondPage.defaultProps = {
  navigator: {},
};

export default SecondPage;
