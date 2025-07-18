import { StyleSheet, Text, View } from "react-native";

export default function EditScreen() {
    return(
        <View style={styles.container}>
            <Text>edit</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 20, backgroundColor: '#25292e', },
  image: { width: 400, height: 400, borderRadius: 16, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
});
