import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoal.length === 0) {
      return;
    }
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text>New Goal</Text>
        <TextInput
          placeholder=""
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
          <Button title="CANCEL" color="red" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    width: "80%",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  buttonsContainer: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-around"
  }
});

export default GoalInput;
