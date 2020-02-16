import React, { useState } from 'react';
import { TabBar, WingBlank } from 'antd-mobile';

const Main = () => {
  const [state, setState] = useState({ selectedTab: 'DASHBOARD' });
  const tabs = [
    {
      id: 'DASHBOARD',
      name: 'Dashboard',
    },
    {
      id: 'SERVICES',
      name: 'Services',
    },
    {
      id: 'RECORDS',
      name: 'Records',
    },
    {
      id: 'ACCOUNT',
      name: 'Account',
    },
  ];
  return (
    <div style={{ height: '100vh' }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
        prerenderingSiblingsNumber={0}
      >
        {tabs.map((tab, key) => (
          <TabBar.Item
            icon={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
            }}
            selectedIcon={{
              uri:
                'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
            }}
            title={tab.name}
            key={key}
            selected={tab.id === state.selectedTab}
            onPress={() => setState({ ...state, selectedTab: tab.id })}
          >
            <WingBlank>
              <h3>{tab.name} coming soon...</h3>
            </WingBlank>
          </TabBar.Item>
        ))}
      </TabBar>
    </div>
  );
};

export default Main;
