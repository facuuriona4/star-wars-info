import React, { useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import Planets from "./components/planets/Planets"
import People from "./components/peoples/Peoples";
import { Container, PagesContainer } from "./App.jss";

const App = () => {
  const [page, setPage] = useState("planets"); 

  return (
    <Container>
      <Navbar setPage={setPage} />

      <PagesContainer>
        { page === "planets" ? <Planets/> : <People/> }
      </PagesContainer>
      
    </Container>
  );
};

export default App;
