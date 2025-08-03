import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    gap: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  addButton: {
    width: "80%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    marginTop: 8,
    borderRadius: 12,
  },

  addTextButton: {
    color: theme.colors.background,
    textTransform: "uppercase",
  },
}));
