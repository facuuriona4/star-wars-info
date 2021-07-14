import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Planet from "../planet/Planet";
import { Container, Progress } from "./planets.jss";
import { CircularProgress } from "@material-ui/core";

const fetchPlanets = async () => {
  const response = await axios.get("https://swapi.dev/api/planets/")
  return response.data;
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  return (
    <Container>
      {
        status === "success" ? (
          data.results.map((el: { name: string, population: string, terrain: string }, i: number) => {
            return <Planet key={i} planet={el.name} population={el.population} terrain={el.terrain} />
          })
        )
          :
          <Progress>
            <CircularProgress color="primary" />
          </Progress>
      }
    </Container>
  );
};

export default Planets;