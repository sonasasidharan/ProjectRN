// src/components/molecules/TouchLoginButton.js
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';

export default function TouchLoginButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.touchLoginButton}>
      <View style={styles.overlay}>
        <ImageBackground source={require('../../../assets/16.jpg')} style={styles.footerBackground} resizeMode='cover' />
        <ImageBackground source={require('../../../assets/15.png')} style={styles.footerBack} resizeMode='cover' />
        <TouchableOpacity onPress={onPress}>
          <Image source={require('../../../assets/8.png')} style={styles.touchIcon} />
        </TouchableOpacity>
        <Text style={styles.touchLoginText}>Login with touch</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchLoginButton: {
    alignItems: 'center',
  },
  overlay: {
    position: 'relative',
    width: 290,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerBackground: {
    position: 'absolute',
    width: 250,
    height: 100,
  },
  footerBack: {
    position: 'absolute',
    width: 324,
    height: 140,
    borderRadius: 20,
    overflow: 'hidden',
  },
  touchIcon: {
    width: 60,
    height: 90,
  },
  touchLoginText: {
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
