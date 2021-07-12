import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./tabNavigator"
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator ();

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {tabNavigator}/>
            <Drawer.Screen name = "Profile" component = {Profile}/>

        </Drawer.Navigator>
    )
}

export default DrawerNavigator;