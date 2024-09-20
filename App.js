import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome} from '@expo/vector-icons';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaSobre";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Tabs.Navigator
      screenOptions={{

        headerStyle: {
          backgroundColor: '#4530b2'
        },
    
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold'
        },
    
        headerTitleAlign: 'center',
    

        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: "#eab990",
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        tabBarActiveBackgroundColor: "#e07d42",
        tabBarInactiveTintColor: "#f00",
        tabBarActiveTintColor: "#150b13",
        tabBarLabelPosition: 'beside-icon',
      }}
      >

        <Tabs.Screen name="Início" component = { TelaInicial } options={{tabBarIcon: ({color}) => (<Entypo name="home" color={ color } size={24} />),}}/>
        <Tabs.Screen name="Sobre" component = { TelaSobre }  options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="question-circle-o" color={ color } size={ 24 } />
            ),
          }} />
      </Tabs.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  )
};