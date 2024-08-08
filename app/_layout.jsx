import { Stack } from "expo-router";
import { UserDataProvider } from "../Provider/UserDataProvider";

export default function RootLayout() {
  return (
    <UserDataProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </UserDataProvider>
  );
}
