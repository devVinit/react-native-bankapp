import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  useWindowDimensions,
  Pressable,
  Animated
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CardComponent from '../../../components/CardComponent';
import { ScrollView } from 'react-native-gesture-handler';

interface SubscriptionComponentProps {
  show: boolean;
  onClose: () => void;
};

const SubscriptionComponent = ({ show, onClose }: SubscriptionComponentProps) => {
  const { height } = useWindowDimensions();

  const overlayFade = React.useRef(new Animated.Value(0));
  const translateY = React.useRef(new Animated.Value(height * (70 / 100)));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(overlayFade.current, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(translateY.current, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
  }, []);

  const beforeClose = () => {
    Animated.parallel([
      Animated.timing(overlayFade.current, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(translateY.current, {
        toValue: height * (70 / 100),
        duration: 200,
        useNativeDriver: true
      })
    ]).start(() => {
      onClose();
    });
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={show}
      onRequestClose={beforeClose}
    >
      <Animated.View style={[styles.backgroundContainer, { opacity: overlayFade.current }]} />
      <Pressable onPress={beforeClose} style={{ height: height * (30 / 100) }} />
      <Animated.View style={{
        transform: [
          {
            translateY: translateY.current
          }
        ]
      }}>
        <ScrollView style={{ backgroundColor: '#fff' }}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="credit-card" size={24} color="#000" />
              </View>
              <Text style={styles.headerTitleText}>App Store</Text>
              <Text style={styles.headerSubtitleText}>Subscriptions</Text>
            </View>
            <View style={styles.graphContainer}>
              {
                [1, 2, 3, 4, 5, 6].map((item: number) => (
                  <View key={item.toString()} style={styles.graphBarContainer}>
                    <View style={styles.graphBar} />
                    <Text style={styles.monthNameText}>Jun</Text>
                  </View>
                ))
              }
            </View>
            <View>
              <View style={styles.historyHeaderContainer}>
                <Text style={styles.historyText}>History</Text>
              </View>

              <FlatList
                style={{ marginBottom: 20 }}
                data={[1, 2, 3, 4]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <CardComponent user={item} />}
              />
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
}

export default SubscriptionComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 700
  },
  headerContainer: {
    alignItems: 'center'
  },
  headerTitleText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 24,
    color: '#000618'
  },
  headerSubtitleText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#666B78',
    lineHeight: 24,
    marginTop: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: '#E6E8EC',
    marginBottom: 15,
  },
  graphBarContainer: {
    alignItems: 'center'
  },
  graphContainer: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  graphBar: {
    backgroundColor: '#CFF3E5',
    borderRadius: 10,
    height: 100,
    width: 32,
  },
  monthNameText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 22,
    color: '#666B78',
  },
  historyHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  historyText: {
    fontSize: 20,
    fontFamily: 'Inter_500Medium',
    color: '#666B78',
  },
  backgroundContainer: {
    backgroundColor: 'black',
    position: 'absolute',
    flex: 1,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  }
})