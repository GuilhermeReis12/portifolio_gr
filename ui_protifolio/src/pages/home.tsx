import React from "react";
import Inicio from "../components/home/inicio";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <div>
        <h1>Bem-vindo à minha página inicial</h1>
        <p>Esta é uma página inicial simples criada com Next.js</p>
        <Inicio />
      </div>
    </Container>
  );
};

export default HomePage;
