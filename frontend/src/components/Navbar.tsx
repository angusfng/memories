import { Flex, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex bg="gray.100" align="center" gridArea="navbar">
      <Heading>Memories</Heading>
      <Button colorScheme="blue" as={RouterLink} to="/login" mr="1rem">
        Login
      </Button>
      <Button
        colorScheme="blue"
        variant="outline"
        as={RouterLink}
        to="/register"
      >
        Register
      </Button>
    </Flex>
  );
};

export default Navbar;
