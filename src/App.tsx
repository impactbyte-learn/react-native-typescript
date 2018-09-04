/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

interface IProps {}

interface IState {
  counter: number;
}

export default class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    this.setState(prev => ({ counter: prev.counter + 1 }));
  }
  decrease() {
    this.setState(prev => ({ counter: prev.counter - 1 }));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>Counter: {this.state.counter}</Text>
        <View>
          <Button title="INCREASE" onPress={this.increase} />
          <Button title="DECREASE" onPress={this.decrease} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  counter: {
    fontSize: 30
  }
});
