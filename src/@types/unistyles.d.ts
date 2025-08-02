import { AppThemes } from "@/application/theme/AppThemes";

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
