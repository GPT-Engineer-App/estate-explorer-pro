import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Retail = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading fontSize="3xl" color="pink.500">Retail</Heading>
        <Text fontSize="lg" color="gray.600">Explore the retail options available within and near our community.</Text>
        <Text color="gray.500">[Placeholder for retail content]</Text>
      </VStack>
    </Container>
  );
};

export default Retail;