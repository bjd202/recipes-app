import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function CreateScreen() {

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [desc, setDesc] = useState('');

    const pickImage = async () => {
        // 갤러리 권한 요청
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('권한 필요', '이미지 선택을 위해 갤러리 권한이 필요합니다.');
            return;
        }

        // 이미지 고르기
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,   // 자르기 허용
            aspect: [4, 3],        // 원하는 비율
            quality: 1,
            base64: false,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri); // expo-image-picker v14 이상: assets 배열 사용
        }
    };

    const handleIngredientChange = (text, idx) => {
        const newIngredients = [...ingredients];
        newIngredients[idx] = text;
        setIngredients(newIngredients);
    };

    const addIngredient = () => setIngredients([...ingredients, '']);

    const removeIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    return(
        <View style={styles.container}>

            <Pressable style={({ pressed }) => ({
                    backgroundColor: pressed ? '#959ee9ff' : '#3e51f7ff', 
                    padding: 10, 
                    width: 100,
                    borderRadius: 5,
                    marginTop: 20,
                })}
                onPress={pickImage}
            >
                <Text style={{color: '#ffffff', textAlign: "center"}}>이미지 선택</Text>
            </Pressable>
            {/* <Button title="이미지 선택" onPress={pickImage} /> */}
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200, marginTop: 16, borderRadius: 8 }}
                />
            )}

            <TextInput
                style={styles.input}
                placeholder="제목을 입력하세요"
                placeholderTextColor="#ffffff" 
                value={title}
                onChangeText={setTitle}
            />

            {ingredients.map((ingredient, index) => (
                <View key={index} style={styles.inputRow}>
                    <TextInput
                        style={styles.input2}
                        value={ingredient}
                        onChangeText={(text) => handleIngredientChange(text, index)}
                        placeholder={`재료 ${index + 1}`}
                        placeholderTextColor="#888"
                    />
                    {/* 삭제 버튼 */}
                    <Pressable onPress={() => removeIngredient(index)} style={styles.removeButton}>
                        <MaterialIcons name="remove-circle" size={28} color="#ff4444" />
                    </Pressable>
                </View>
            ))}
            <Button title="재료 추가" onPress={addIngredient} />

            <TextInput
                style={styles.multiline}
                multiline={true}
                numberOfLines={10}
                textAlignVertical="top"
                placeholder="설명을 입력하세요"
                placeholderTextColor="#ffffff" 
                value={desc}
                onChangeText={setDesc}
            />

            <Pressable style={({ pressed }) => ({
                    backgroundColor: pressed ? '#959ee9ff' : '#3e51f7ff', 
                    padding: 10, 
                    width: 100,
                    borderRadius: 5,
                })}
            >
                <Text style={{color: '#ffffff', textAlign: "center"}}>등록</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        color: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 4,
    },
    input2: {
        width: '100%',
        height: 40,
        color: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 4,
    },
    multiline: {
        width: '80%',
        height: 200,
        color: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 4,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        width: '80%',
    },
    removeButton: {
        marginLeft: 8,
    },
});