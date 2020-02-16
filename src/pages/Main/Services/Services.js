import React from 'react';
import { Grid, WhiteSpace } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
  text: `Application of Registration 190${i + 1}`,
}));

const Services = () => {
  return (
    <div>
      <WhiteSpace />
      <Grid data={data} columnNum={2} />
      <WhiteSpace />
    </div>
  );
};

export default Services;
