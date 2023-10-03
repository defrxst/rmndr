import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import Main from './pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './pages/SplashScreen';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <Stack.Navigator screenOptions={{headerShown:false, gestureEnabled: false,}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}

