import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Category() {
  const categories = [
    { text: 'Apple', image: require('../assets/haircut.png') },
    { text: 'Banana', image: require('../assets/haircut.png') },
    { text: 'Cherry', image: require('../assets/haircut.png') },
    { text: 'Dog', image: require('../assets/haircut.png') },
    { text: 'Elephant', image: require('../assets/haircut.png') },
    { text: 'Fox', image: require('../assets/haircut.png') },
    { text: 'Grapes', image: require('../assets/haircut.png') },
    { text: 'Henry', image: require('../assets/haircut.png') },
    { text: 'Indian', image: require('../assets/haircut.png') },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerText}>Categories</Text>
      <View style={styles.container}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryWrapper}>
            <View style={styles.categoryContainer}>
              <Image source={category.image} style={styles.image} />
            </View>
            <Text style={styles.categoryText}>{category.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10, // Add padding for gap around the edges
  },
  categoryWrapper: {
    width: '30%',
    marginHorizontal: '1.5%',
    marginVertical:'2.5%',// Add margin for gap between containers
    alignItems: 'center', // Center text horizontally

  },
  categoryContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    borderRadius:20,
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  categoryText: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight:'bold',
  },
});

export default Category;