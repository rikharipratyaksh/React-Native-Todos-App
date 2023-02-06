import React from 'react';
import {SafeAreaView, ScrollView, Text, View, LogBox} from 'react-native';
// Components Import
import Header from './src/components/header.js';
import Todos from './src/components/todos.js';
import {styles} from './src/css/styles';
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <Todos />
        </View>
      </SafeAreaView>
    );
  }
}
