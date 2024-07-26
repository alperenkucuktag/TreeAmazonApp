import {StyleSheet, Text, ScrollView, View, StatusBar} from 'react-native';
import React from 'react';
import Router from './src/navigation/Router';
import {SafeAreaView} from 'react-native-safe-area-context';
// Eğer safeareaviewi  style={{flex: 1}} yapmassak homescreeni göremezdik

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#4d4d'} />
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
