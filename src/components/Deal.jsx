import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RecommendProduct from '../Assets/recommend.jpg';

export default function Deal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Deal For You</Text>
      <Image source={RecommendProduct} style={styles.imgStyle} />
      <View style={styles.bottomsection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.ofdeallbtn}>
            <Text style={styles.ofdeall}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discount}>1,600 ₺</Text>
          <Text style={styles.actualPrice}>1,900 ₺</Text>
        </View>
        <Text style={styles.Productname}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.alldeals}>See all Deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgStyle: {height: 250, width: '100%', marginVertical: 10},
  container: {marginTop: 20},
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  bottomsection: {
    padding: 18,
  },
  deal: {
    color: '#be0201',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 12,
  },
  ofdeall: {fontSize: 12, color: '#fff'},
  ofdeallbtn: {
    backgroundColor: '#be0201',
    width: 60,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  discount: {color: '#000000', fontSize: 16, marginVertical: 5},
  actualPrice: {
    fontSize: 10,
    marginLeft: 7,
    textDecorationLine: 'line-through',
  },
  Productname: {color: '#000000', fontSize: 14},
  alldeals: {
    color: '#017185',
    marginVertical: 10,
    fontSize: 14,
  },
});
