
import { SafeAreaView } from "react-native-safe-area-context"

import { Image } from "react-native";
import { Dimensions } from "react-native";

const Splash = ()=>{
    const {width , height} =  Dimensions.get('screen');
    // console.log(width, height);
    return(
        <SafeAreaView style={{ flex:1, alignItems:'center', justifyContent:'center'}}>

            <Image style={{height:height, width:width, alignSelf:'center'}} source={require('@/assets/images/Splash.png')}/>

        </SafeAreaView>
    )
}


export default Splash;