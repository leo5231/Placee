import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile ({ navigation }){
    // Placeholders para nome e email
    const nomeCompleto = "Nome do Usuário";
    const email = "usuario@email.com";

    const handleLogout = () => {
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Meu Perfil</Text>
            </View>
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: 'https://ui-avatars.com/api/?name=User&background=3ADC5D&color=fff&size=256' }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nome Completo</Text>
                <Text style={styles.info}>{nomeCompleto}</Text>
                <Text style={styles.label}>E-mail</Text>
                <Text style={styles.info}>{email}</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Icon name="sign-out" size={24} color="#fff" style={{ marginRight: 10 }} />
                <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 60,
    },
    header: {
        marginBottom: 30,
    },
    title: {
        fontSize: RFValue(60, 2400),
        fontWeight: 'bold',
        color: '#3ADC5D',
    },
    avatarContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#3ADC5D',
    },
    infoContainer: {
        width: '80%',
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        padding: 20,
        marginBottom: 40,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        color: '#3ADC5D',
        fontWeight: 'bold',
        fontSize: RFValue(35, 2400),
        marginTop: 10,
    },
    info: {
        color: '#484848',
        fontSize: RFValue(40, 2400),
        marginBottom: 10,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3ADC5D',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 20,
    },
    logoutText: {
        color: '#fff',
        fontSize: RFValue(40, 2400),
        fontWeight: 'bold',
    },
});