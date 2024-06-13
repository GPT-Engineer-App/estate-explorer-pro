import { Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Application = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading fontSize="3xl" color="pink.500">Application Form</Heading>
        <Text fontSize="lg" color="gray.600">Apply online to become a resident of our community.</Text>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="apartment-preferences">
          <FormLabel>Apartment Preferences</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="pink" size="lg" rounded="full">Submit</Button>
      </VStack>
    </Container>
  );
};

export default Application;