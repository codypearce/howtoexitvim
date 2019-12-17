import React from "react";
import ReactDOM from "react-dom";

import { Text, StyleSheet, View } from "react-native";
import Container from "./Container";
import Command from "./Command";
import Title from "./Title";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <View>
          <Title title={"How to Exit Vim"} />
          <View>
            <Command description={"Save Changes"} command={":q!"} />
            <Command
              description={"Save Changes (Fails if changes)"}
              command={":q"}
            />
            <Command description={"Exit and Save"} command={":wq"} />
            <Command description={"Exit and Save"} command={"shift + ZZ"} />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
