import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 80 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          placeholder="Add goal"
          style={{
            width: "80%",
            borderBottomColor: "lightgrey",
            borderBottomWidth: 1,
            padding: 10
          }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
