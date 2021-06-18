import React from "react";

//image
import Logo from "../../Images/logoStone.png";

//moment.js
import moment from "moment";
import "moment/locale/pt-br";

//rebass
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
            width: "80%",
            marginLeft: "10%",
          },
        }}
      ></Image>
      <Box
        mx={4}
        sx={{
          "@media screen and (max-width: 768px)": {
            textAlign: "center",
            marginTop: "1rem",
          },
        }}
      >
        <Heading
          color="var(--gray)"
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
        <Text color="var(--lightgray)">
          Dados de câmbio disponibilizados pela Morningstar.
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
