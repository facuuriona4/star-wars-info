import React, { FC } from "react";
import { Container, NamePlanet, Text } from "./planet.jss";
import { Props } from "./planet.types";

const Planet: FC<Props> = ({ planet, population, terrain, ...rest }) => (
  <Container {...rest}>
    <NamePlanet>{ planet }</NamePlanet>
    <Text>Population - { population }</Text>
    <Text>Terrain - { terrain }</Text>
  </Container>
);

export default Planet;