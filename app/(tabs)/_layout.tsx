import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      {/* dont actually need to define the tabs they will auto do it but can customise it  */}
      <Tabs.Screen
        name="search"
        options={{ headerShown: false, title: "Search" }}
      />
      <Tabs.Screen
        name="saved"
        options={{ headerShown: false, title: "Saved" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: "Profile" }}
      />
    </Tabs>
  );
};

export default _layout;
