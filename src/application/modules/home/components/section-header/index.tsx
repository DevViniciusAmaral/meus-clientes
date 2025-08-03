import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { View } from "react-native";
import { Text } from "@/application/components/base/text";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text size={20} weight="bold" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};
