import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostListScreen from '../screens/PostListScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="postListScreen">
      <Stack.Screen name="postListScreen" component={PostListScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
