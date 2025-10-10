// import CSafeAreaView from "../../components/CSafeArea"
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const Favorite = ()=>{
    return(
        <SafeAreaView>
            <Link href="/(tabs)/browse">
                <Text>Orders</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Your Favourites</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Restaurant Rewards</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Wallet</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Send a Gift</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Business Preferences</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Help</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>promotions</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Uber Pass</Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Deliver with uber </Text>
            </Link>
            <Link href="/(tabs)/browse">
                <Text>Settings</Text>
            </Link>
        </SafeAreaView>
    )
}

export default Favorite;