import React, { FC } from "react";
import { Container, Button, Title, ContainerButtons } from "./navbar.jss"
import { Props } from "./navbar.types";
 
const Navbar: FC<Props> = ({ setPage }) => {
  return (
    <Container>
      <Title>Star Wars Info</Title>
      <ContainerButtons>
        <Button onClick={() => setPage("planets")}>Planets</Button>
        <Button onClick={() => setPage("people")}>People</Button>
      </ContainerButtons>
      <a href='vitau://vitau.mx/producto/asa/2421'>link al app</a>
    </Container>
  );
};

export default Navbar;