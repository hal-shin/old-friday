import { Route, Switch } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Notes from "./pages/Notes";

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
        <Box w="1020px" m="50px auto 0" px="50px">
          <Switch>
            <Route path="/notes" component={Notes} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
