import React, { useContext } from "react";

//context
import { FormContext } from "../../Contexts/GlobalForm";

//rebass
import { Flex, Box } from "rebass";
import { Label, Input } from "@rebass/forms";

const FormInput = () => {
  const form = useContext(FormContext);

  return (
    <Box
      as="form"
      py={3}
      mt={4}
      mx={5}
      sx={{
        "@media screen and (max-width: 768px)": {
          margin: "1rem auto",
          alignItems: "center",
          width: "100%",
        },
      }}
    >
      <Flex
        mx={-2}
        mb={3}
        flexWrap="wrap"
        sx={{
          "@media screen and (max-width: 768px)": {
            width: "90%",
            margin: "auto",
          },
        }}
      >
        {/* inputs de texto */}

        <Box
          width={1 / 6}
          px={2}
          sx={{
            "@media screen and (max-width: 768px)": {
              width: "100%",
              margin: "0",
            },
          }}
        >
          <Label htmlFor="dolar">Dólar</Label>
          <Input
            type="number"
            id="dolar"
            placeholder="$"
            onChange={(e) => form.setInputDolar(e.target.value)}
            sx={{
              height: "46px",
              borderRadius: 4,
              boxSizing: "border-box",
              border: "1px solid var(--grayBorder)",
              margin: "1rem 0",
              fontSize: "16px",
              boxShadow: "0px 5px 5px 0px var(--grayShadow)",
              "@media screen and (max-width: 768px)": {
                width: "100%",
              },
            }}
          ></Input>
        </Box>
        <Box
          width={[1 / 6]}
          px={2}
          sx={{
            "@media screen and (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Label htmlFor="tax">Taxa do Estado</Label>
          <Input
            type="number"
            id="tax"
            placeholder="0%" //utilizando o replace aceita . e , no input
            onChange={(e) => form.setInputTax(e.target.value.replace(",", "."))}
            sx={{
              height: "46px",
              borderRadius: 4,
              boxSizing: "border-box",
              border: "1px solid var(--grayBorder)",
              margin: "1rem 0",
              fontSize: "16px",
              boxShadow: "0px 5px 5px 0px var(--grayShadow)",
            }}
          ></Input>
        </Box>
      </Flex>
    </Box>
  );
};

export default FormInput;
