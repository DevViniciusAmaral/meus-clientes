import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import {
  StyleProp,
  Text,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { Button } from "../base/button";
import { ToggleLeft, ToggleRight } from "lucide-react-native";

interface SwitchButtonProps extends TouchableOpacityProps {
  label?: string;
  isActive?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const SwitchButton = ({
  label,
  style,
  contentContainerStyle,
  isActive = false,
  ...rest
}: SwitchButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.container, contentContainerStyle]}>
      {label && <Text>{label}</Text>}
      <Button {...rest} style={[styles.switch(isActive), style]}>
        <View style={styles.circle(isActive)} />
      </Button>
    </View>
  );
};
