import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Amenities = () => {
  return (
    <Container centerContent maxW="container.md" py={10} bg="gray.50" borderRadius="lg" boxShadow="lg">
      <VStack spacing={4}>
        <Heading fontSize="3xl" bgGradient="linear(to-r, pink.500, pink.300)" bgClip="text">Amenities</Heading>
        <Text fontSize="lg" color="gray.600">Discover the features and services available in our community.</Text>
        <Text color="gray.500">[Placeholder for amenities content]</Text>
      </VStack>
    </Container>
  );
};

export default Amenities;