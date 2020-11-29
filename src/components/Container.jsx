import React from "react";
import { Box } from "@chakra-ui/core";

function Container({ children, ...rest }) {
  return (
    <Box w="1020px" mx="auto" px="50px" {...rest}>
      {children}
    </Box>
  );
}

export default Container;
