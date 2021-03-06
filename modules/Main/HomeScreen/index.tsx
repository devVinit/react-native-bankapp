import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  useWindowDimensions
} from 'react-native';
import Constants from 'expo-constants';
import KebabIconSvg from '../../../assets/svgs/KebabIconSvg';
import BankCardComponent from './BankCardComponent';
import LastTransactionComponent from './LastTransactionComponent';
import CardComponent from '../../../components/CardComponent';
import SubscriptionComponent from './SubscriptionComponent';
import { useAuth } from '../../../Contexts/AuthContext';

export default function HomeScreen() {

  const historyData = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      amount: '- $ 72.00',
      timeStamp: '1:29 am',
      person: 'To Joel',
      transactionType: 'Transfer Money'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      amount: '- $ 14.00',
      timeStamp: '5:32 pm',
      person: 'From Amanda',
      transactionType: 'Transfer Money'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
      amount: '+ $ 128.00',
      timeStamp: '4:45 am',
      person: 'From Simon',
      transactionType: 'Income Money'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/93.jpg',
      amount: '+ $ 300.00',
      timeStamp: '9:45 pm',
      person: 'From Andrew',
      transactionType: 'Income Money'
    },
  ];

  const [_, setLoggedIn] = useAuth();
  const [isShowSubscriptionComponent, setShowSubscriptionComponent] = React.useState<boolean>(false);

  const openSubscriptions = () => {
    setShowSubscriptionComponent(true);
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Hey Andy!</Text>
            <TouchableOpacity onPress={setLoggedIn}>
              <KebabIconSvg />
            </TouchableOpacity>
          </View>
          <BankCardComponent />
          <LastTransactionComponent onPress={openSubscriptions} />
          <View style={styles.historyContainer}>
            <View style={styles.historyHeaderContainer}>
              <Text style={styles.historyText}>History</Text>
              <KebabIconSvg rotation={90} />
            </View>
            <FlatList
              style={{ marginVertical: 20 }}
              data={historyData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <CardComponent data={item} />}
            />
          </View>
        </View>
        {isShowSubscriptionComponent && <SubscriptionComponent
          show={isShowSubscriptionComponent}
          onClose={() => setShowSubscriptionComponent(false)}
        />}
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
