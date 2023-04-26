import { View, Text, StyleSheet, FlatList } from "react-native";
import CartListItem from "../components/CartListItem";
import cart from '../data/cart'
import { Pressable } from "react-native";

const shoppingCartTotals = () => {
                    <View style={styles.totalContainer}>
                        <View style={styles.row}>
                            <Text style={styles.text}>Subtotal</Text>
                            <Text  style={styles.text}>$410</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Delivery</Text>
                            <Text  style={styles.text}>$10</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.textBold}>Total</Text>
                            <Text  style={styles.textBold}>$420</Text>
                        </View>
                    </View>
}

const ShoppingCart = () => { 
    return ( 
        <>
       <FlatList 
                data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item}/>}
                ListFooterComponent={shoppingCartTotals}
            />

                {/* ADD TO CART BUTTON */}
            <Pressable style={ styles.button }>
            <Text style={styles.buttonText}>Check out</Text>
            </Pressable>
        </>
    )
}

export default ShoppingCart; 

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
      },
      text: {
        fontSize: 16,
        color: 'gray',
      },
      textBold: {
        fontSize: 16,
        fontWeight: '500',
      },
      button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '98%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16, 
      }
});
