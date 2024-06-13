import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Neighborhood = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading fontSize="3xl" color="pink.500">Neighborhood</Heading>
        <Text fontSize="lg" color="gray.600">Discover the local attractions, restaurants, and shops around our community.</Text>
        <Text color="gray.500">[Placeholder for neighborhood content]</Text>
      </VStack>
    </Container>
  );
};

export default Neighborhood;