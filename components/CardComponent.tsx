import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardComponentProps {
  data: {
    avatar: string,
    amount: string,
    timeStamp: string,
    person: string,
    transactionType: string
  }
};

const CardComponent = React.memo(({ data: { avatar, amount, timeStamp, person, transactionType } }: CardComponentProps) => {
  return <View style={styles.container}>
    <Image style={styles.avatarImage} source={{ uri: avatar }} />
    <View style={{ flex: 1, }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.primaryText}>{transactionType}</Text>
        <Text style={styles.primaryText}>{amount}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.subtitleText}>{person}</Text>
        <Text style={styles.subtitleText}>{timeStamp}</Text>
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
    backgroundColor: '#000',
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