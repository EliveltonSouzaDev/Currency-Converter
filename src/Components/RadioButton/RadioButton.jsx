import React, { useContext, useRef } from "react";

//context
import { FormContext } from "../../Contexts/GlobalForm";
import { GlobalContext } from "../../Contexts/GlobalStorage";

//rebass
import { Text, Flex } from "rebass";
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
    if (value === "dinheiro") {
      global.setTaxType(1.1);
      form.setRadioValue("dinheiro");
    } else {
      global.setTaxType(6.38);
      form.setRadioValue("cartão");
    }
  };
  return (
    <>
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
            width: 250,
            justifyContent: "center",
            margin: "0 20%",
          },
        }}
      >
        <Label
          width={[1 / 11]}
          p={2}
          sx={{
            "@media screen and (max-width: 768px)": {
              width: 120,
            },
          }}
        >
          <Radio
            color="green"
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
          width={[1 / 2]}
          p={2}
          sx={{
            "@media screen and (max-width: 768px)": {
              width: 110,
            },
          }}
        >
          <Radio
            color="green"
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
    </>
  );
};

export default RadioButton;
