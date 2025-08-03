import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { View } from "react-native";
import { TextInput, TextInputProps } from "../base/text-input";
import { Text } from "../base/text";

interface InputProps extends TextInputProps {
  label?: string;
}

export const Input = ({ label, style, ...rest }: InputProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      {label && <Text>{label}</Text>}
      <TextInput {...rest} style={[styles.input, style]} />
    </View>
  );
};
