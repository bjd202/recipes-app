import recipes from '@/data/recipes.json';
import { router, useRouter } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const data = recipes.recipes
console.log(data);

const renderItem = ({ item }) => (
  <Pressable 
    onPress={() => router.push({pathname: '/detail', params: item})}
    style={styles.itemContainer}
  >
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <Text style={styles.itemTitle}>{item.title}</Text>
  </Pressable>
);

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={data} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
});
