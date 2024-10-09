// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import LoginTemplate from '../template/LoginTemplate';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  

//   const handleLogin = () => {
//     if (username === 'sona' && password === '123') {
//       Alert.alert('Login Successful', `Welcome, ${username}!`);
//     } else {
//       Alert.alert('Login Failed', 'Invalid username or password');
//     }
//   };

//   return (

//     <LoginTemplate
//       username={username}
//       setUsername={setUsername}
//       password={password}
//       setPassword={setPassword}
//       isPasswordVisible={isPasswordVisible}
//       setIsPasswordVisible={setIsPasswordVisible}
//       handleLogin={handleLogin}
//     />
//   );
// };

// export default LoginScreen;


import React from 'react';
import LoginTemplate from '../template/LoginTemplate';
import { Alert } from 'react-native';

const LoginScreen = () => {
  const handleLogin = (username, password) => {
    if (username === 'sona' && password === '123') {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return <LoginTemplate onLogin={handleLogin} />;
};

export default LoginScreen;

