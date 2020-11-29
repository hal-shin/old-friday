import React from "react";
import { Box, Heading, Image, PseudoBox, Text } from "@chakra-ui/core";
import { NAVBAR_PHOTO_URL } from "../data/constants";
import Center from "./Center";
import { Link } from "react-router-dom";

const Navigation = ({ to, children }) => {
  return (
    <PseudoBox
      display="block"
      as={Link}
      color="white"
      fontSize="lg"
      fontWeight="light"
      lineHeight="1.85"
      height="34px"
      px={2}
      to={to}
      _hover={{
        backgroundColor: "#555",
      }}
      borderRadius={4}
    >
      {children}
    </PseudoBox>
  );
};

function Navbar() {
  return (
    <Box minW="280px" px="20px">
      <Box w="100%">
        <Heading color="white" textAlign="center" fontSize="2xl">
          Friday
        </Heading>
        <Text color="white" textAlign="center">
          Your personal assistant
        </Text>
      </Box>
      <Center py={6}>
        <Image size="160px" src={NAVBAR_PHOTO_URL} borderRadius="100%" />
      </Center>
      <Heading fontSize="md" textTransform="uppercase" color="white" mb={2}>
        Home
      </Heading>
      <Box>
        <Navigation to="/">Dashboard</Navigation>
        <Navigation to="/automations">Automations</Navigation>
        <Navigation to="/notes">Notes</Navigation>
        <Navigation to="/weather">Weather</Navigation>
      </Box>
    </Box>
  );
}

export default Navbar;
