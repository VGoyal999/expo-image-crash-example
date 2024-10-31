import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(modals)/crash-svg"
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="(modals)/working-svg"
        options={{ presentation: "modal" }}
      />
    </Stack>
  );
}
