import React from "react";

//rebass
import { Text, Flex, Button } from "rebass";

//icons
import { FaExchangeAlt } from "react-icons/fa";

const StandardButton = ({ clickEvent, text }) => {
  return (
    <Button
      my={3}
      p={3}
      width={1 / 8}
      bg="#00AB63"
      onClick={clickEvent}
      variant="primary"
      sx={{
        borderRadius: 8,
        boxShadow: "0px 5px 5px 0px rgba(215, 224, 235, 0.93)",
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
        <FaExchangeAlt />
        <Text color="white" fontWeight="bold">
          {text}
        </Text>
      </Flex>
    </Button>
  );
};

export default StandardButton;
