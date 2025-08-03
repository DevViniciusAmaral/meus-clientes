import { PixelRatio } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  input: (size: number, fontFamily: string) => ({
    flex: 1,
    fontFamily,
    color: theme.colors.typography,
    fontSize: PixelRatio.getFontScale() * size,
  }),
}));
