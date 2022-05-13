import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, Title } from "react-native-paper";

export default function card(props) {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate("Article", props.news)}
    >
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
