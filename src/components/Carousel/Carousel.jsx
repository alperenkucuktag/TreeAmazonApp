import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Slider} from '../../data/Slider';
import React from 'react';

export default function Carousel() {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        showsPagination={false}
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}>
        {Slider.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.İmgStyle} source={item.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  İmgStyle: {
    height: 250,
    width: '100%',
  },
  carouselContainer: {
    position: 'relative',
  },
});
