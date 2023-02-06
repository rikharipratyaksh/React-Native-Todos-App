import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from '../css/styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Daily Todo's</Text>
      </SafeAreaView>
    );
  }
}

export default Header;
