import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products'
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductsScreen = ({ navigation }) => {

  const products = useSelector((state) => state.products.products) 

  const dispatch = useDispatch(); 

    return (
    <FlatList 
        data={products}
        renderItem={({ item }) => (
    <Pressable
    onPress={() => {
        // 
      dispatch(productsSlice.actions.setSelectedProduct(item.id)) // when item is pressed, it dispataches the item. id

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