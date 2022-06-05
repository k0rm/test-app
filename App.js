import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

import Home from './src/views/Home/Home';

const App = () => {
  return (
	<NavigationContainer style={{ flex: 1 	}}>
		<Stack.Navigator style={{ flex: 1 }}>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;