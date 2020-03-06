import React from 'react';
import { Navigator } from 'react-onsenui';
import MainPage from './components/MainPage';

const Navigation = () => {
  const renderPage = (route, navigator) => {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  };

  return (
    <Navigator
      initialRoute={{ component: MainPage, props: { key: 'main' } }}
      renderPage={(route, navigator) => renderPage(route, navigator)}
    />
  );
};

export default Navigation;
