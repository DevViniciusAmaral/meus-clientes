import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.primary,
  },

  title: {
    color: theme.colors.background,
  },
}));
