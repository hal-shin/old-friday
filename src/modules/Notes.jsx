import React from "react";
import { Textarea } from "@chakra-ui/core";

function Notes({ data }) {
  return <Textarea placeholder={data.text}></Textarea>;
}

export default Notes;
