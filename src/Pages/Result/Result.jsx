import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { GlobalContext } from "../../Contexts/GlobalStorage";
import { FormContext } from "../../Contexts/GlobalForm";

//rebass
import { Text, Box, Heading } from "rebass";

//icons
import StandardButton from "../../Components/Button/Button";

const Result = () => {
  //contextos globais
  const global = useContext(GlobalContext);
  const form = useContext(FormContext);
  const { clearInput } = useContext(GlobalContext);

  const parsingFloat = (item) => {
    return parseFloat(item).toFixed(2).replace(".", ",");
  };

  return (
    <Box mt="6rem">
      <Link to="/">
        <StandardButton clickEvent={clearInput} text={"Voltar"} />
      </Link>
      <Box
        mx={5}
        sx={{
          "@media screen and (max-width: 768px)": {
            textAlign: "center",
            margin: "1rem auto",
          },
        }}
      >
        <Heading
          color="var(--gray)"
          fontSize="20px"
          fontFamily="Sharon Sans"
          marginTop="1rem"
          sx={{
            "@media screen and (max-width: 768px)": {
              textAlign: "center",
            },
          }}
        >
          O resultado do cálculo é
        </Heading>
        <Heading
          fontSize="64px"
          fontFamily="Sharon Sans"
          color="var(--green)"
          mt={4}
        >
          R$ {parsingFloat(global.result)}
        </Heading>
      </Box>
      <Box
        mt={5}
        mx={5}
        sx={{
          "@media screen and (max-width: 768px)": {
            textAlign: "center",
            margin: "4rem auto",
          },
        }}
      >
        <Text
          fontSize="14px"
          fontFamily="Roboto"
          color="var(--lightgray)
"
        >
          Cotação do dólar: $1,00 = R$ {parsingFloat(global.cotation)}
        </Text>

        <Text fontSize="14px" fontFamily="Roboto" color="var(--lightgray)">
          Compra no {form.radioValue} com IOF de {global.taxType}% e taxa do
          estado de {form.inputTax}%
        </Text>
        <Text fontSize="14px" fontFamily="Roboto" color="var(--lightgray)">
          Total em dolar sem imposto $ {parsingFloat(form.inputDolar)}
        </Text>
        <Text fontSize="14px" fontFamily="Roboto" color="var(--lightgray)">
          Total em dolar com imposto ${" "}
          {parsingFloat(global.result / global.cotation)}
        </Text>
        <Text fontSize="14px" fontFamily="Roboto" color="var(--lightgray)">
          Total em real sem imposto R${" "}
          {parsingFloat(form.inputDolar * global.cotation)}
        </Text>
      </Box>
    </Box>
  );
};
export default Result;
