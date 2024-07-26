import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Prime from '../Assets/prime-logo.png';
import {ProductData} from '../data/productData';
import Voice from '@react-native-voice/voice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function ProductScreen() {
  const navigation = useNavigation();
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechError = onSpeechErrorHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onSpeechResultsHandler = e => {
    const text = e.value[0];
    setSearchQuery(text);
    resetTimeout();
  };

  const onSpeechEndHandler = () => {
    setIsListening(false);
  };

  const onSpeechErrorHandler = e => {
    setIsListening(false);
  };

  const startListening = async () => {
    try {
      setIsListening(true);
      setIsLoading(true);
      await Voice.start('tr-TR');
      resetTimeout();
    } catch (error) {
      setErrorMessage(error.message);
      setIsListening(false);
      setIsLoading(false);
    }
  };

  const stopListening = async () => {
    try {
      setIsListening(false);
      setIsLoading(false);
      await Voice.stop();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      stopListening();
    }, 3000);
  };

  const filteredProducts = ProductData.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.tagline}>
          Price and other details may vary based on product size and colour
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="search"
            size={22}
            color="#1f1f1f"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ara..."
            placeholderTextColor={'#848484'}
            value={searchQuery}
            onChangeText={text => {
              setSearchQuery(text);
              console.log('Aranan kelime:', text);
            }}
          />
          <MaterialIcons
            name="qr-code-scanner"
            size={22}
            color="#909594"
            style={styles.icon}
            onPress={() => navigation.navigate('Qrscreen')}
          />
          {isListening ? (
            isLoading ? (
              <ActivityIndicator size="small" color="#ffa41c" />
            ) : (
              <SimpleLineIcons
                name="microphone"
                size={22}
                color="#ffa41c"
                style={styles.icon}
                onPress={stopListening}
              />
            )
          ) : (
            <SimpleLineIcons
              name="microphone"
              size={22}
              color="#000000"
              style={styles.icon}
              onPress={startListening}
            />
          )}
        </View>

        {searchQuery ? (
          <Text style={styles.searchQueryText}>
            Aranan Kelime: {searchQuery}
          </Text>
        ) : null}

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        {filteredProducts.map((product, index) => (
          <View style={styles.productSection} key={index}>
            <View style={styles.productImgSection}>
              <Image source={product.image} style={styles.prodImg} />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{product.productName}</Text>
              <View style={styles.row}>
                <Text style={styles.rating}>{product.rating.toFixed(1)}</Text>

                {Array.from({length: 5}).map((_, i) => (
                  <FontAwesome
                    key={i}
                    name={
                      i < Math.floor(product.rating)
                        ? 'star'
                        : i < Math.ceil(product.rating)
                        ? 'star-half-full'
                        : 'star-o'
                    }
                    color="#ffa41c"
                    size={10}
                    style={styles.star}
                  />
                ))}
                <Text style={styles.ratingCount}>({product.ratingCount})</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.price}>{product.price} ₺</Text>
                {product.crossOutText && (
                  <Text style={styles.crossOut}>{product.crossOutText}₺</Text>
                )}
              </View>
              <Text style={styles.cashback}>
                Up to 5% cashback with Amazon Pay Credit card
              </Text>
              <Image source={Prime} style={styles.logo} />
              <Text style={styles.cashback}>{product.deliveryBy}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  tagline: {
    fontSize: 11,
    color: 'grey',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#a1bcc0',
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    padding: 5,
    marginLeft: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  prodImg: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: '#000000',
  },
  productName: {
    fontSize: 12,
    color: '#000000',
    lineHeight: 18,
    marginVertical: 2,
  },
  rating: {
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: '#017185',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    color: '#000000',
    marginRight: 5,
  },
  crossOut: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
  star: {
    marginRight: 2,
  },
  searchQueryText: {
    fontSize: 14,
    color: '#1f1f1f',
    marginVertical: 10,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginVertical: 10,
  },
});
