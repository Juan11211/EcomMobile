import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from '../data/products'

const ProductsScreen = () => {
    return (
    <FlatList 
        data={products}
        renderItem={({ item }) => (
    <View style={styles.itemContainer}>
      <Image
          source={{ uri: item.image }} // for image, you need source and uri need to provide styles, width for picture or nothing will display. 
                style={{width: "100%", aspectRatio: 1}}
            />
    </View>
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