import React from 'react';
import Services from './Services';

export const tabs = [
  {
    id: 'DASHBOARD',
    name: 'Dashboard',
  },
  {
    id: 'SERVICES',
    name: 'Services',
    content: <Services />,
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

export default {};
