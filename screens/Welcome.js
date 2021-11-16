import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, ImageBackground, Image, StyleSheet, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Welcome (params) {
  const navigation = params.navigation;

  return (
    <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.bgImage} source={require('../assets/e.jpg')}>
              <View style={{marginLeft: '10%', marginBottom: '5%'}}>
              <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontWeight: "bold", fontSize: 17,}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{fontWeight: "bold", fontSize: 17,}}>Sign up</Text>
              </TouchableOpacity>
              </View>
            </ImageBackground>
        <StatusBar style={"auto"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    continueBtn: {
        backgroundColor: '#ffblf',
        padding: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        margin: 10,
        width: 300,
        alignItems: "center",
    },
    
    bgImage:{
      flex: 1,
      position: 'relative',
      width: '100%',
      height: '100%',
      justifyContent: "center",
      
    },
  }); 