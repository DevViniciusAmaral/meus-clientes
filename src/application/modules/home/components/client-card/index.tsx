import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { View } from 'react-native';
import { IClient } from '@/application/models/Client';
import { Text } from '@/application/components/base/text';

export const ClientCard = (client: IClient) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text weight="medium">{client.name}</Text>
    </View>
  );
};
