import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const RestPassword = ({onHide,onReset}) => {
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          margin: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          alignItems: 'flex-end',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          width:'100%',
        }}>
        <TextInput
          style={{
            height: 40,
            width:'100%',
            backgroundColor: 'white',
            lineHeight: 22,
            fontSize: 16,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: 'rgb(59, 59, 59)',
            paddingLeft: 10,
            marginBottom: 20,
            
          }}
          placeholder="Adresse Mail"
          placeholderTextColor="rgb(59, 59, 59)"
        />
        <View style={{flexDirection:'row',paddingHorizontal:5}}>
          <TouchableOpacity style={{padding:5,marginRight:10}} onPress={onHide}>
            <Text>ANNULER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onReset} style={{backgroundColor:'grey',padding:5}}>
            <Text style={{color:'white'}}>CONTINUER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RestPassword;