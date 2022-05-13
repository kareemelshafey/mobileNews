import React, { Component } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";

class SearchBar extends Component { 
    constructor(props) {  
        super(props);  
        this.state = {text: '', parsed: ''};  
    }  

    search() {
        const parsedText = this.state.text.replace(/\s/g, '-')
        const searchData = { text: this.state.text, parsed: parsedText }
        this.props.navigation.navigate("Search", searchData)
    }

    render() {
        return (
            <View style={style.container}>
            <TextInput
                style={style.input}
                placeholder='Search…'
                onChangeText={(text) => this.setState({text})}
                returnKeyType='search'
                onSubmitEditing={() => {Keyboard.dismiss && this.search()}}
            />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: '5%',
      width: '100%',
      marginBottom: '10%'
    },
    input: {
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 4,
      height: 40
    },
    status: {
      padding: 10,
      textAlign: "center"
    }
  });

export default SearchBar;
