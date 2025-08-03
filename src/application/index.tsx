import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./modules/home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ToastManager from "toastify-react-native";

export const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <GestureHandlerRootView>
        <Home />
        <ToastManager />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
