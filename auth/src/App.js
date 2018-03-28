import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  ComponentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyDYl-htI8ZiUY_MmVkvOzi9xFoDIZgov1w',
        authDomain: 'auth-9f7b3.firebaseapp.com',
        databaseURL: 'https://auth-9f7b3.firebaseio.com',
        projectId: 'auth-9f7b3',
        storageBucket: 'auth-9f7b3.appspot.com',
        messagingSenderId: '606467947694'
      }
    );
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
