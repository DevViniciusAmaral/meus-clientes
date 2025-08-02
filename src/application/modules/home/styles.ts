import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontFamily: theme.fonts.bold,
    fontSize: 50,
  },
}));
