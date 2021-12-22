import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  // Button,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('text press');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello World!</Text>
      <TouchableHighlight onPress={() => console.log('image tapped')}>
        <Image
          blurRadius={1}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>
      <Button
        title="Button!"
        onPress={() => console.log('button clicked')}
        color="green"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
