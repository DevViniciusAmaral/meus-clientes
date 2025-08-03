import React, { forwardRef } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

export interface TextInputProps extends RNTextInputProps {
  size?: number;
  weight?: "normal" | "medium" | "bold";
}

export const TextInput = forwardRef<any, TextInputProps>(
  ({ size = 14, weight = "normal", style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    const fontFamily = {
      normal: theme.fonts.regular,
      medium: theme.fonts.medium,
      bold: theme.fonts.bold,
    }[weight];

    return (
      <RNTextInput
        {...rest}
        ref={ref}
        style={[styles.input(size, fontFamily), style]}
        placeholderTextColor={`${theme.colors.typography}40`}
      />
    );
  }
);
