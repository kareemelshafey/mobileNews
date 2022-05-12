import { StyleSheet } from "react-native";

import { Card, Title } from "react-native-paper";

export default function card(props) {
  return (
    <Card style={styles.card} onPress={() => console.log("hohaheeyawalla--")}>
      <Card.Cover
        style={{ margin: "2.5%" }}
        source={{ uri: props.news.urlToImage }}
      />
      <Card.Content style={{ flex: 1 }}>
        <Title numberOfLines={4}>{props.news.title}</Title>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: "5%",
    width: "95%",
    height: 350,
    borderBottomColor: "#fff",
  },
});
