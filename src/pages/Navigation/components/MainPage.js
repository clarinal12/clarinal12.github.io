import React from 'react';
import { shape } from 'prop-types';
import { Tab, Page, Tabbar } from 'react-onsenui';
import TabPage from './TabPage';

const MainPage = props => {
  const { navigator } = props;
  const renderTabs = () => {
    const sections = ['Home', 'Comments', 'Settings'];
    const icons = ['md-home', 'md-comment', 'md-settings'];
    return sections.map((section, key) => {
      return {
        content: <TabPage key={key} title={section} navigator={navigator} />,
        tab: <Tab key={key} label={section} icon={icons[key]} />,
      };
    });
  };

  return (
    <Page>
      <Tabbar initialIndex={0} renderTabs={() => renderTabs()} />
    </Page>
  );
};

MainPage.propTypes = {
  navigator: shape({}),
};

MainPage.defaultProps = {
  navigator: {},
};

export default MainPage;
