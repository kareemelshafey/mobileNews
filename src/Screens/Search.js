import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import News from "../Components/news";
import BottomBar from "../Components/bottomNavigation"
import globalData from "../Components/data"

class Home extends Component {
    state = {
        apiKey: "fecd0f9e3c294c8881431a75755c9e96"
    };

    componentDidMount() {
        this.props.navigation.setOptions({
          title: this.props.route.params.text,
        });
      }
      
  render() {
    let languageNews
    if(globalData.language){
      languageNews =
      <View>
            <News link={`https://newsapi.org/v2/everything?q=${this.props.route.params.parsed}&language=en&apiKey=${this.state.apiKey}`}/>
      </View>
    } else {
      languageNews =
      <View>
            <News link={`https://newsapi.org/v2/everything?q=${this.props.route.params.parsed}&language=ar&apiKey=${this.state.apiKey}`}/>
      </View>
    }

    return (
      <View style={styles.container}>
        {languageNews}
        {/* <News link={`https://newsapi.org/v2/everything?q=${this.props.route.params.parsed}&apiKey=${this.state.apiKey}`}/> */}
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
