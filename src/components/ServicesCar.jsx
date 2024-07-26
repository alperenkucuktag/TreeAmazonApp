import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ServicesCar({recentsearchdata}) {
  return (
    <View key={recentsearchdata.id} style={styles.OuterContainer}>
      <Text style={styles.recentsearch}>{recentsearchdata.title}</Text>
      <Image source={recentsearchdata.image} style={styles.serviceImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  serviceImage: {
    width: '100%',
    height: 130,
  },
  recentsearch: {
    fontSize: 13,
    marginBottom: 8,
    color: '#000000',
  },
  OuterContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    marginLeft: 8,
    width: 140,
  },
});
