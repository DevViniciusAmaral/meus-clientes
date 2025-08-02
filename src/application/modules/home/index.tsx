import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { Text } from 'react-native';
import { Layout } from '@/application/components/layout';

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Layout style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </Layout>
  );
};
