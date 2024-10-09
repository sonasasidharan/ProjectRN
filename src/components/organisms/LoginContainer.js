import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import SwitchAtom from '../atoms/SwitchAtom';
import LoginForm from '../molicules/LoginForm'; 
import SocialLoginButtons from '../molicules/SocialLoginButtons';
import TextComponent from '../atoms/TextComponent';
import TouchLoginButton from '../molicules/TouchLoginButton';
import Button from '../atoms/Button';
import { useTranslation } from 'react-i18next';
// import i18n from '../../localization/i18next';

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

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <View style={styles.card}>

<View style={styles.languageSwitcher}>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('fr')}>
          <Text style={styles.languageText}>Français</Text>
        </TouchableOpacity>
      </View>

      <TextComponent style={styles.title}>{t('loginTitle')}</TextComponent>
      <TextComponent style={styles.policyText}> {t('policyText')} {' '}
        <TextComponent style={styles.link}>{t('termsPolicy')}</TextComponent>
      </TextComponent>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>{t('login')}</Text>
        <Text style={[styles.switchText, styles.inactiveText]}>{t('register')}</Text>
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
        <SwitchAtom label={t('rememberPassword')} value={remember} onValueChange={setRemember} />
        {/* <TouchableOpacity  onPress={() => Alert.alert({t('ForgotPassword'), 'Please reset your password'})}>
          <Text style={styles.forgotText}>{t.('forgotPassword')}</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => Alert.alert(t('ForgotPassword'), 'Please reset your password')}>
         <Text>{t('ForgotPassword')}</Text>
          </TouchableOpacity>

      </View>
      <Button title={t('login')} onPress={handleLogin} />

      {/* <TextComponent style={styles.connectText}>{t.('orConnectWith')}</TextComponent> */}
      <TextComponent style={styles.connectText}>{t('orConnectWith')}</TextComponent>

      <SocialLoginButtons />
      <View style={styles.container}>
        <TouchLoginButton onPress={() => Alert.alert(t('touchLogin'), 'Login with touch ')} />
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
