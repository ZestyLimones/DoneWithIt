import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  console.log(useDimensions());

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: '40%',
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
