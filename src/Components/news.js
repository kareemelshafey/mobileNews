import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import Card from '../Components/card'

class News extends Component {
    state = {
        news: [],
        apiKey: 'fecd0f9e3c294c8881431a75755c9e96'
    }

    componentDidMount(){
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.state.apiKey}`)
        .then(res => res.json())
        .then(response => { this.setState({ news: response.articles })
        console.log(this.state.news.length)})
        .catch(err => console.error(err))
    }

    render() {
        return (
            <View>
                {
                    this.state.news.length === 0 ? (
                        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} color="black" size="large" />
                    ) :(
                        <ScrollView vertical={true}>
                            {this.state.news.map((news, index) => (
                            <View style={{margin: 10}} key={index}>
                                 <Card news= {news} sourceImage={news.urlToImage} title={news.title} paragraph={news.description} />
                            </View>
                            ))}
                        </ScrollView>
                    )
                }
            </View>
        )
    }
}

export default News;