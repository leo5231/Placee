import { icon } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect } from "react";
import { StyleSheet,Text, TouchableOpacity, View, TextInput, input, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from "@react-navigation/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";
import MapView, {Marker} from "react-native-maps";
import MarkerIcon from '../../../assets/marker.png';

export default function Home () {

    const [location, setLocation] = useState  (null);

    async function requestLocationPermissions (){
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted){
       const currentPosition = await getCurrentPositionAsync();
       setLocation (currentPosition);
       
      }
    }

    useEffect (() =>{
      requestLocationPermissions ();
    },[] );

    const [form, setForm] = React.useState({
        
        pesquisar: '',
        
      });

      const [isFocused, setIsFocused] = useState(false);

    return (
        
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.pesquisarContainer}>
              <FontAwesome name="search" size={24} color="white" />
            <View style={styles.input}>
            {!(isFocused || form.nomeCompleto) && (
              <Text style={styles.inputLabel}>| Procurar</Text>
            )}
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              value={form.nomeCompleto}
              onChangeText={nomeCompleto => setForm({ ...form, nomeCompleto })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={styles.inputControl}
            />
            </View>
          </View>
        </View>
      <View style={styles.inputLabel}>
        <Text></Text>
      </View>

      <View style={styles.mapContainer}>
            {
            location && 
            <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            > 
            
            <Marker
              coordinate={{
               latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            >
              <Image source={require('../../../assets/marker.png')} style={{ width: 40, height: 40 }} />
            
            </Marker>
            
            </MapView>
            }  
      </View>

    </View>
  );
};



const styles = StyleSheet.create ({

    container: {
       flex: 1,
    },

    header: {
        backgroundColor: '#3ADA5C',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '25 %',
        alignItems: 'flex-start',  
        borderBottomRightRadius: 30,
        borderBottomLeftRadius:30,
        zIndex: 9,
          
         
        
    },

    input: {
        //marginBottom: '8%' //50,

        
      },
    
      inputControl: {
        height: 30,                
        fontSize: RFValue(50, 2400),
        color: 'white', // 'white' não '#white'
        fontFamily: 'Inter_500Medium',
        textDecorationLine: 'none',
        paddingLeft:22,
        width: 300,
        paddingBottom: 4,
        
      },
    
      inputLabel: {
        color: 'rgba(255, 255, 255, 0.46)',
        width:110,
        //zIndex: 9,
        fontSize: RFValue(50, 2400),
        fontFamily: 'Inter_500Medium', 
        position: 'absolute',
        lineHeight: 24,
        marginHorizontal: 12,
        paddingTop: 2,   
          
      },

      pesquisarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        paddingHorizontal: 30,
        
        
      },

      mapContainer: {
        flex: 1,
      },
      
      map: {
        flex: 1,
        width: '100%',
      },



})