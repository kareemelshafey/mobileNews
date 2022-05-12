import { StyleSheet } from 'react-native';

import { Card, Title, Paragraph } from 'react-native-paper';

export default function card() {
  return (
      <Card style={styles.card} onPress={() => console.log('hohaheeyawalla--')}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
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
