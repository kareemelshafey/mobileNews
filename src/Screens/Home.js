import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../Components/card'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card sourceImage='https://picsum.photos/700' title="HI" paragraph = 'hihihih'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
})

export default Home;