import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function DetailScreen() {
  const router = useRouter();

  const { id, title, ingredients, desc, image } = useLocalSearchParams();


  const handleEdit = () => {
    router.push({pathname: 'edit', params: {id}});
  }

  const handleDelete = async () => {
    console.log("test");
    try {
      const origin = await AsyncStorage.getItem('recipes.json');
      let recipes = origin ? JSON.parse(origin) : [];
      recipes = recipes.filter(r => r.id !== id);
      await AsyncStorage.setItem('recipes.json', JSON.stringify(recipes));
      router.replace('/');
    } catch(e) {
      
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={{color: '#ffffff', fontSize: 48, fontWeight: 'bold'}}>{title}</Text>
      <Text style={{color: '#ffffff', fontSize: 24, marginTop: 20}}>재료: {ingredients}</Text>
      <View style={{ alignSelf: 'stretch', alignItems: 'flex-start', paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ color: '#ffffff', fontSize: 24, }}>
          {desc}
        </Text>
      </View>

      <View style={{flexDirection: 'row', }}>
        <Pressable style={({ pressed }) => ({
              backgroundColor: pressed ? '#959ee9ff' : '#3e51f7ff', 
              padding: 10, 
              width: 100,
              borderRadius: 5,
          })}
          onPress={handleEdit}
        >
          <Text style={{color: '#ffffff', textAlign: "center"}}>수정</Text>
        </Pressable>
        
        <View style={{margin: 10}}></View>

        <Pressable style={({ pressed }) => ({
              backgroundColor: pressed ? '#ebababff' : '#f10404ff', 
              padding: 10, 
              width: 100,
              borderRadius: 5,
          })}
          onPress={handleDelete}
        >
          <Text style={{color: '#ffffff', textAlign: "center"}}>삭제</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 20, backgroundColor: '#25292e', },
  image: { width: 400, height: 400, borderRadius: 16, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
});
