import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_500Medium } from "@expo-google-fonts/inter";



export default function Registro ({navigation}){
    
    const [form, setForm] = React.useState({
        
        nomeCompleto: '',
        email: '',
        senha: '',
        confirmeSuaSenha:'',
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
        
        <View style={{flex:1, backgroundColor: 'white'}}>
           <SafeAreaView style={{  flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: '4%' }}>
      <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start',paddingLeft: '2%' }} onPress={() => navigation.goBack()}>
        <Icon name="angle-left" solid size={50} color="#484848" />
      </TouchableOpacity>

      <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Inter_700Bold', color: '#484848', fontSize: RFValue(90, 2400) }}>Registre-se</Text>
      </View>

      <View style={{ flex: 1 }} />
    </SafeAreaView>
            

            <View style={styles.container}>

               

            <View style={styles.otterFormsContainer}>
                      <TouchableOpacity style={styles.btnSocialMedia}>
                        <View style={styles.iconsMedia}>
                          <Icon name="google" solid size={20} color="#484848" />
                          <Text>Google</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnSocialMedia}>
                        <View style={styles.iconsMedia}>
                          <Icon name="facebook" solid size={20} color="#484848" />
                          <Text>Facebook</Text>
                        </View>
                      </TouchableOpacity>
                   </View>

                   <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{paddingTop:'5%',paddingBottom: -40, fontFamily: 'Inter_400Regular',color: '#727272'}}>Ou registre-se usando Email</Text>
                   </View>

            <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>NOME COMPLETO</Text>

                                <TextInput 
                                    autoCapitalize="none"
                                    autoCorrect={false}                                                                       
                                    value={form.nomeCompleto}
                                    onChangeText={nomeCompleto => setForm({...form, nomeCompleto })} 
                                    style={styles.inputControl}
                                />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>EMAIL</Text>

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
                            <Text style={styles.inputLabel}>SENHA</Text>

                                <TextInput 
                                    secureTextEntry
                                    value={form.senha}
                                    onChangeText={senha => setForm({...form, senha })} 
                                    style={styles.inputControl}
                                />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>CONFIRME SUA SENHA</Text>

                                <TextInput 
                                    secureTextEntry
                                    value={form.confirmeSuaSenha}
                                    onChangeText={confirmeSuaSenha => setForm({...form, confirmeSuaSenha })} 
                                    style={styles.inputControl}
                                />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() =>{ }}>
                        <View style={styles.novaContaContainer}>
                            <Text style={styles.novaConta}>Eu aceito os<Text style={{color:'#5B5B5B',fontFamily: 'Inter_700Bold'}}> Termos de uso</Text></Text>
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.btnLogin}>
                            <Text style={styles.btnLoginText}>Criar Minha Conta</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.entrarContainer}>
                            <Text style={styles.entrar}>Já tem Conta? <Text style={{color:'#3ADB5D',fontFamily: 'Inter_700Bold'}}> Entrar</Text></Text>
                        </View>  
                    </TouchableOpacity>

                   

            </View>
        
        
        </View>
    );
}


const styles = StyleSheet.create ({

   container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent:'center',   
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 10, // Espaçamento opcional para o conteúdo do footer
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

   },

   otterFormsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 13,
    alignItems: 'center',

   },

   btnSocialMedia: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 9,
      paddingHorizontal: 50,
      paddingVertical: '4%',
      borderColor: '#AEAEAE',

   },

   iconsMedia: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    fontFamily: 'Inter_400Regular',
   },
   
   icon: {
    marginLeft: '5%',
    marginTop: '3%',
    
   },

   form: {
    marginTop: '15%',//50,
  },

  input: {
    marginBottom: '8%' //50,
  },

  inputControl: {
    height: 50,
    borderWidth: 1,
    borderColor: '#AEAEAE', // Altere para a cor desejada
    fontSize: RFValue(50, 2400),
    color: '#727272', // 'white' não '#white'
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
    textDecorationLine: 'none',
    borderRadius: 9,
    paddingLeft: 10,
    
    
  },

  inputLabel: {
    color: '#A1A1A1',
    zIndex: 9,
    fontSize: RFValue(40, 2400),
    fontFamily: 'Inter_700Bold', 
    paddingBottom: 4,  
  },

  novaContaContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',

  },

  novaConta: {
    color: '#727272',
    fontFamily: 'Inter_500Medium',
    fontSize: RFValue(40, 2400)
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

  entrar: {
    fontFamily: 'Inter_400Regular',
    color: '#727272',
    fontSize: RFValue(45, 2400),
  },

  entrarContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: '5%',
  }

})

