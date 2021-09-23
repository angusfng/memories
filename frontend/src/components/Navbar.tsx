import { Flex, Heading, Button, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      bg="white"
      justify="space-between"
      align="center"
      px="1rem"
      gridArea="navbar"
    >
      <Heading as={RouterLink} to="/">
        Memories
      </Heading>
      <Flex align="center">
        <Box minW="max-content" mx="3rem">
          <Link mr="2rem">Page 1</Link>
          <Link mr="2rem">Page 2</Link>
          <Link>Page 3</Link>
        </Box>
        <Box minW="max-content">
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
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
