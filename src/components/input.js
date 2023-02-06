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
import Icon from 'react-native-vector-icons/Ionicons';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      err: false,
    };
  }
  render() {
    return (
      <SafeAreaView
        style={[
          styles.inputContainer,
          {backgroundColor: this.state.err ? '#F6BDC0' : '#eaeaea'},
        ]}>
        <TextInput
          style={[styles.textInput]}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          placeholder="Insert your text!"
          placeholderTextColor="gray"
        />
        <TouchableOpacity
          onPress={() => {
            if (this.state.text.length > 0) {
              this.setState({
                text: '',
                err: false,
              });
              this.props.onAdd(this.state.text);
            } else {
              this.setState({
                err: true,
              });
            }
          }}>
          <Icon style={styles.sendIcon} name="send" size={20} color="#900" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Input;
