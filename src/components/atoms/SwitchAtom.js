// import React from 'react';
// import { View, Text, Switch, StyleSheet } from 'react-native';

// const SwitchAtom = ({ label, value, onValueChange }) => (
//   <View style={styles.switchContainer}>
//     <Text style={styles.label}>{label}</Text>
//     <Switch value={value} onValueChange={onValueChange} />
//   </View>
// );

// const styles = StyleSheet.create({
//   switchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   label: {
//     marginRight: 10,
//   },
// });

// export default SwitchAtom;

import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SwitchAtom = ({ label, value, onValueChange }) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <Switch value={value} onValueChange={onValueChange} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    fontSize: 14,
  },
});

export default SwitchAtom;

