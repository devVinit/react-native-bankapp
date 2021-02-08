import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardComponentProps {
}

const CardComponent = React.memo((props: CardComponentProps) => {
  return <View style={styles.container}>
    <Image style={styles.avatarImage} source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} />
    <View style={{ flex: 1, }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.primaryText}>Transfer Money</Text>
        <Text style={styles.primaryText}>-$ 72.00</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.subtitleText}>To Joel</Text>
        <Text style={styles.subtitleText}>1:29 pm</Text>
      </View>
    </View>
  </View>
});

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  primaryText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#000618',
    lineHeight: 24,
  },
  subtitleText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    color: '#666B78',
    lineHeight: 22,
  }
});