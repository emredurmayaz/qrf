import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { createRootNavigator } from './src/Navigator';
import * as firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAm5nEzwG8sRi8uo3rbgE8-DC7DwTDEp9Q',
      authDomain: 'test-6f540.firebaseapp.com',
      databaseURL: 'https://test-6f540.firebaseio.com',
      projectId: 'test-6f540',
      storageBucket: 'test-6f540.appspot.com',
      messagingSenderId: '7357528247',
      appId: '1:7357528247:web:60538f07186ed14a',
    };
    firebase.initializeApp(firebaseConfig);

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword('emredurmayaz@hotmail.com', 'Bursa1963.')
    //   .then(res => console.log(res));
  }

  render() {
    const Main = createRootNavigator();

    return <Main />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
