import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen, FlatListTest } from '../screens';

const AppNavigator = createStackNavigator({
  Main: MainScreen,
  FlatList: FlatListTest,
},
{
  initialRouteName: "Main",
  defaultNavigationOptions: {
    headerTitle: 'Test Expo',
    headerStyle: {
      backgroundColor: '#3665FF'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

const AppContainer = createAppContainer(AppNavigator);

export {
  AppContainer,
};