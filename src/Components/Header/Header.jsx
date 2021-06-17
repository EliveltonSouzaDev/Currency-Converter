import React from "react";

//image
import Logo from "../../Images/logoStone.png";

//moment.js
import moment from "moment";
import "moment/locale/pt-br";

import { Box, Flex, Heading, Image, Text } from "rebass";

const Header = () => {
  return (
    <Flex my={4} alignItems="center">
      <Image
        className="logo"
        src={Logo}
        alt="logo verde Stone currency"
        width="16%"
        sx={{
          "@media screen and (max-width: 768px)": {
            width: "50%",
          },
        }}
      ></Image>
      <Box
        mx={5}
        sx={{
          "@media screen and (max-width: 768px)": {
            textAlign: "center",
            marginTop: "1rem",
          },
        }}
      >
        <Heading
          color="#45505E"
          mb={3}
          sx={{
            "@media screen and (max-width: 768px)": {
              fontSize: "1.3rem",
              marginTop: "1rem",
            },
          }}
        >
          {moment().format("LL  [|]  HH:mm [UTC]")}
        </Heading>
        <Text color="#8C9CAD">
          Dados de câmbio disponibilizados pela Morningstar.
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
