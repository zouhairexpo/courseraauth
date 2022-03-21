import  React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
export const SignUp = ({navigation}) => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
    const onRegister=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(user=>navigation.navigate('Todo',{user:user}))
    }
  return (
    <View style={{flex:1,marginHorizontal:5}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><Text>Go back</Text></TouchableOpacity>
      <View style={{ alignSelf: 'center', marginVertical: 100 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
            letterSpacing: 1,
          }}>
          Coursera
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 13 }}>
          Creer un compte
        </Text>
      </View>
      <View>
        <TextInput
        value={email}
    
          style={{
            height: 40,
            backgroundColor: 'white',
            lineHeight: 22,
            fontSize: 16,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: 'rgb(59, 59, 59)',
            paddingLeft: 10,
            marginBottom: 20,
          }}
          placeholder="Adresse e-mail(requise)"
          placeholderTextColor="rgb(59, 59, 59)"
          onChangeText={setEmail}
        />
        <TextInput
          style={{
            height: 40,
            backgroundColor: 'white',
            lineHeight: 22,
            fontSize: 16,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: 'rgb(59, 59, 59)',
            paddingLeft: 10,
            marginBottom: 20,
          }}
          placeholder="mot de passe(requise)"
          placeholderTextColor="rgb(59, 59, 59)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
        onPress={onRegister}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            backgroundColor: 'rgb(0, 86, 210)',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: 'rgb(255, 255, 255)',
              lineHeight: 24,
            }}>
            Creer un compte
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};