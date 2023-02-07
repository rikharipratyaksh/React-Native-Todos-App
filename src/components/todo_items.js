import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../css/styles';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {FadeInDown, Layout} from 'react-native-reanimated';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Animated.View
        entering={FadeInDown.delay(this.props.index * 100)}
        layout={Layout.springify()}
        style={[
          styles.item,
          {backgroundColor: this.props.status ? '#B5CBBB' : '#dadada'},
        ]}>
        <TouchableOpacity onPress={() => this.props.onStatusChange()}>
          <Icon
            style={{marginRight: 5}}
            name={
              this.props.status
                ? 'md-checkmark-done-circle-sharp'
                : 'md-checkmark-done-circle-outline'
            }
            size={25}
            color={this.props.status ? 'green' : '#100'}
          />
        </TouchableOpacity>
        {/* <CheckBox
          value={this.props.status}
          onValueChange={() => this.props.onStatusChange()}
          style={styles.checkbox}
        /> */}
        <Text
          style={[
            styles.title,
            this.props.pinned ? {fontWeight: 'bold'} : null,
          ]}>
          {this.props.title}
        </Text>
        <TouchableOpacity onPress={() => this.props.pinItem()}>
          <Icon
            style={{marginRight: 20}}
            name={this.props.pinned ? 'md-bookmark' : 'md-bookmark-outline'}
            size={20}
            color="#100"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.onDelete()}>
          <Icon name="trash" size={20} color="#900" />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
