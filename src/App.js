import React from "react";
import ReactDOM from "react-dom";
import { Text, StyleSheet, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "black",
          backgroundImage:
            "repeating-linear-gradient(0deg, hsla(103,11%,32%,0.09) 0px, hsla(103,11%,32%,0.09) 1px,transparent 1px, transparent 11px),repeating-linear-gradient(90deg, hsla(103,11%,32%,0.09) 0px, hsla(103,11%,32%,0.09) 1px,transparent 1px, transparent 11px),linear-gradient(90deg, hsl(317,13%,6%),hsl(317,13%,6%))",

          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 70,
            fontFamily: "Monoton",
            color: "#FF00DE",
            letterSpacing: 8,
            textShadowColor: "#FF00DE",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 30
          }}
        >
          How to Exit Vim
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
