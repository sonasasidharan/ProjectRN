// src/components/molecules/SwitchContainer.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from '../atoms/TextComponent';
import SwitchAtom from '../atoms/SwitchAtom';

export default function SwitchContainer({ value, onValueChange }) {
  return (
    <View style={styles.container}>
      <TextComponent style={styles.text}>Login</TextComponent>
      
      <SwitchAtom value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008ECC',
    paddingHorizontal: 10,
  },
});
