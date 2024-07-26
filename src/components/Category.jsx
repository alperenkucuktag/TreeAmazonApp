import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Categories} from '../data/Categories';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import ProductScreen from '../screen/ProductScreen';

export default function Category() {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}>
      {Categories.map(category => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen')}
          key={category.id}
          style={styles.category}>
          <Image style={styles.Imgstyle} source={category.image} />
          <Text style={styles.title}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  container: {
    padding: 10,
  },
  Imgstyle: {
    width: 50,
    height: 50,
  },
  title: {
    color: '#2c4341',
  },
});
