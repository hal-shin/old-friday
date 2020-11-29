import React from "react";
import {
  Box,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/core";
import { getItem, setItem } from "../utils/storage";

function PageHeader({ id, text }) {
  const headerId = "header." + id;

  const handleBlur = (e) => {
    setItem(headerId, e.target.value);
  };

  return (
    <Box mb={8}>
      <Editable
        fontSize="5xl"
        fontWeight="bold"
        defaultValue={getItem(headerId) || text}
      >
        <EditablePreview />
        <EditableInput onBlur={handleBlur} />
      </Editable>
      <Divider />
    </Box>
  );
}

export default PageHeader;
