import React from "react";

//rebass
import { Text, Flex, Button } from "rebass";

//icons
import { FaExchangeAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const StandardButton = ({ clickEvent, text }) => {
  return (
    <Button
      my={3}
      p={3}
      width={1 / 8}
      bg="var(--green)"
      onClick={clickEvent}
      variant="primary"
      sx={{
        borderRadius: 8,
        boxShadow: "0px 5px 5px 0px var(--grayShadow)",
        ":hover": {
          backgroundColor: "grey",
        },
        "@media screen and (max-width: 768px)": {
          width: "50%",
          marginLeft: "25%",
        },
      }}
    >
      <Flex
        justifyContent="space-around"
        sx={{
          "@media screen and (max-width: 768px)": {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {" "}
        <IconContext.Provider value={{ size: "1.2rem" }}>
          <FaExchangeAlt />
        </IconContext.Provider>
        <Text color="white" fontWeight="bold">
          {text}
        </Text>
      </Flex>
    </Button>
  );
};

export default StandardButton;
