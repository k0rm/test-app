import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './src/views/Home/Home';
import Animals from './src/views/Categories/Animals/Animals';
import MatchEm from './src/views/AnimalGames/MatchEm/MatchEm';
  

const App = () => {

	return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen 
				name="Home" 
				component={Home} 
				options={{ headerShown: false }}	
			/>
			<Stack.Screen
				name="Animals"
				component={Animals}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="MatchEm"
				component={MatchEm}
				// options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	</NavigationContainer>
	);
}


export default App;