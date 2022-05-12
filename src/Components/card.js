import { StyleSheet } from 'react-native';

import { Card, Title, Paragraph } from 'react-native-paper';

export default function card(props) {
  return (
      <Card style={styles.card} onPress={() => console.log('hohaheeyawalla--')}>
        <Card.Cover source={{ uri: props.sourceImage }} />
        <Card.Content>
          <Title>{props.title}</Title>
          <Paragraph>{props.paragraph}</Paragraph>
        </Card.Content>
      </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: '5%',
    width: '80%',
    height: '40%',
    borderBottomColor: '#fff'
  }
});
