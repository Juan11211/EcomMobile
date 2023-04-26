import { View, Text, StyleSheet, FlatList } from "react-native";
import CartListItem from "../components/CartListItem";
import cart from '../data/cart'

const ShoppingCart = () => { 

    return( 
        <FlatList 
            data={cart}
            renderItem={({ item }) => <CartListItem cartItem={item}/>}
            ListHeaderComponent={() => (
                <View style={styles.totalContainer}>
                    <View>
                        
                    </View>
                </View>
            )}
        />
    

    )
}

export default ShoppingCart; 

const styles = StyleSheet.create({

})