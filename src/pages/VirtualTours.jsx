import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const VirtualTours = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading fontSize="3xl" color="pink.500">Virtual Tours</Heading>
        <Text fontSize="lg" color="gray.600">Explore our apartments with interactive 360-degree tours.</Text>
        <iframe
          src="https://your-360-tour-link.com"
          width="100%"
          height="500px"
          style={{ border: "none" }}
          allowFullScreen
          title="360-degree tour"
        ></iframe>
      </VStack>
    </Container>
  );
};

export default VirtualTours;