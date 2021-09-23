import { Grid } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Grid
      minH="100vh"
      templateRows="3.5rem 1fr"
      templateAreas={`"navbar" "page"`}
      bg="gray.50"
    >
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Grid>
  );
};

export default App;
