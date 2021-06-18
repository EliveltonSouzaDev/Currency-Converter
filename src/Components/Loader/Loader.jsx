import React from "react";

//components
import { Container } from "./Loader.styles";
//image
import Logo from "../../Images/logoStone.png";

const Loader = () => {
  return (
    <Container>
      <img src={Logo} alt="logomarca Stone currency" />

      <section></section>
    </Container>
  );
};

export default Loader;
