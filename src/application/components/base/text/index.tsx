import React, { forwardRef } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

export interface TextProps extends RNTextProps {
  size?: number;
  weight?: "normal" | "medium" | "bold";
}

export const Text = forwardRef<any, TextProps>(
  ({ size = 14, weight = "normal", style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    const fontFamily = {
      normal: theme.fonts.regular,
      medium: theme.fonts.medium,
      bold: theme.fonts.bold,
    }[weight];

    return (
      <RNText
        {...rest}
        ref={ref}
        style={[styles.text(size, fontFamily), style]}
      />
    );
  }
);
