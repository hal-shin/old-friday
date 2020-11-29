import React from "react";
import { Box, Grid } from "@chakra-ui/core";
import PageHeader from "../components/PageHeader";
import { useSelector } from "react-redux";
import Module from "../components/Module";

function Dashboard() {
  const {
    pages: { dashboard },
    modules,
  } = useSelector((state) => state.data);

  return (
    <Box>
      <PageHeader id="dashboard" text="Welcome, Hal!" />

      <Grid
        templateColumns={`repeat(${dashboard.columns.length}, 1fr)`}
        gap={4}
      >
        {dashboard.columns.map((column, index) => (
          <Box key={index}>
            {column.map((moduleId, index) => (
              <Module data={modules[moduleId]} key={index} />
            ))}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
