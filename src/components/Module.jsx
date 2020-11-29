import React, { Fragment } from "react";
import { Box, Divider, Heading } from "@chakra-ui/core";
import Text from "../modules/Text";
import Notes from "../modules/Notes";
import Automations from "../modules/Automations";

function Module({ data }) {
  const renderModule = () => {
    switch (data.type) {
      case "text":
        return <Text data={data} />;
      case "notes":
        return <Notes data={data} />;
      case "automations":
        return <Automations data={data} />;
      default:
        return;
    }
  };

  return (
    <Box mb={4}>
      {!data.hideHeader && (
        <Fragment>
          <Heading fontSize="2xl">{data.header}</Heading>
          <Divider />
        </Fragment>
      )}
      {renderModule()}
    </Box>
  );
}

export default Module;
