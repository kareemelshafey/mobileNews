import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import News from "../Components/news";
import BottomBar from "../Components/bottomNavigation"

class Home extends Component {
    state = {
        apiKey: "fecd0f9e3c294c8881431a75755c9e96"
    };

    componentDidMount() {
        this.props.navigation.setOptions({
          title: this.props.route.params.title,
        });
      }
      
  render() {
    return (
      <View style={styles.container}>
        <News link={`https://newsapi.org/v2/everything?q=${this.props.route.params.parsed}&apiKey=${this.state.apiKey}`}/>
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

export default Home;
