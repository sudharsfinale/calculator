import Calculator from "@/components/Calculator";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Calculator" }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Calculator />
      </View>
    </>
  );
}
