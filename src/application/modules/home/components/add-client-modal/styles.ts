import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
    gap: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  titleModal: {
    marginBottom: 8,
  },

  saveButton: {
    minHeight: 48,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  saveTextButton: {
    color: theme.colors.background,
  },

  switchRecurrenceButtonsContainer: {
    gap: 4,
  },

  switchRecurrenceButtonsContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  switchButton: {
    flexDirection: "row",
    alignItems: "center",
  },
}));
