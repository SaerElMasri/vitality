import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import Login from './app/screens/LoginScreen/Login';
import Register from './app/screens/RegisterScreen/Register';
import WeightHeight from './app/screens/WeightHeightScreen/WeightHeight';
import Gender from './app/screens/GenderScreen/Gender';
import Age from './app/screens/AgeScreen/Age';
import Goal from './app/screens/GoalsScreen/Goal';
import Diet from './app/screens/DietScreen/Diet';
import ActivityLevel from './app/screens/ActivityLevelScreen/ActivityLevel';
import Success from './app/Components/SuccessScreen/success';
import Nutrition from './app/screens/NutritionScreen/Nutrition';
import Macros from './app/screens/MacrosScreen/Macros';
import FoodListing from './app/screens/FoodListingScreen/FoodListing';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Weight/Height"
          component={WeightHeight}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Age"
          component={Age}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Goal"
          component={Goal}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Diet"
          component={Diet}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityLevel}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Nutrition"
          component={Nutrition}
          options={{headerShown:true}}
        />
        <Stack.Screen
          name="Macros"
          component={Macros}
          options={{headerShown:false}}
        /> */}
        <Stack.Screen
          name="FoodListing"
          component={FoodListing}
          options={{headerShown:false}}
        />
        
          

      </Stack.Navigator>
    </NavigationContainer>
  );
}