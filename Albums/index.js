// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('Albums', () => App);

import React from 'react';
import { AppRegistry } from 'react-native';
import { Header } from './src/components/header';

const App = () => (
  <Header />
);

AppRegistry.registerComponent('Albums', () => App);
