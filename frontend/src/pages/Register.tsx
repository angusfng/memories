import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
} from "@chakra-ui/react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submit");
  };

  return (
    <Grid bg="blue.100">
      <Box bg="white" w="100%" maxW="30rem" p="1rem" h="max-content">
        <form onSubmit={handleSubmit}>
          <FormControl id="register-firstname">
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl id="register-lastname">
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl id="register-email">
            <FormLabel>Email</FormLabel>
            <Input
              type="password"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="register-username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>
          <FormControl id="register-password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl id="register-confirmpassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder=" Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Grid>
  );
};

export default Register;
