import React, { createContext, useState } from "react";
export const FormContext = createContext();

export const FormStorage = ({ children }) => {
  const [inputDolar, setInputDolar] = useState("");
  const [inputTax, setInputTax] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const clearInput = () => {
    setInputDolar(0);
    setInputTax(0);
    setRadioValue("");
  };
  return (
    <FormContext.Provider
      value={{
        setInputDolar,
        inputDolar,
        inputTax,
        setInputTax,
        setRadioValue,
        radioValue,
        clearInput,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormStorage;
