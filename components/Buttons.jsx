import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";

const Buttons = ({ label, handlePress, disabled }) => {
  return (
    <View className="mt-3 w-24 ">
      <TouchableOpacity
        disabled={disabled}
        onPress={handlePress}
        style={{
          opacity: disabled ? 0.5 : 1,
          backgroundColor: "#795ba8",
          paddingVertical: 7,
          paddingHorizontal: 7,
          borderRadius: 20,
          alignItems: "center",
        }}>
        <Text className="text-white text-center">{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
