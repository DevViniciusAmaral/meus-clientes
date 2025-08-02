import { UnistylesRegistry } from "react-native-unistyles";
import { appThemes } from "./AppThemes";

UnistylesRegistry.addThemes(appThemes).addConfig({
  adaptiveThemes: true,
});
