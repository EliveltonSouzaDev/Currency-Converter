import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalStorage";
import { FormContext } from "../../Contexts/GlobalForm";

//rebass
import { Text, Flex, Box, Button, Heading } from "rebass";

//icons
import { FiArrowLeft } from "react-icons/fi";
import { IconContext } from "react-icons";

const Result = () => {
  const global = useContext(GlobalContext);
  const form = useContext(FormContext);
  const { clearInput } = useContext(GlobalContext);

  return (
    <>
      <Link to="/">
        <Button
          onClick={clearInput}
          my={3}
          p={3}
          width={1 / 8}
          bg="var(--white)"
          color="gray"
          sx={{
            borderRadius: 8,
            border: "1px solid var(--grayBorder)",
            boxShadow: "0px 5px 5px 0px var(--grayShadow)",

            ":hover": {
              backgroundColor: "lightgray",
              color: "white",
            },
            "@media screen and (max-width: 768px)": {
              width: "40%",
              marginLeft: "30%",
            },
          }}
        >
          <Flex
            justifyContent="space-around"
            alignItems="center"
            sx={{
              "@media screen and (max-width: 768px)": {
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "space-between",
                alignItems: "space-between",
              },
            }}
          >
            <IconContext.Provider value={{ size: "1.4rem" }}>
              <FiArrowLeft />
            </IconContext.Provider>
            <Text color="black" fontWeight="bold">
              Voltar
            </Text>
          </Flex>
        </Button>
      </Link>
      <Box
        sx={{
          "@media screen and (max-width: 768px)": {
            textAlign: "center",
            marginTop: "1rem",
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
          R$ {parseFloat(global.result).toFixed(2).replace(".", ",")}
        </Heading>
      </Box>
      <Box
        mt={5}
        sx={{
          "@media screen and (max-width: 768px)": {
            textAlign: "center",
            marginTop: "4rem",
          },
        }}
      >
        <Text
          fontSize="14px"
          fontFamily="Roboto"
          color="var(--lightgray)
"
        >
          Cotação do dólar: $1,00 = R${" "}
          {parseFloat(global.cotation).toFixed(2).replace(".", ",")}
        </Text>

        <Text fontSize="14px" fontFamily="Roboto" color="var(--lightgray)">
          Compra no {form.radioValue} com IOF de {global.taxType}% e taxa do
          estado de {form.inputTax}%
        </Text>
        <Text fontSize="14px" fontFamily="Roboto" color="var(--lightgray)">
          Total em dolar sem imposto ${" "}
          {parseFloat(form.inputDolar).toFixed(2).replace(".", ",")}
        </Text>
        <Text fontSize="14px" fontFamily="Roboto" color="var(--lightgray)">
          Total em dolar com imposto ${" "}
          {parseFloat(global.result / global.cotation)
            .toFixed(2)
            .replace(".", ",")}
        </Text>
        <Text fontSize="14px" fontFamily="Roboto" color="var(--lightgray)">
          Total em real sem imposto R${" "}
          {parseFloat(form.inputDolar * global.cotation)
            .toFixed(2)
            .replace(".", ",")}
        </Text>
      </Box>
    </>
  );
};
export default Result;
