/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      text: 'hi'
    }
  }

  onPress = () => {
    this.setState({
      text: 'hi clicked'
    })
  }

  render() {
    return (
      <View style={styles.container} accessibilityLabel="testView">
        <TouchableOpacity onPress={this.onPress}>
        <Text style={{backgroundColor:'yellow'}}>
          {this.state.text}
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
