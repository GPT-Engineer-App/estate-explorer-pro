import { Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading fontSize="3xl" color="pink.500">Contact Us</Heading>
        <Text fontSize="lg" color="gray.600">Get in touch with us for inquiries and scheduling tours.</Text>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="pink" size="lg" rounded="full">Submit</Button>
      </VStack>
    </Container>
  );
};

export default Contact;