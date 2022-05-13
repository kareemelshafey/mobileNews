import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import News from "../Components/news";
import SearchBar from "../Components/searchBar"

class Home extends Component {
  state = {
    apiKey: "fecd0f9e3c294c8881431a75755c9e96"
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar navigation={this.props.navigation} />
        <News link={`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.state.apiKey}`}/>
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
