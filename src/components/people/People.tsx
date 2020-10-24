import React, { FC } from "react";
import { Props } from "./people.types";
import { Container, Text } from "./people.jss";

const People: FC<Props> = ({ name, height, gender, ...rest }) => (
  <Container {...rest}>
      <Text>Name - {name}</Text>
      <Text>Height - {height}</Text>
      <Text>Gender - {gender}</Text>
  </Container>
);

export default People;
