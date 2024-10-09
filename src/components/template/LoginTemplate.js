// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// import LoginContainer from '../organisms/LoginContainer';

// const LoginTemplate = (props) => (
//   <View style={styles.container}>
//     <LoginContainer {...props} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#475D72',
//   },
// });

// export default LoginTemplate;


import React, { useState } from 'react';
import { View,Alert } from 'react-native';
import LoginContainer from '../organisms/LoginContainer';


export default function LoginTemplate() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    // // Handle login logic here
    // console.log('Logging in with:', { username, password, remember });
    if (username === 'sona' && password === '123') {
        Alert.alert('Login Successful', `Welcome, ${username}!`);
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    };
  

  return (
    <View>
      <LoginContainer
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
        remember={remember}
        setRemember={setRemember}
        handleLogin={handleLogin}
      />
    </View>
  );
}
