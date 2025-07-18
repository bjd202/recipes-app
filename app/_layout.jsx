import { Stack } from 'expo-router';

export default function StackLayout() {

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: '홈',
          headerStyle: {backgroundColor: '#25292e'},
          headerTitleStyle: {color: '#ffffff'},
          headerTintColor: '#ffffff',
        }} 
      />
      <Stack.Screen 
        name="detail"
        options={{
          title: '상세 정보',
          headerStyle: {backgroundColor: '#25292e'},
          headerTitleStyle: {color: '#ffffff'},
          headerTintColor: '#ffffff',
        }}
      />
      <Stack.Screen 
        name="create"
        options={{
          title: '등록',
          headerStyle: {backgroundColor: '#25292e'},
          headerTitleStyle: {color: '#ffffff'},
          headerTintColor: '#ffffff',
        }}
      />
      <Stack.Screen 
        name="edit"
        options={{
          title: '수정',
          headerStyle: {backgroundColor: '#25292e'},
          headerTitleStyle: {color: '#ffffff'},
          headerTintColor: '#ffffff',
        }}
      />
    </Stack>
  );
}
