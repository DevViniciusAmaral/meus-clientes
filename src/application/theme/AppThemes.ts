import { darkTheme } from "./DarkTheme";
import { lightTheme } from "./LightTheme";

export const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

export type AppThemes = typeof appThemes;
