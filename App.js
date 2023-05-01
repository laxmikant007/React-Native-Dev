/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import UserData from './components/UserData';

import {
  FlatList,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  SectionList,
  TouchableHighlight,
  ActivityIndicator,
  Pressable,
} from 'react-native';
const App = () => {
  const [show, setShow] = useState(false);
  const handleLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 2000)

  }
  return (
    <View style={style.main}>
      {/* <TouchableHighlight>
        <Text style={style.button}>Button</Text>
      </TouchableHighlight>

      <ActivityIndicator size={"large"} animating={show} />
      <Button title='Show Loader' onPress={handleLoader} /> */}

      {/* <View style={style.innerView}><Button title='Press Me!' /></View> */}

      <Pressable>
        <Text style={style.pressable}>Pressable!!</Text>
      </Pressable>

    </View>
  );
};





const style = StyleSheet.create({
  pressable: {
    backgroundColor: 'orange',
    margin: 20,
    padding: 20,
    borderRadius: 30,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    shadowColor: 'black',
    elevation: 20,
    shadowOpacity: 3
  },
  innerView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 20,
    borderRadius: 20,


  },
  button: {
    backgroundColor: "orange",
    margin: 15,
    padding: 15,
    fontSize: 24,
    textAlign: 'center',
    borderRadius: 20,
    color: 'black',
    shadowColor: 'black',
    elevation: 20,
    shadowOpacity: 3
  },
  innerBox: {
    flex: 1,
    backgroundColor: 'skyblue',
    margin: 15
  },
  main: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',

  },
  box1: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'orange'
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow'

  },
  box3: {
    flex: 1,
    backgroundColor: 'green'

  },

  item: {
    fontSize: 20,
    margin: 10,
    flex: 1,
    textAlign: 'center',




  },
  textInput: {
    color: 'white',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1
  },
  yourName: {
    margin: 10,
    padding: 20,
    color: "black",
    backgroundColor: "pink",
    fontSize: 20,
    borderRadius: 20
  }
})

export default App;




