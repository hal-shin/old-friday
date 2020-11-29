import { Box, Flex, IconButton } from "@chakra-ui/core";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuChange = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Flex backgroundColor="#333" h="100%" overflow="hidden">
      <Navbar isOpen={isOpen} />
      <Box
        backgroundColor="white"
        flex={1}
        borderRadius={isOpen ? "25px 0 0 0" : "0"}
        boxShadow="-2px 15px 22px 0 rgba(0,0,0,0.35)"
      >
        <IconButton
          icon={`arrow-${isOpen ? "left" : "right"}`}
          aria-label="open and close menu"
          variantColor="blue"
          variant="ghost"
          onClick={handleMenuChange}
        />
        <Box mt="50px" px="50px">
          <Router />
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
