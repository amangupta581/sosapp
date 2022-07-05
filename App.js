import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import { StackNavigator } from 'react-navigation';
import Login from './src/components/login/login';
import Home from './src/components/home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function MyStack() {
  // return (
  //   <View>

  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //     <Text>uh</Text>
  //   </View>
  // )
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default class App extends React.Component {
//   render() {
//     return <View><Text>Hi</Text></View>
//   }
// }
// const AppNavigator = StackNavigator({
//   Login: { screen: Login },
//   Home: { screen: Home },

// });
