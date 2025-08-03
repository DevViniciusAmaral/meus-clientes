import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { View } from "react-native";
import { TextInput, TextInputProps } from "../base/text-input";
import { Search } from "lucide-react-native";

export const Searchbar = ({ ...rest }: TextInputProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <TextInput {...rest} />
      <Search size={20} color={`${theme.colors.typography}40`} />
    </View>
  );
};
