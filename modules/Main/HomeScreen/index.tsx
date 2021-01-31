import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import KebabIconSvg from '../../../assets/svgs/KebabIconSvg';
import BankCardComponent from './BankCardComponent';
import LastTransactionComponent from './LastTransactionComponent';
import CardComponent from '../../../components/CardComponent';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Hey Andy!</Text>
            <TouchableOpacity>
              <KebabIconSvg />
            </TouchableOpacity>
          </View>
          <BankCardComponent />
          <LastTransactionComponent />
          <View style={styles.historyContainer}>
            <View style={styles.historyHeaderContainer}>
              <Text style={styles.historyText}>History</Text>
              <KebabIconSvg rotation={90} />
            </View>

            <FlatList
              style={{ marginVertical: 20 }}
              data={[1, 2, 3, 4]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <CardComponent user={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  headerContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Inter_500Medium',
    lineHeight: 40,
    color: '#000618'
  },
  historyContainer: {
    marginTop: 40,

  },
  historyHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyText: {
    fontSize: 20,
    fontFamily: 'Inter_500Medium',
    color: '#666B78',
  }
});
