import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Recentes (){
    return (
        <View style={styles.container}>
            <Text>recentes</Text>
        </View>
    )
}


const styles = StyleSheet.create ({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})