import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function DetailScreen() {
  const { id, title, ingredients, desc, image } = useLocalSearchParams();

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 20, backgroundColor: '#25292e', },
  image: { width: 400, height: 400, borderRadius: 16, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
});
