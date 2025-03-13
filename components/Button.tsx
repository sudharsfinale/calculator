import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/utils/Colors";

interface ButtonProps {
  buttonText: string;
  onButtonPress?: (value: any) => void;
  buttonType?: "top" | "right" | "number";
}

const Button = (props: ButtonProps) => {
  const { buttonText, onButtonPress, buttonType = "number" } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            buttonType === "number"
              ? Colors.btnLight
              : buttonType === "top"
              ? Colors.btnDark
              : Colors.btnRight,
        },
      ]}
      onPress={onButtonPress}
    >
      <Text
        style={[
          styles.buttonText,
          { color: buttonType === "number" ? Colors.black : Colors.white },
        ]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 34,
    color: Colors.white,
  },
});

export default Button;
