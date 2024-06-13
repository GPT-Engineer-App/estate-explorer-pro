import { useState } from "react";
import { Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading fontSize="3xl" color="pink.500">Contact Us</Heading>
        <Text fontSize="lg" color="gray.600">Get in touch with us for inquiries and scheduling tours.</Text>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="pink" size="lg" rounded="full" mt={4}>Submit</Button>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;