import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="detail"
        options={{
          title: '상세 정보',
        }}
      />
      <Stack.Screen 
        name="create"
        options={{
          title: '등록',
        }}
      />
    </Stack>
  );
}
