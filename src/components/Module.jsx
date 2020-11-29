import React, { Fragment } from "react";
import { Box, Divider, Heading } from "@chakra-ui/core";
import Text from "../modules/Text";

function Module({ data }) {
  const renderModule = () => {
    switch (data.type) {
      case "text":
        return <Text data={data} />;
      default:
        return;
    }
  };

  return (
    <Box>
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
