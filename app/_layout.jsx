import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
              <Stack.Screen name="(tabs)" />
              {/* <Stack.Screen name="(tabs)/favorites" options={{headerShown:false}}/>
              <Stack.Screen name="(tabs)/history" options={{headerShown:false}}/>
              <Stack.Screen name="(tabs)/profile" options={{headerShown:false}}/> */}
          </Stack>;
}
