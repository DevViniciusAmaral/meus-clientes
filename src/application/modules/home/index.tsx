import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { Text, View } from 'react-native';

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};
