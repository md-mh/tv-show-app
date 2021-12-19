import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from './Components/Search/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Search></Search>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});
