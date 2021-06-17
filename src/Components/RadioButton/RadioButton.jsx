import React, { useContext } from "react";

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

  //verifica qual radio button está ativo
  const handleRadioChange = (e) => {
    form.setCurrentRadioValue(e.target.value);

    form.currentRadioValue === "cartão"
      ? global.setTaxType(1.1)
      : global.setTaxType(6.38);
  };

  console.log("renderizei");
  console.log(global.taxType);

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
            onChange={handleRadioChange}
            checked={form.currentRadioValue === "dinheiro"}
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
            onChange={handleRadioChange}
            checked={form.currentRadioValue === "cartão"}
          />
          {textSecond}
        </Label>
      </Flex>
    </>
  );
};

export default RadioButton;
