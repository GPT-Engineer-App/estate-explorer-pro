import { Container, Text, VStack, Heading, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={4} bgImage="url('/images/hero-image.jpg')" bgSize="cover" bgPosition="center">
      <VStack spacing={4}>
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9, rotate: -5 }}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }} bgGradient="linear(to-r, pink.500, pink.300)" bgClip="text">Estate Explorer</Heading>
        </motion.div>
        <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md">
          <Text fontSize={{ base: "md", md: "xl" }} color="gray.100" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">Discover your dream home with our virtual tours and galleries.</Text>
        </Box>
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9, rotate: -5 }}>
          <Button as={Link} to="/virtual-tours" bgGradient="linear(to-r, pink.500, pink.300)" color="white" size="lg" rounded="full" _hover={{ bgGradient: "linear(to-r, pink.600, pink.400)" }}>Start Exploring</Button>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Index;