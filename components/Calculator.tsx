import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/utils/Colors";
import Button from "./Button";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState("");
  const handleNumberInput = (num: string) => {
    if (displayValue === "0") {
      setDisplayValue(num);
    } else {
      setDisplayValue(`${displayValue}${num}`);
    }
  };
  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  };
  const handleClear = () => {
    setFirstValue("");
    setOperator("");
    setDisplayValue("0");
  };
  const handleDelete = () => {
    let updatedValue = displayValue.slice(0, -1);
    if (updatedValue === "") {
      updatedValue = "0";
    }
    setDisplayValue(updatedValue);
  };
  const handleCalculation = () => {
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(displayValue);
    if (operator === "+") {
      setDisplayValue(`${num1 + num2}`);
    } else if (operator === "-") {
      setDisplayValue(`${num1 - num2}`);
    } else if (operator === "x") {
      setDisplayValue(`${num1 * num2}`);
    } else if (operator === "/") {
      if (num2 !== 0) {
        setDisplayValue(`${num1 / num2}`);
      } else {
        setDisplayValue("Error");
      }
    } else if (operator === "%") {
      setDisplayValue(`${num1 % num2}`);
    }
    setFirstValue("");
    setOperator("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.firstText}>
          {firstValue} {operator}
        </Text>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button buttonText="C" onButtonPress={handleClear} buttonType="top" />
        <Button buttonText="⌫" onButtonPress={handleDelete} buttonType="top" />
        <Button
          buttonText="%"
          buttonType="top"
          onButtonPress={() => handleOperatorInput("%")}
        />
        <Button
          buttonText="÷"
          buttonType="right"
          onButtonPress={() => handleOperatorInput("/")}
        />
        <Button
          buttonText="7"
          buttonType="number"
          onButtonPress={() => handleNumberInput("7")}
        />
        <Button
          buttonText="8"
          buttonType="number"
          onButtonPress={() => handleNumberInput("8")}
        />
        <Button
          buttonText="9"
          buttonType="number"
          onButtonPress={() => handleNumberInput("9")}
        />
        <Button
          buttonText="x"
          buttonType="right"
          onButtonPress={() => handleOperatorInput("*")}
        />
        <Button
          buttonText="6"
          buttonType="number"
          onButtonPress={() => handleNumberInput("6")}
        />
        <Button
          buttonText="5"
          buttonType="number"
          onButtonPress={() => handleNumberInput("5")}
        />
        <Button
          buttonText="4"
          buttonType="number"
          onButtonPress={() => handleNumberInput("4")}
        />
        <Button
          buttonText="-"
          buttonType="right"
          onButtonPress={() => handleOperatorInput("-")}
        />
        <Button
          buttonText="1"
          buttonType="number"
          onButtonPress={() => handleNumberInput("1")}
        />
        <Button
          buttonText="2"
          buttonType="number"
          onButtonPress={() => handleNumberInput("2")}
        />
        <Button
          buttonText="3"
          buttonType="number"
          onButtonPress={() => handleNumberInput("3")}
        />
        <Button
          buttonText="+"
          buttonType="right"
          onButtonPress={() => handleOperatorInput("+")}
        />
        <Button
          buttonText="0"
          buttonType="number"
          onButtonPress={() => handleNumberInput("0")}
        />
        <Button
          buttonText="00"
          buttonType="number"
          onButtonPress={() => handleNumberInput("00")}
        />
        <Button
          buttonText="."
          buttonType="number"
          onButtonPress={() => handleNumberInput(".")}
        />
        <Button
          buttonText="="
          buttonType="right"
          onButtonPress={handleCalculation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    flex: 1,
    backgroundColor: Colors.gray,
    paddingHorizontal: 20,
    alignItems: "flex-end",
    paddingVertical: 20,
    justifyContent: "flex-end",
  },
  displayText: {
    fontSize: 70,
    fontWeight: "300",
  },
  firstText: {
    fontSize: 30,
    fontWeight: "300",
  },
  buttonsContainer: {
    flex: 2,
    backgroundColor: Colors.light,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    padding: 12,
    alignItems: "center",
  },
});

export default Calculator;
