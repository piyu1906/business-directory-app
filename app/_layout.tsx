import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { ActivityIndicator } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    appFont: require("@/assets/fonts/Montserrat-Regular.ttf"),
    appFontBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
  });
  const colorScheme = useColorScheme();

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
