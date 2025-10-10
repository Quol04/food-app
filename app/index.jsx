import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";


export default function Index() {
  return (
    <SafeAreaView>
       <Text>Food App</Text>
       <Text>Welcome to the Food App!</Text>
       <Link href="/(tabs)/home">
        <Text>Get Started</Text>
       </Link>
      
      {/* // <SplashScreen /> */}
    </SafeAreaView>
  );
}
