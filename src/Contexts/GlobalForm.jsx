import React, { createContext, useState } from "react";
export const FormContext = createContext();

export const FormStorage = ({ children }) => {
  const [inputDolar, setInputDolar] = useState("");
  const [inputTax, setInputTax] = useState("");
  const [currentRadioValue, setCurrentRadioValue] = useState();

  return (
    <FormContext.Provider
      value={{
        setInputDolar,
        inputDolar,
        inputTax,
        setInputTax,
        setCurrentRadioValue,
        currentRadioValue,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormStorage;
