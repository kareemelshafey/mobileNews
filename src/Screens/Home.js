import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import News from "../Components/news";
import SearchBar from "../Components/searchBar"

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <News />
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

export default Home;
