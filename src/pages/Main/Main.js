import React, { useState } from 'react';
import { TabBar, WingBlank, NavBar, Icon } from 'antd-mobile';
import { tabs } from './constants';

const Main = () => {
  const [state, setState] = useState({ selectedTab: tabs[0] });

  return (
    <div style={{ height: 'calc(100vh - 45px)' }}>
      <NavBar mode="dark" rightContent={[<Icon key="1" type="ellipsis" />]}>
        {state.selectedTab.name}
      </NavBar>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="black"
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
            selected={tab.id === state.selectedTab.id}
            onPress={() => setState({ ...state, selectedTab: tab })}
          >
            <WingBlank>
              {tab.content || <h3>{tab.name} coming soon...</h3>}
            </WingBlank>
          </TabBar.Item>
        ))}
      </TabBar>
    </div>
  );
};

export default Main;
