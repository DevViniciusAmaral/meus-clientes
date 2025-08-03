import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 8,
  },

  switch: (isActive: boolean) => ({
    width: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: isActive ? theme.colors.primary : `${theme.colors.typography}50`,
    padding: 2,
    backgroundColor: isActive ? theme.colors.primary : "transparent",
  }),

  circle: (isActive: boolean) => ({
    width: 20,
    height: 20,
    borderRadius: 100,
    alignSelf: isActive ? "flex-end" : "flex-start",
    backgroundColor: isActive ? theme.colors.background : `${theme.colors.typography}50`,
  }),
}));
