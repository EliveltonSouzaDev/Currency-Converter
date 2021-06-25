import React, { useContext, useRef } from "react";

//context
import { FormContext } from "../../Contexts/GlobalForm";
import { GlobalContext } from "../../Contexts/GlobalStorage";

//rebass
import { Text, Flex, Box } from "rebass";
import { Label, Radio } from "@rebass/forms";

const RadioButton = ({ textFirst, textSecond }) => {
  // contextos globais
  const form = useContext(FormContext);
  const global = useContext(GlobalContext);
  //pega os dados dos inputs
  const radioCard = useRef(null);
  const radioMoney = useRef(null);

  //verifica qual radio button está ativo e seleciona a taxa correta
  const handleRadioChange = (value) => {
    value === "dinheiro"
      ? global.setTaxType(1.1) || form.setRadioValue("dinheiro")
      : global.setTaxType(6.38) || form.setRadioValue("cartão");
  };

  return (
    <Box
      mx={5}
      sx={{
        "@media screen and (max-width: 768px)": {
          margin: "0 auto",
          width: "100%",
        },
      }}
    >
      <Text
        fontWeight="bold"
        my="2"
        sx={{
          "@media screen and (max-width: 768px)": {
            textAlign: "center",
          },
        }}
      >
        Tipo de compra
      </Text>
      <Flex
        mx={-2}
        py={3}
        flexWrap="wrap"
        sx={{
          "@media screen and (max-width: 768px)": {
            flexDirection: "row",
            width: "200px",
            justifyContent: "center",
            margin: "0 auto",
          },
        }}
      >
        <Label
          display="flex"
          alignItems="center"
          width="6.5rem"
          p={2}
          sx={{
            "@media screen and (max-width: 768px)": {
              width: "50%",
            },
          }}
        >
          <Radio
            color="var(--green)"
            name="type"
            type="radio"
            id="money"
            value="dinheiro"
            ref={radioMoney}
            onClick={() => handleRadioChange(radioMoney.current.value)}
          />
          {textFirst}
        </Label>
        <Label
          display="flex"
          alignItems="center"
          width="5.8rem"
          p={2}
          sx={{
            "@media screen and (max-width: 768px)": {
              width: "45%",
            },
          }}
        >
          <Radio
            color="var(--green)"
            type="radio"
            name="type"
            id="card"
            value="cartão"
            ref={radioCard}
            onClick={() => handleRadioChange(radioCard.current.value)}
          />
          {textSecond}
        </Label>
      </Flex>
    </Box>
  );
};

export default RadioButton;
