import {StyleSheet, Dimensions} from 'react-native';
import {lightTheme, darkTheme} from '../exports/colors';
let {width, height} = Dimensions.get('screen');

let theme = lightTheme;
export const styles = StyleSheet.create({
  /* App container*/
  container: {
    backgroundColor: theme.backgroundColor,
    height: '100%',
  },

  /* Header CSS */
  header: {
    backgroundColor: theme.backgroundColor,
    width: '100%',
    paddingVertical: 15,
    elevation: 5,
  },
  headerText: {
    color: theme.fontColor,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  /* Textinput CSS */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 0.5,
    borderTopColor: theme.borderColor,
  },
  textInput: {
    width: '90%',
    color: theme.fontColor,
  },

  /* TODOS CONTAINER */
  todosContainer: {flex: 1, paddingTop: 20, paddingBottom: 50},

  /* TODOS */

  item: {
    backgroundColor: '#f9c2ff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: width * 0.95,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    color: theme.fontColor,
    width: '70%',
  },

  //    No todos text

  noTodosContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  noTodosText: {color: '#808080', fontSize: 15, textAlign: 'center'},
});
