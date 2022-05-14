import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomBar from "../Components/bottomNavigation"

class Settings extends Component {
  state = {
    apiKey: "fecd0f9e3c294c8881431a75755c9e96"
  };
  
  render() {
    return (
      <View style={styles.container}>
          <Text> Main Content Here</Text>
          <BottomBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Settings;
