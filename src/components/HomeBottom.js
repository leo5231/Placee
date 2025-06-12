import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';


export default function HomeBottom ({size, color, focused}) {
    return (
        <View style={[styles.container, {backgroundColor: focused ? '#3ADC5D' : '#B5B5B5'}]}>
             <FontAwesome6 name="house" color={color} size={size} />
        </View>
    );
}


const styles = StyleSheet.create ({

container: {
height: 45,
width: 90,
borderRadius: 30,
justifyContent: 'center',
alignItems: 'center',
//backgroundColor: '#3ADC5D',
marginBottom: '50%',
},

})