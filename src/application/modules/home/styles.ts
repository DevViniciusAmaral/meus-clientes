import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    // gap: 16,
  },
  
  searchbar: {
    backgroundColor: theme.colors.background,
  },

  header: {
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.primary,
  },

  headerTitle: {
    color: theme.colors.background,
  },

  safeAreaView: {
    flexGrow: 1,
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
    borderWidth: 2,
    borderColor: theme.colors.background,
  },

  item: {
    padding: 16,
  },

  clientListContentContainerStyle: {
    paddingHorizontal: 8,
    paddingBottom: 100,
    paddingTop: 8,
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: `${theme.colors.typography}10`,
  },
}));
