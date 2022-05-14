import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  RefreshControl,
  StyleSheet 
} from "react-native";
import Card from "../Components/card";

class News extends Component {
  state = {
    news: [],
    apiKey: "fecd0f9e3c294c8881431a75755c9e96",
    link: null,
    refreshing: false
  };

  componentDidMount() {
    this.fetchFromAPI();
  }

  fetchFromAPI() {
    fetch(
      this.props.link
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({ news: response.articles });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const refresh = () => {
      this.setState({refreshing: true});
      this.fetchFromAPI()
      this.setState({refreshing: false});
    }

    return (
      <View>
        {this.state.news.length === 0 ? (
          <ActivityIndicator
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            color="black"
            size="large"
          />
        ) : (
          <ScrollView vertical={true} contentContainerStyle={{paddingBottom: '30%'}} refreshControl={
            <RefreshControl refreshing={ this.state.refreshing } onRefresh={ refresh }/>
          }>
            {this.state.news.map((news, index) => (
              <View style={{ margin: 10 }} key={index}>
                <Card
                  news={news}
                  sourceImage={news.urlToImage}
                  title={news.title}
                  paragraph={news.description}
                />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingEnd: 20
  }
})

export default News;
