import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import SwitchAtom from '../atoms/SwitchAtom';
import LoginForm from '../molicules/LoginForm'; 
import SocialLoginButtons from '../molicules/SocialLoginButtons';
import TextComponent from '../atoms/TextComponent';
import TouchLoginButton from '../molicules/TouchLoginButton';
import Button from '../atoms/Button';

export default function LoginContainer({ 
  username, 
  setUsername, 
  password, 
  setPassword, 
  isPasswordVisible, 
  setIsPasswordVisible, 
  remember, 
  setRemember, 
  handleLogin 
}) {
  return (
    <View style={styles.card}>
      <TextComponent style={styles.title}>Login</TextComponent>
      <TextComponent style={styles.policyText}>
        By signing in you are agreeing to our{' '}
        <TextComponent style={styles.link}>Terms and privacy policy</TextComponent>
      </TextComponent>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Login</Text>
        <Text style={[styles.switchText, styles.inactiveText]}>Register</Text>
      </View>

      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
        handleLogin={handleLogin}
      />

<View style={styles.optionsContainer}>
        <SwitchAtom label="Remember password" value={remember} onValueChange={setRemember} />
        <TouchableOpacity  onPress={() => Alert.alert('Forgot Password', 'Please reset your password')}>
          <Text style={styles.forgotText}>Forget password</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={handleLogin} />

      <TextComponent style={styles.connectText}>or connect with</TextComponent>
      <SocialLoginButtons />
      <View style={styles.container}>
        <TouchLoginButton onPress={() => Alert.alert('Touch Login', 'Login with touch ')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    width: '90%',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    marginLeft:20,
    marginTop:40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  policyText: {
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 10,
  },
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  forgotText: {
    color: '#1E90FF',
    fontSize: 12,
  },
  connectText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
  },
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#008ECC',
  },
  inactiveText: {
    color: '#888',
  },
});
