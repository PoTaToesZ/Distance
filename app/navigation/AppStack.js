import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';
import { Menu,Test } from '@app/screen/distance';
const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={AppBottomTab} />
      <Stack.Screen name="ListLoaiDichVuScreen" component={ListLoaiDichVuScreen} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default AppStack;
