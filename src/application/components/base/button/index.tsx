import React, { forwardRef } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Button = forwardRef<any, TouchableOpacityProps>(
  ({ style, ...rest }, ref) => {
    const { styles } = useStyles(stylesheet);

    return (
      <TouchableOpacity {...rest} ref={ref} style={[styles.button, style]} />
    );
  }
);
