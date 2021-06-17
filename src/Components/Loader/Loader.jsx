import React from "react";
import { Container } from "./Loader.styles";
import Logo from "../../Images/logoStone.png";

const Loader = () => {
  return (
    <Container>
      <img className="logo" src={Logo} alt="logomarca Drink-se" />

      <section className="spinner"></section>
    </Container>
  );
};

export default Loader;
