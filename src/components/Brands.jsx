import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Brand from '../Assets/brand1.jpeg';
import Brand2 from '../Assets/brand2.jpeg';
import Brand3 from '../Assets/brand3.jpeg';
import Brand4 from '../Assets/brand4.jpeg';

export default function Brands() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of day</Text>
        <View style={styles.row}>
          <View style={styles.brand}>
            <Image source={Brand} style={styles.imgStyle} />
            <Text style={styles.branndTitle}>
              Min 40% off | Fossil, Titan Smart Watch & More{' '}
            </Text>
          </View>
          <View style={styles.brand}>
            <Image source={Brand3} style={styles.imgStyle} />
            <Text style={styles.branndTitle}>
              Min 20% off | Fossil, Helled Sandals & More{' '}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brand}>
            <Image source={Brand4} style={styles.imgStyle} />
            <Text style={styles.branndTitle}>
              Min 10% off | Soundbar & More{' '}
            </Text>
          </View>
          <View style={styles.brand}>
            <Image source={Brand2} style={styles.imgStyle} />
            <Text style={styles.branndTitle}>
              Min 40% off | Fossil, Titan Smart Watch & More{' '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 10, borderTopWidth: 1, borderTopColor: '#dddddd'},
  innerContainer: {},
  title: {fontSize: 18, color: '#000000', padding: 10, fontWeight: 'bold'},
  row: {flexDirection: 'row'},
  brand: {width: '50%', padding: 10},
  imgStyle: {height: 150, width: '100%'},
  branndTitle: {color: '#000000', fontSize: 12, marginTop: 4},
});
