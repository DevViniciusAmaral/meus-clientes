import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./modules/home";

export const App = () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};
