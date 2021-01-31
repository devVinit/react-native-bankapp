import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ChevronDownIconSvg from '../../../assets/svgs/ChevronDownIconSvg';

const BankCardComponent = React.memo((props: any) => {
  return <View style={styles.cardContainer}>
    <View style={styles.cardHeaderContainer}>
      <Text style={styles.cardNumberText}>•••• 2369</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.currencyText}>USD Wallet</Text>
        <TouchableOpacity style={styles.chevronContainer}>
          <ChevronDownIconSvg />
        </TouchableOpacity>
      </View>
    </View>
    <Text style={styles.cardTitle}>Bank of America</Text>
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>$ 16,803.40</Text>
      </View>
    </View>
  </View>
});

export default BankCardComponent;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F2D7E3',
    borderRadius: 10,
    marginTop: 35,
    marginBottom: 10,
    padding: 20,
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardNumberText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#666B78',
  },
  currencyText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#000618',
    marginHorizontal: 10,
  },
  chevronContainer: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontFamily: 'Inter_500Medium',
    lineHeight: 34,
    marginVertical: 30,
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  amountText: {
    fontSize: 24,
    fontFamily: 'Inter_500Medium',
    lineHeight: 34,
  },
})