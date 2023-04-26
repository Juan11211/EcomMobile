import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products'

const ProductsScreen = ({ navigation }) => {
    return (
    <FlatList 
        data={products}
        renderItem={({ item }) => (
    <Pressable
    onPress={() => {
      navigation.navigate('Product Details'); // this is the name in the nav file. you put the name where you want to press to 
    }} style={styles.itemContainer}>
      <Image
          source={{ uri: item.image }} // for image, you need source and uri need to provide styles, width for picture or nothing will display. 
                style={{width: "100%", aspectRatio: 1}}
            />
    </Pressable>
        )} 
        numColumns={2}
        />
    )
}


export default ProductsScreen;


const styles = StyleSheet.create({
    itemContainer: { 
      width: '50%',
    }
  });