import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

export default function Command({ description, command }) {
  return (
    <View style={styles.container}>
      <Text style={styles.command}>{command}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },
  command: {
    fontSize: 40,
    color: "#7DF9FF",
    textShadowColor: "#7DF9FF",

    fontFamily: "Orbitron",

    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 30
  },
  description: {
    fontSize: 24,
    color: "#7fff00",
    textShadowColor: "#7fff00",
    fontFamily: "Orbitron",

    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 30
  }
};

Command.propTypes = {
  description: PropTypes.string,
  command: PropTypes.string
};
