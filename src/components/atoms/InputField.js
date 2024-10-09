import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const InputField = ({ iconSource, placeholder, value, onChangeText, secureTextEntry }) => (
  <View style={styles.inputContainer}>
    {iconSource && <Image source={iconSource} style={styles.touchIcon} />}
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderBottomColor: '#ccc',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  touchIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
  },
});

export default InputField;
