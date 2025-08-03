import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  buttonsContainer: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
  },
}));
