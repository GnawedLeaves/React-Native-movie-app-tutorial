import React from "react";
import { Image, TextInput, View } from "react-native";
import { icons } from "../constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-5">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        placeholder={placeholder}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
