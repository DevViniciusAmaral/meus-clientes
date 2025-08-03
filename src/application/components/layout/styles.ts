import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: (paddingTop: number, paddingBottom: number) => ({
    flexGrow: 1,
    paddingTop,
    paddingBottom,
    backgroundColor: theme.colors.background,
  }),

  content: {
    flex: 1,
  },
}));
