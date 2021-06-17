import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [cotation, setCotation] = useState("");
  const [result, setResult] = useState("");
  const [taxType, setTaxType] = useState();

  useEffect(() => {
    axios
      .get("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((response) => setCotation(response.data.USDBRL.bid));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        cotation,
        setCotation,
        setResult,
        result,
        taxType,
        setTaxType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStorage;
