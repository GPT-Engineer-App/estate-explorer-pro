import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Amenities = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading fontSize="3xl" color="pink.500">Amenities</Heading>
        <Text fontSize="lg" color="gray.600">Discover the features and services available in our community.</Text>
        <Text color="gray.500">[Placeholder for amenities content]</Text>
      </VStack>
    </Container>
  );
};

export default Amenities;