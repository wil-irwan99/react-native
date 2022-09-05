import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {ROUTE} from "../shared/constants"
import WelcomePage from "../features/Welcome/WelcomePage"
import LoginPage from "../features/Login/LoginPage"
import { StackActions } from "@react-navigation/native";
import ProductList from "../features/Product/ProductList";

const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.PRODUCT} component={ProductList} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppRouter;