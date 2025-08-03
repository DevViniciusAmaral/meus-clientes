import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { StyleProp, View, ViewStyle } from "react-native";
import { TextInput, TextInputProps } from "../base/text-input";
import { Search } from "lucide-react-native";

interface SearchbarProps extends TextInputProps {
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const Searchbar = ({
  contentContainerStyle,
  ...rest
}: SearchbarProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <TextInput {...rest} />
      <Search size={20} color={`${theme.colors.typography}40`} />
    </View>
  );
};
