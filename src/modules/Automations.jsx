import React from "react";
import { Box, Button } from "@chakra-ui/core";
import { automate } from "../utils/automations";

function Automations({ data }) {
  return (
    <div>
      {data.automations.map((automation, index) => (
        <Box key={index}>
          <Button
            variantColor="blue"
            onClick={() => automate(automation.instructions)}
          >
            {automation.name}
          </Button>
        </Box>
      ))}
    </div>
  );
}

export default Automations;
