import React from "react";
import { Flex } from "@chakra-ui/core";

function Center({ children, ...rest }) {
  return (
    <Flex justify="center" {...rest}>
      {children}
    </Flex>
  );
}

export default Center;
