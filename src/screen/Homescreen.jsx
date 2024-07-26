import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import HEADER from '../components/Header';
import Subheader from '../components/Subheader';
import Category from '../components/Category';
import Carousel from '../components/Carousel/Carousel';
import Services from '../components/Services';
import {SafeAreaView} from 'react-native-safe-area-context';
import Deal from '../components/Deal';
import Brands from '../components/Brands';

export default function Homescreen() {
  return (
    <SafeAreaView>
      <ScrollView showsHorizontallScrolIndicator={false}>
        <HEADER />
        <Subheader />
        <Category />
        <Carousel />
        <Services />
        <Deal />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
