import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"
import { Image } from "react-native"

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/Splash.png")}
        style={styles.image}
        // resizeMode="contain"
      />
    </SafeAreaView>
  )
}

    export default SplashScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  image: {
    width: '100%',
    height: '100%',
  }  
})