import  React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'; 
import RestPassword from '../components/RestPassword';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";

export const Login = ({navigation}) => {
    const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
    const [modalVisible, setModalVisible] = React.useState(false);

    const onLogin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((user)=>navigation.navigate('Todo',{user:user}))

    }
    const resetPassword=()=>{
        sendPasswordResetEmail(auth, email)
        setModalVisible(!modalVisible);

    }
  return (
    <View style={{flex:1,marginHorizontal:5}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      ><RestPassword onReset={resetPassword}  onHide={() => setModalVisible(!modalVisible)}/></Modal>
      <View style={{ marginVertical: 100, marginHorizontal: 5 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
            letterSpacing: 1,
            textAlign: 'center',
          }}>
          Coursera
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 14,lineHeight:20,textAlign:'center' }}>
          Suivez les meilleurs cours en ligne au monde,proposes par des
          universites et des partenaires du secteur de premier plan
        </Text>
      </View>
      <TextInput
      value={email}
      onChangeText={setEmail}
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
      />
      <TextInput
      value={password}
      onChangeText={setPassword}
        style={{
          height: 40,
          backgroundColor: 'white',
          lineHeight: 22,
          fontSize: 16,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: 'rgb(59, 59, 59)',
          paddingLeft: 10,
          marginBottom: 3,
        }}
        placeholder="mot de passe(requise)"
        placeholderTextColor="rgb(59, 59, 59)"
      />
      <TouchableOpacity         onPress={() => setModalVisible(true)}
 style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: 'right', color: 'rgb(42, 115, 204)' }}>
          mot de passe oublié
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={onLogin}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 46,
          backgroundColor: 'rgb(0, 86, 210)',
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'rgb(255, 255, 255)',
            lineHeight: 24,
          }}>
          Connexion
        </Text>
      </TouchableOpacity>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: 'grey',
              flex: 0.5,
            }}
          />
          <Text style={{ marginHorizontal: 5, color: 'rgb(97, 97, 97)' }}>
            ou
          </Text>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: 'grey',
              flex: 0.5,
            }}
          />

          <View />
        </View>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 46,
          backgroundColor: 'white',
          borderColor: 'rgb(31, 31, 31)',
          borderWidth: 1,
          borderRadius: 5,
          flexDirection:'row',
          
        }}>
        <AntDesign name="google" size={24} color="black" style={{marginRight:10}} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'rgb(31, 31, 31)',
            lineHeight: 24,
          }}>
          Continuer avec Google
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 16,
        }}>
        <Text>Vous débutez chez Coursera ?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
          <Text style={{ color: 'rgb(42, 115, 204)' }}> Sinscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};