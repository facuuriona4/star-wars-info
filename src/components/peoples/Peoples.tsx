import React, { FC } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Props, Map } from "./peoples.types";
import { Container, Progress } from "./peoples.jss";
import People from "../people/People";
import { CircularProgress } from "@material-ui/core";

const fetchPeople = async () => (
  (await axios.get("http://swapi.dev/api/people/")).data
);


const Peoples: FC<Props> = () => {
  const { data, status } = useQuery("people", fetchPeople);
  axios('http://swapi.dev/api/people/')
    .then(response => console.log(response))

  return (
    <Container>
      {
        status === "success" ?
          data.results.map((el: Map, i: number) => <People key={i} name={el.name} height={el.height} gender={el.gender} />) :
          <Progress>
            <CircularProgress color="inherit" />
          </Progress>
      }
    </Container>
  );
};

export default Peoples;