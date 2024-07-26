import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AmazonPay from '../Assets/amazon-pay.png';
import SendMoney from '../Assets/send-money.jpg';
import SCANQR from '../Assets/scan-qr.jpeg';
import Paybills from '../Assets/pay-bills.jpeg';
import {RecentSearchData} from '../data/RecentSearchData';
import ServicesCar from './ServicesCar';
export default function Services() {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.imgStyle} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.imgStyle} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={SCANQR} style={styles.imgStyle} />
            <Text style={styles.title}>ScanQr</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={Paybills} style={styles.imgStyle} />
            <Text style={styles.title}>Payybills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map(recentsearchdata => (
        <ServicesCar recentsearchdata={recentsearchdata} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -80,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 10,
    color: '#000000',
    marginTop: 2,
  },
});
