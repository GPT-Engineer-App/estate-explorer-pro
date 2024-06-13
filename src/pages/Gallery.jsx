import { Container, Heading, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading fontSize="3xl" color="pink.500">Gallery</Heading>
        <Text fontSize="lg" color="gray.600">Browse through high-quality images of our apartments and amenities.</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          <Image src="/images/gallery1.jpg" alt="Gallery Image 1" />
          <Image src="/images/gallery2.jpg" alt="Gallery Image 2" />
          <Image src="/images/gallery3.jpg" alt="Gallery Image 3" />
          <Image src="/images/gallery4.jpg" alt="Gallery Image 4" />
          <Image src="/images/gallery5.jpg" alt="Gallery Image 5" />
          <Image src="/images/gallery6.jpg" alt="Gallery Image 6" />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Gallery;