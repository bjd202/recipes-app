import recipes from '@/data/recipes.json';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

  const handlePress = () => {
    router.push({pathname: '/create'});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.fab} onPress={handlePress}>
        <MaterialIcons name="add" size={32} color="white" />
      </TouchableOpacity>
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
  fab: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF', // 원하는 색상
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // 안드로이드 그림자
    shadowColor: '#000', // iOS 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
