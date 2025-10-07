import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
       <Tabs>
              <Tabs.Screen  options={{
                  title:'',
                  tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Home'} image={require('../../assets/images/heroicons-solid_home.png')}/>
              }} name="home"/>

             <Tabs.Screen  options={{
                title:'',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'favorites'} image={require('../../assets/images/heart.png')}/>
            }} name="favorites"/>

             <Tabs.Screen  options={{
                title:'',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'History'} image={require('../../assets/images/ic_sharp-history.png')}/>
            }} name="history"/>

            <Tabs.Screen  options={{
                title:'',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Profile'} image={require('../../assets/images/user.png')}/>
            }} name="profile"/>
        </Tabs>
  )
}
