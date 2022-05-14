import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Headline, Subheading, Paragraph } from "react-native-paper";
import BottomBar from "../Components/bottomNavigation"

class Article extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.title,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{ uri: this.props.route.params.urlToImage }}
        />
        <Headline> {this.props.route.params.title} </Headline>
        <Subheading> {this.props.route.params.publishedAt} </Subheading>
        <Subheading> {this.props.route.params.source.name} </Subheading>
        <Paragraph>{this.props.route.params.content}</Paragraph>
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
    margin: '5%'
  },
  logo: {
    marginTop: "5%",
    width: "95%",
    height: "40%",
  },
});

export default Article;
