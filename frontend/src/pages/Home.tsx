import { useState, useEffect } from "react";
import { Grid, Text } from "@chakra-ui/react";
import NewPostForm from "../components/NewPostForm";
import { get } from "../helpers/api";
import { PostType } from "../helpers/types";

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    get("/posts").then((json) => {
      console.log(json);
      setPosts(json.posts);
    });
  }, []);

  return (
    <Grid bg="green.100">
      {posts.map((p) => (
        <Text key={p.id}>{p.title}</Text>
      ))}
      <NewPostForm />
    </Grid>
  );
};

export default Home;
