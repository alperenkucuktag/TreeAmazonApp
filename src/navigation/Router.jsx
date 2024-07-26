import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from '../screen/Homescreen';
import ProductScreen from '../screen/ProductScreen';
import Qrscreen from '../screen/qrscreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Qrscreen"
          component={Qrscreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
