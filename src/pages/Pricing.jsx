import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Pricing = () => {
  return (
    <Container centerContent maxW="container.md" py={10} bg="gray.50" borderRadius="lg" boxShadow="lg">
      <VStack spacing={4}>
        <Heading fontSize="3xl" bgGradient="linear(to-r, pink.500, pink.300)" bgClip="text">Pricing</Heading>
        <Text fontSize="lg" color="gray.600">Explore our competitive pricing options for various apartment types.</Text>
        <Text color="gray.500">[Placeholder for pricing content]</Text>
      </VStack>
    </Container>
  );
};

export default Pricing;