import { NavigationContainer } from "@react-navigation/native";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

// options is the way you can present it. 

const Navigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsScreen} 
          options={({ navigation }) => ({
            headerRight: () => ( 
              <Pressable onPress={() => navigation.navigate('Cart') } 
                style={{ flexDirection: 'row'}}>
                <FontAwesome5 name='shopping-cart' size={18} color='gray' />
                <Text style={{ marginLeft: 5, fontWeight: '500',  }}>1</Text>
              </Pressable> ),
          })}
          
        
         />

          <Stack.Screen name="Product Details" component={ProductDetailScreen} options={{ presentation: 'modal' }} /> 

          <Stack.Screen name="Cart" component={ShoppingCart} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;