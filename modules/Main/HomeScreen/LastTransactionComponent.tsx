import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import VesselIconSvg from '../../../assets/svgs/VesselIconSvg';

interface LastTransactionComponentProps {
  onPress: () => void;
}

const LastTransactionComponent = React.memo(({ onPress }: LastTransactionComponentProps) => {
  return <Pressable style={styles.lastTransactionContainer} onPress={onPress}>
    <View style={styles.iconContainer}>
      <VesselIconSvg />
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Text style={styles.lastTransactionText}>Cruise Spends</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.transactionAmountText}>$ 1,834.99</Text>
        <Text style={styles.availableAmountText}>Available $ 4.500.00</Text>
      </View>
    </View>
  </Pressable>;
});

export default LastTransactionComponent;

const styles = StyleSheet.create({
  lastTransactionContainer: {
    flexDirection: 'row',
    backgroundColor: '#D3E0F8',
    borderRadius: 10,
    padding: 20,
  },
  iconContainer: {
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  lastTransactionText: {
    fontSize: 12,
    color: '#000618',
    fontFamily: 'Inter_500Medium',
    lineHeight: 18,
  },
  transactionAmountText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#000618',
    marginRight: 5,
  },
  availableAmountText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666B78',
  }
});