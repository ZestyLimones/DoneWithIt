import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',

          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',

          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',

          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// });
