import { NavigationContainer } from "@react-navigation/native";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="Product Details" component={ProductDetailScreen} />
          <Stack.Screen name="Cart" component={ShoppingCart} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;