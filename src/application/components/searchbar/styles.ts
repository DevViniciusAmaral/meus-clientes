import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    minHeight: 48,
    paddingHorizontal: 16,
    backgroundColor: `${theme.colors.typography}10`,
    borderRadius: 12,
  },
}));
