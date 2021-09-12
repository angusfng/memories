import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submit");
  };

  return (
    <Box bg="blue.100">
      <Box bg="white" w="20rem">
        <form onSubmit={handleSubmit}>
          <FormControl id="login-username">
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Username" />
          </FormControl>
          <FormControl id="login-password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
