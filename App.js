import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Registro from './src/pages/registro';
import Home from './src/pages/home';
import Favoritos from './src/pages/favoritos';
import Profile from './src/pages/profile';
import Recentes from './src/pages/recentes';
import Tickets from './src/pages/tickets';
import HomeBottom from './src/components/HomeBottom';
import { Platform } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';




import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator() ;

function Tabs () {
  
  const tabBarHeight = Platform.select({ ios: 90, android: 70 });
  
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarStyle: {backgroundColor: '#E6E6E6',borderTopLeftRadius: 30, borderTopRightRadius:30,height: tabBarHeight, borderTopColor: 'transparent',paddingTop: 10}, tabBarActiveTintColor: '#3ADA5C',}}>           
            <Tab.Screen name="Recentes" component={Recentes} options={{tabBarIcon: ({color}) => (<FontAwesome6 name="clock-rotate-left" size={25} color={color} />) }}/>
            <Tab.Screen name="Favoritos" component={Favoritos} options={{tabBarIcon: ({color}) => (<Icon name="star" size={30} color={color} />) }}/>            
            <Tab.Screen name="Home" component={Home} options={{tabBarLabel: '', tabBarIcon: ({focused}) => (<HomeBottom size={20} color={'white'} focused={focused} />), headerShown: false }}/>           
            <Tab.Screen name="Tickets" component={Tickets} options={{tabBarIcon: ({color}) => (<Ionicons name="ticket" size={30} color={color} />) }} />
            <Tab.Screen name="profile" component={Profile} options={{tabBarIcon: ({color}) => (<Icon name="user" size={30} color={color} />) }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name= "Registro" component={Registro} options={{headerShown: false}}/>
        <Stack.Screen name= "Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name= "Tabs" component={Tabs} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#3ADC5D', 
    marginBottom: '15%', 
  },


});
