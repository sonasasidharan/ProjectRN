import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import InputField from '../atoms/InputField';

const LoginForm = ({ 
  username, 
  setUsername, 
  password, 
  setPassword, 
  isPasswordVisible, 
  setIsPasswordVisible 
}) => (
  <View>
    {/* Username Input Field */}
    <InputField
      iconSource={require('../../../assets/1.png')}
      placeholder="User name"
      value={username}
      onChangeText={setUsername}
    />

    {/* Password Input Field with Visibility Toggle */}
    <View style={styles.passwordContainer}>
      <InputField
        iconSource={require('../../../assets/2.png')}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
        style={styles.passwordInput}
      />
      <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
        <Image source={require('../../../assets/7.webp')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    marginVertical: 10,
    justifyContent:'space-around',
  },
  passwordInput: {
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default LoginForm;