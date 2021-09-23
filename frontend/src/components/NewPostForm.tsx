import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import FileBase from "react-file-base64";
import { post } from "../helpers/api";

const NewPostForm = () => {
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!creator || !title || !message || !tags) {
      console.log("Please fill all fields");
      return;
    }
    const payload = {
      creator,
      title,
      message,
      tags,
      selected_file: image,
    };
    post("/posts", payload).then((json) => {
      console.log(json.message);
    });
  };

  return (
    <Box bg="white" w="20rem" h="max-content" p="1rem">
      <form onSubmit={handleSubmit}>
        <FormControl id="newpost-creator">
          <FormLabel>Creator</FormLabel>
          <Input
            type="text"
            placeholder="Creator"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
        </FormControl>
        <FormControl id="newpost-title">
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl id="newpost-message">
          <FormLabel>Message</FormLabel>
          <Input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <FormControl id="newpost-tags">
          <FormLabel>Tags</FormLabel>
          <Input
            type="text"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </FormControl>
        <FormControl id="newpost-file">
          <FormLabel>File</FormLabel>
          <Box id="newpost-file">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }: { base64: string }) => setImage(base64)}
            />
          </Box>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default NewPostForm;
