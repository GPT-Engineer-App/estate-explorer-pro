import { useState } from "react";
import { Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [preferences, setPreferences] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, preferences });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading fontSize="3xl" color="pink.500">Application Form</Heading>
        <Text fontSize="lg" color="gray.600">Apply online to become a resident of our community.</Text>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="apartment-preferences" isRequired>
            <FormLabel>Apartment Preferences</FormLabel>
            <Textarea value={preferences} onChange={(e) => setPreferences(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="pink" size="lg" rounded="full" mt={4}>Submit</Button>
        </form>
      </VStack>
    </Container>
  );
};

export default Application;