import React from "react";

//rebass
import { Text, Flex, Button } from "rebass";

//icons
import { FaExchangeAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FiArrowLeft } from "react-icons/fi";

const StandardButton = ({ clickEvent, text, primary }) => {
  return (
    <Button
      my={3}
      primary={primary}
      mx={5}
      p={3}
      width={1 / 8}
      bg={primary ? "var(--green)" : "var(--white)"}
      color={primary ? "var(--white)" : "var(--lightgray)"}
      onClick={clickEvent}
      sx={{
        borderRadius: 8,
        border: "1px solid #D7E0EB",
        boxShadow: "0px 5px 5px 0px var(--grayShadow)",
        ":hover": {
          backgroundColor: primary ? "gray" : "lightgray",
          color: primary ? "white" : "black",
        },
        "@media screen and (max-width: 768px)": {
          width: "50%",
          marginLeft: "25%",
        },
      }}
    >
      <Flex
        justifyContent="space-around"
        alignItems="center"
        sx={{
          "@media screen and (max-width: 768px)": {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {" "}
        <IconContext.Provider value={{ size: "1.3rem" }}>
          {primary ? <FaExchangeAlt /> : <FiArrowLeft />}
        </IconContext.Provider>
        <Text color={primary ? "white" : "black"} fontWeight="bold">
          {text}
        </Text>
      </Flex>
    </Button>
  );
};

export default StandardButton;
