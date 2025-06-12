import React from "react";
import {ScrollView, StyleSheet, View, SafeAreaView, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView, StatusBar} from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_500Medium } from "@expo-google-fonts/inter";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export default function Login ({navigation}) {
    
    const [form, setForm] = React.useState({
        email: '',
        senha: '',
      });

    const [fontLoaded] = useFonts({
        Inter_400Regular, 
        Inter_700Bold, 
        Inter_500Medium,
      })
    
      if (!fontLoaded) {
        return null;
      }
    
    return (
       
           <View style={styles.container}>
           <StatusBar style="auto"  />
                <View style={styles.headerContainer}>
                    <View style={styles.headerIcon}>
                        <Image style={styles.logoImage} source={require("../../../assets/logologin.png")}/>
                            <View style={styles.textContainer}>
                                <Text style={styles.headerText}>Placee,</Text>
                                <Text style={styles.headerSubText}>Encontre-se.</Text>
                            </View>
                    </View>

                    <View style={styles.headerImage}>
                        <Image style={styles.peopleImage} source={require("../../../assets/pessoaslogin.png")}/>
                    </View>
                </View>
                
                <View style={styles.footer}>               
                    
                    <View style={styles.title}>
                        <Text style={styles.texto}>Você chegou ao <Text style={{color: '#3ADC5D'}}>Placee</Text>!</Text>
                        <Text style={styles.subtexto}>Encontre sua festa favorita</Text>
                    </View>  
                  
                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Email</Text>

                                <TextInput 
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    value={form.email}
                                    onChangeText={email => setForm({...form, email })} 
                                    style={styles.inputControl}
                                />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Senha</Text>

                                <TextInput 
                                    secureTextEntry
                                    value={form.senha}
                                    onChangeText={senha => setForm({...form, senha })} 
                                    style={styles.inputControl}
                                />
                        </View>
                    </View>
                
                    <TouchableOpacity onPress={() =>{ }}>
                        <View style={styles.requestSenhaContainer}>
                            <Text style={styles.requestSenha}>Esqueci minha senha</Text>
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                        <View style={styles.btnLogin}>
                            <Text style={styles.btnLoginText}>AVANÇAR</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.otterTextContainer}>
                        <Text style={styles.otterText}>Outras Formas de Entrar</Text>  
                    </View>

                    <View style={styles.otterFormsContainer}>
            
                        <TouchableOpacity onPress={() =>{}}>
                            <View style={styles.btnOtterForms}>
                                <Image style={{width:'40%', height:'40%',}} source={require("../../../assets/google.png")}/> 
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() =>{}}>
                            <View style={styles.btnOtterForms}>
                                <Image style={{width:'40%', height:'40%',}} source={require("../../../assets/facebook.png")}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() =>{}}>
                            <View style={styles.btnOtterForms}>
                                <Image style={{width:'40%', height:'40%',}} source={require("../../../assets/logotipo-da-apple.png")}/>
                            </View>
                        </TouchableOpacity>
          
                    </View>  
                
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                        <View style={styles.novaContaContainer}>
                            <Text style={styles.novaConta}>Novato ? <Text style={{color:'#3ADB5D',fontFamily: 'Inter_700Bold'}}>Criar uma conta</Text></Text>
                        </View>  
                    </TouchableOpacity>

                </View>
           </View>
        
       
    );
}


const styles = StyleSheet.create ({
 

   container: {
    backgroundColor: '#3ADC5D',
    flex: 1,
    
    
   },

   footer: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '28%',
    paddingVertical: 10, // Espaçamento opcional para o conteúdo do footer
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  title: {
    marginTop: '4%',
  },
  
  texto: {
    fontFamily: 'Inter_700Bold',
    fontSize: RFValue(75, 2400), // 680 é a altura de referência
    textAlign: 'center',
    color: '#3D3D3D'
    
  },

  subtexto: {
    textAlign: 'center',
    fontSize: RFValue(55, 2400),
    color: '#9E9E9E'
  },

  form: {
    marginTop: '15%',//50,
  },

  input: {
    marginBottom: '15%' //50,
  },

  inputControl: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ACACAC', // Altere para a cor desejada
    fontSize: RFValue(50, 2400),
    color: '#727272', // 'white' não '#white'
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
    textDecorationLine: 'none',
    
  },

  inputLabel: {
    color: '#4E4E4E',
    zIndex: 9,
    fontSize: RFValue(45, 2400),
    fontFamily: 'Inter_500Medium',   
  },

  requestSenhaContainer: {
     alignItems: 'flex-end',
     marginTop: '-10%'
     
  },

  requestSenha: {
    color: '#9F9F9F',
    fontFamily: 'Inter_500Medium',
  },

  btnLogin: {
    backgroundColor: '#3ADC5D',
    alignItems: 'center',
    paddingVertical: '5%',//18,
    borderRadius: 30,
    marginTop:  '6%', //20,
    
  },

  btnLoginText: {
    color: "white",
    fontSize: RFValue(50, 2400),
    fontFamily: 'Inter_700Bold',
  },

  otterTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  
  otterText: {
    fontFamily:'Inter_500Medium',
    color: '#727272',
    fontSize: RFValue(40, 2400),
  },

  otterFormsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 70,
    marginVertical: 20,
  },

  btnOtterForms: {
    backgroundColor: 'transparent',
    width:  60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1, // Adiciona uma borda
    borderColor: '#B9B9B9', // Cor da borda
  },

  novaContaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  novaConta: {
    color: '#727272',
    fontFamily: 'Inter_500Medium',
    fontSize: RFValue(45, 2400),
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: '10%',
    marginLeft: 20,
},
headerIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 80,
},
textContainer: {
    marginLeft: 10,
},
logoImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
},
headerText: {
    fontSize: RFValue(60, 2400),
    fontWeight: 'bold',
    color: 'white'
},
headerSubText: {
    fontSize: RFValue(45, 2400),
    color: 'white',
},
headerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    
},
peopleImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
},

})