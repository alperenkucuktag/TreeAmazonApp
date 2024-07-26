import {StyleSheet, TextInput, View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import React, {useState, useEffect, useRef} from 'react';
import Voice from '@react-native-voice/voice';

export default function HEADER() {
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
    console.log('Ses sonuçları:', text);
    setSearchQuery(text);
    resetTimeout();
  };

  const onSpeechEndHandler = () => {
    console.log('Ses dinleme bitti');
    setIsListening(false);
  };

  const onSpeechErrorHandler = e => {
    console.error('Hata:', e.error);
    setErrorMessage(e.error.message);
    setIsListening(false);
  };

  const startListening = async () => {
    try {
      setIsListening(true);
      setIsLoading(true);
      await Voice.start('tr-TR');
      resetTimeout();
    } catch (error) {
      console.error('Dinleme hatası:', error);
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
      console.error('Durdurma hatası:', error);
      setErrorMessage(error.message);
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      console.log('Ses alınmadı, dinleme durduruluyor');
      stopListening();
    }, 3000); // 3 saniye
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
        <View style={styles.inputBox}>
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
            onChangeText={setSearchQuery}
          />
          <MaterialIcons
            name="qr-code-scanner"
            size={22}
            color="#909594"
            style={styles.icon}
          />
        </View>
        {isListening ? (
          isLoading ? (
            <ActivityIndicator size="small" color="#ff0000" />
          ) : (
            <SimpleLineIcons
              name="microphone"
              size={22}
              color="#ff0000"
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
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#a1bcc0',
    padding: 5,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    padding: 5,
    marginLeft: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
});
