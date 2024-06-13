import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={4}>
      <VStack spacing={4}>
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9, rotate: -5 }}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }} color="pink.500">Estate Explorer</Heading>
        </motion.div>
        <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">Discover your dream home with our virtual tours and galleries.</Text>
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9, rotate: -5 }}>
          <Button as={Link} to="/virtual-tours" colorScheme="pink" size="lg" rounded="full">Start Exploring</Button>
        </motion.div>
      </VStack>
    </Container>
  );
};

export default Index;