import "./App.css";
import { Box } from "@chakra-ui/core";
import Header from "./components/Header";
import React from "react";
import Content from "./components/Content";

function App() {
  return (
    <Box>
      <Header />
      <Content />
    </Box>
  );
}

export default App;
