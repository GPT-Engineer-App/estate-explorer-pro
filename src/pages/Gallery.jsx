import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading fontSize="3xl" color="pink.500">Gallery</Heading>
        <Text fontSize="lg" color="gray.600">Browse through high-quality images of our apartments and amenities.</Text>
        <Text color="gray.500">[Placeholder for gallery content]</Text>
      </VStack>
    </Container>
  );
};

export default Gallery;