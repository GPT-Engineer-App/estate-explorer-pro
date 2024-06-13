import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold" fontSize="xl">Estate Explorer</Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} color="white">Home</Link>
          <Link as={RouterLink} to="/virtual-tours" px={2} color="white">Virtual Tours</Link>
          <Link as={RouterLink} to="/gallery" px={2} color="white">Gallery</Link>
          <Link as={RouterLink} to="/neighborhood" px={2} color="white">Neighborhood</Link>
          <Link as={RouterLink} to="/retail" px={2} color="white">Retail</Link>
          <Link as={RouterLink} to="/amenities" px={2} color="white">Amenities</Link>
          <Link as={RouterLink} to="/contact" px={2} color="white">Contact</Link>
          <Link as={RouterLink} to="/application" px={2} color="white">Application</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;