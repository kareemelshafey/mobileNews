import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomBar from "../Components/bottomNavigation"
import { Button } from "react-native-paper"
import globalData from "../Components/data"

class Settings extends Component {
  state = {
    apiKey: "fecd0f9e3c294c8881431a75755c9e96",
    initialValue: 'en'
  };

  changeToArabic(){
    globalData.language = false
    this.props.navigation.navigate("Home", language=true)
  }

  changeToEnglish(){
    globalData.language = true
    this.props.navigation.navigate("Home", language=false)
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Language: </Text>
          <View>
            {
              globalData.language === true ? (
                <Button 
                contentStyle={styles.button} 
                icon="globe-model" 
                onPress={() => this.changeToArabic()}>
                    Change to Arabic
                </Button>
              ) : (
                <Button 
                contentStyle={styles.button} 
                icon="globe-model" 
                onPress={() => this.changeToEnglish()}>
                    Change to English
                </Button>
              )
            }
          </View>
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
