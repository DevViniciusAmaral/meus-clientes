import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 4,
    width: "100%",
  },

  input: {
    flex: 1,
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: `${theme.colors.typography}10`,
    paddingHorizontal: 16,
  },
}));
