// import CSafeAreaView from "../../components/CSafeArea"
import { Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";



const Home = ()=>{
    return(
        <SafeAreaView>
            <View>
                <Text>Delivery</Text>
                <Text>Pickup</Text>
            </View>
            <View>
                <Text>Home</Text>
            </View>
            <Link href="/">
              <Text>Get Started</Text>
             </Link>

        </SafeAreaView>
    )
}

export default Home;