import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalStorage";
import { FormContext } from "../../Contexts/GlobalForm";

//rebass
import { Text } from "rebass";

//components
import StandardButton from "../Button/Button.jsx";
import FormInput from "../FormInput/FormInput.jsx";
import RadioButton from "../RadioButton/RadioButton.jsx";

const Main = () => {
  const global = useContext(GlobalContext);
  const form = useContext(FormContext);

  const [error, setError] = useState(false);

  const history = useHistory();

  const handleCalc = () => {
    //verifica se os inputs estão preenchidos, se não manda a mensagem de erro
    if (
      (form.inputDolar <= 0) |
      (form.inputTax <= 0) |
      !form.currentRadioValue
    ) {
      setError(true);
    } else {
      setError(false);
      const iofCalc =
        parseFloat((global.cotation * global.taxType) / 100) +
        parseFloat(global.cotation);
      const taxEstado =
        (form.inputDolar * form.inputTax) / 100 + parseFloat(form.inputDolar);

      const results = taxEstado * iofCalc;

      global.setResult(results);

      history.push("/result");
    }
  };

  return (
    <>
      {error && (
        <Text
          fontWeight="bold"
          color="red"
          my="3"
          sx={{
            "@media screen and (max-width: 768px)": {
              textAlign: "center",
            },
          }}
        >
          Por favor, preencha os dados corretamente!
        </Text>
      )}
      <FormInput />
      <RadioButton textFirst={"Dinheiro"} textSecond={"Cartão"} />
      <StandardButton clickEvent={handleCalc} text={"Converter"} />
    </>
  );
};

export default Main;
