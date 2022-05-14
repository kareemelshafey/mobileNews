import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import News from "../Components/news";
import SearchBar from "../Components/searchBar"
import BottomBar from "../Components/bottomNavigation"
import globalData from "../Components/data"

class Home extends Component {
  state = {
    apiKey: "fecd0f9e3c294c8881431a75755c9e96"
  };  

  render() {
    let languageNews
    if(globalData.language){
      languageNews =
      <View>
            <News link={`https://newsapi.org/v2/top-headlines?language=en&apiKey=${this.state.apiKey}`}/>
      </View>
    } else {
      languageNews =
      <View>
            <News link={`https://newsapi.org/v2/top-headlines?language=ar&apiKey=${this.state.apiKey}`}/>
      </View>
    }

    return (
      <View style={styles.container}>
        <SearchBar navigation={this.props.navigation} />
        {languageNews}
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
  }
});

export default Home;
