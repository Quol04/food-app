import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
       <Tabs >
        <Tabs.Screen  name="home" options={{title:'Home'}}/>
        <Tabs.Screen  name="browse" options={{title:'Browse'}}/>
        <Tabs.Screen  name="grocery" options={{title:'Grocery'}}/>
        <Tabs.Screen  name="basket" options={{title:'Basket'}}/>
        <Tabs.Screen  name="account" options={{title:'Account'}}/>
              {/* <Tabs.Screen  options={{
                  title:'Home',
                  tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Home'} image={require('../../assets/images/heroicons-solid_home.png')}/>
              }} name="home"/>

             <Tabs.Screen  options={{
                title:'Browse',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Browse'} image={require('../../assets/images/heart.png')}/>
            }} name="browse"/>

             <Tabs.Screen  options={{
                title:'Groceries',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Groceries'} image={require('../../assets/images/heart.png')}/>
            }} name="groceries"/>

            <Tabs.Screen  options={{
                title:'Basket',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Basket'} image={require('../../assets/images/user.png')}/>
            }} name="basket"/>

            <Tabs.Screen  options={{
                title:'Account',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Account'} image={require('../../assets/images/user.png')}/>
            }} name="account"/> */}
        </Tabs>
  )
}
