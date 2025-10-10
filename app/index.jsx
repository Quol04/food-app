
import Splash from "@/components/splash";
import { useEffect } from "react";
import { router } from "expo-router";


export default function Index() {

  useEffect(()=>{

    setTimeout(()=>{

        router.push('/(tabs)/home')

    }, 3000)
   }, [])
  return (
       <Splash/>
      //  <SafeAreaView>
      //       <Text>Browse</Text>
      //       <Link href="/(tabs)/home">Go to Home</Link>
      //   </SafeAreaView>
   
  );
}
