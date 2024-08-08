import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TextField = ({ icon, text }) => {
  return (
    <View className="w-full flex-row h-10 bg-white shadow-2xl mt-3 rounded-lg items-center px-4">
      <View className="w-1/5 flex items-center">
        <Icon name={icon} size={20} color="#000" />
      </View>
      <View className="w-4/5 justify-center">
        <TextInput
          placeholder={text}
          className="text-black w-full"
          placeholderTextColor="#000"
        />
      </View>
    </View>
  );
};

export default TextField;
