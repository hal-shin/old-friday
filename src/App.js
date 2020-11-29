import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";

function App() {
  return (
    <Flex backgroundColor="#333" h="100%" overflow="hidden">
      <Navbar />
      <Box
        backgroundColor="white"
        flex={1}
        borderRadius="25px 0 0 0"
        boxShadow="-2px 15px 22px 0 rgba(0,0,0,0.35)"
      >
        <Box mt="50px" px="50px">
          <Router />
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
