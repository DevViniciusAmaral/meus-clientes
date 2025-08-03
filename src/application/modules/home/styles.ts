import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
    gap: 16,
  },

  safeAreaView: {
    flex: 1,
  },

  absoluteButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
}));
