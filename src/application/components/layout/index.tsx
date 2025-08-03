import React, { useEffect } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import {
  View,
  ScrollViewProps,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  setStatusBarStyle,
  setStatusBarBackgroundColor,
} from "expo-status-bar";

interface LayoutProps extends ScrollViewProps {
  safeTopEnabled?: boolean;
  safeBottomEnabled?: boolean;
  statusBar?: { style: "dark" | "light"; color: string };
}

export const Layout = ({
  safeTopEnabled,
  safeBottomEnabled,
  scrollEnabled,
  style,
  statusBar,
  ...rest
}: LayoutProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const { top, bottom } = useSafeAreaInsets();
  const paddingTop = safeTopEnabled ? top : 0;
  const paddingBottom = safeBottomEnabled ? bottom : 0;

  const behavior = Platform.OS === "ios" ? "padding" : "height";

  useEffect(() => {
    setStatusBarStyle(statusBar?.style ?? "dark");
    setStatusBarBackgroundColor(statusBar?.color ?? theme.colors.background);
  }, []);

  return (
    <KeyboardAvoidingView
      enabled
      behavior={behavior}
      style={styles.container(paddingTop, paddingBottom)}
    >
      {scrollEnabled ? (
        <ScrollView {...rest} />
      ) : (
        <View {...rest} style={[styles.content, style]} />
      )}
    </KeyboardAvoidingView>
  );
};
