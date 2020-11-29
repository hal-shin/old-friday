import React from "react";
import { Box, Button, Divider, Grid, Heading, Textarea } from "@chakra-ui/core";
import { openTerminal } from "../utils/openTerminal";
import PageHeader from "../components/PageHeader";

import { shell } from "electron";
import { exec } from "child_process";
// import database from "../api/database";

function Dashboard() {
  const pullBackend = () => {
    openTerminal("git pull", "C:\\Users\\Hal\\work\\ERBP-Backend");
  };

  const startWorkDay = () => {
    pullBackend();
    // exec(
    //   `start cmd /k start /wait "" "C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe`
    // );
    exec("webstorm64.exe ./", {
      cwd: "C:\\Users\\Hal\\work\\ERBP-Frontend",
    });
    shell.openExternal("http://localhost:8000/api/docs");
  };

  // ("C:\\Users\\Hal\\work\\ERBP-Frontend");
  const learnML = () => {
    shell.openExternal("https://course.fast.ai/");
    openTerminal("jupyter notebook", "C:\\Users\\Hal\\Desktop\\fastbook");
  };

  return (
    <Box>
      <PageHeader id="dashboard" text="Welcome, Hal!" />

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Box>
          <Heading fontSize="2xl">Quick Start</Heading>
          <Divider />
          <Heading fontSize="xl" mb={2}>
            Work
          </Heading>
          <Button variantColor="blue" onClick={startWorkDay} mr={2}>
            Start Work
          </Button>
          <Button onClick={pullBackend}>Pull Backend</Button>
          <Heading fontSize="xl" my={2}>
            Personal
          </Heading>
          <Button variantColor="green" onClick={learnML}>
            Learn ML
          </Button>
        </Box>
        <Box>
          <Heading fontSize="2xl">Notes</Heading>
          <Divider />
          <Textarea />
        </Box>
      </Grid>
    </Box>
  );
}

export default Dashboard;
