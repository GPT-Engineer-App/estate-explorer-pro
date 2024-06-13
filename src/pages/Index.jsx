import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={4}>
      <VStack spacing={4}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} color="pink.500">Estate Explorer</Heading>
        <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">Discover your dream home with our virtual tours and galleries.</Text>
        <Button as={Link} to="/virtual-tours" colorScheme="pink" size="lg" rounded="full">Start Exploring</Button>
      </VStack>
    </Container>
  );
};

export default Index;