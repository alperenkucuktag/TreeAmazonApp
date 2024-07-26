import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Qrscreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>/alperenkucuktag</Text>
      <QRCode
        value="https://github.com/alperenkucuktag?tab=repositories"
        size={200}
        color="black"
        backgroundColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Qrscreen;
