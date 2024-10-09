import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SocialLoginButtons = () => (
  <View style={styles.socialIconsContainer}>
    <Image source={require('../../../assets/3.jpeg')} style={styles.icon} />
    <Image source={require('../../../assets/insta.png')} style={styles.icon} />
    <Image source={require('../../../assets/5.webp')} style={styles.icon} />
    <Image source={require('../../../assets/6.webp')} style={styles.icon} />
  </View>
);

const styles = StyleSheet.create({
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default SocialLoginButtons;
