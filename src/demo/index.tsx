import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CheckGroup from '../index';
require('antd/dist/antd.css');
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange'},
];
ReactDOM.render(
  <CheckGroup options={options} />,
  document.getElementById('example')
);
