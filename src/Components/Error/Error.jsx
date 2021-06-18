import React from "react";
import Container from "./Error.styles";
import img from "../../Images/error.jpg";
import StandardButton from "../Button/Button";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Container>
      <Link to="/">
        <StandardButton text="Página Inicial" />
      </Link>

      <img src={img} alt="" />
    </Container>
  );
};

export default Error;
