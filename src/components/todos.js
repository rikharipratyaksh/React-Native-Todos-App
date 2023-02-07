import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from '../css/styles';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {FadeInDown, Layout} from 'react-native-reanimated';
import Input from './input.js';
import Item from './todo_items.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    let todos = await AsyncStorage.getItem('todos');
    if (todos != null) {
      this.setState({
        data: JSON.parse(todos),
      });
    }
  };

  statusChange = (id, index) => {
    console.log('id >> ', id, 'index >> ', index);
    let data = this.state.data;
    data[index].status = !data[index].status;
    this.setState({
      data: data,
    });
    AsyncStorage.setItem('todos', JSON.stringify(data));
  };

  pinItem = (id, index) => {
    console.log('id >> ', id, 'index >> ', index);
    let data = this.state.data;
    data[index].pinned = !data[index].pinned;
    this.setState({
      data: data,
    });
    AsyncStorage.setItem('todos', JSON.stringify(data));
  };

  onDelete = (id, index) => {
    let data = this.state.data;
    // data.pop();
    data.splice(index, 1);
    this.setState({
      data: data,
    });
    AsyncStorage.setItem('todos', JSON.stringify(data));
  };

  onAdd = text => {
    let data = this.state.data;
    let obj = {
      id: data.length + 1,
      title: text,
      status: false,
      pinned: false,
    };
    data.push(obj);
    this.setState({
      data: data,
    });
    AsyncStorage.setItem('todos', JSON.stringify(data));
  };
  render() {
    return (
      <SafeAreaView style={styles.todosContainer}>
        {this.state.data.length > 0 ? (
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => (
              <Item
                title={item.title}
                status={item.status}
                index={index}
                pinned={item.pinned}
                pinItem={() => this.pinItem(item, index)}
                onStatusChange={() => this.statusChange(item, index)}
                onDelete={() => this.onDelete(item, index)}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={styles.noTodosContainer}>
            <Text style={styles.noTodosText}>
              No Todos Added! Start Your day by adding todos
            </Text>
          </View>
        )}
        <Input onAdd={text => this.onAdd(text)} />
      </SafeAreaView>
    );
  }
}

export default Todos;
