import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function Subheader() {
  return (
    <LinearGradient
      colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}
      style={styles.container}>
      <Feather name="map-pin" size={22} color="#1f1f1f" />
      <Text style={styles.delivery}>Deliver to Turkey - 23456</Text>
      <SimpleLineIcons name="arrow-down" size={10} color="#000000" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
  },
  delivery: {
    fontSize: 13,
    color: '#2c4341',
    paddingHorizontal: 6,
  },
});
