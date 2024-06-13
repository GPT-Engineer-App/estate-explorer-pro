import { Box, Flex, Link, Button, IconButton, useDisclosure, Collapse } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box bg="gray.800" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold" fontSize="xl">Estate Explorer</Box>
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Link as={RouterLink} to="/" px={2} color="white" aria-label="Home">Home</Link>
          <Link as={RouterLink} to="/virtual-tours" px={2} color="white" aria-label="Virtual Tours">Virtual Tours</Link>
          <Link as={RouterLink} to="/gallery" px={2} color="white" aria-label="Gallery">Gallery</Link>
          <Link as={RouterLink} to="/neighborhood" px={2} color="white" aria-label="Neighborhood">Neighborhood</Link>
          <Link as={RouterLink} to="/retail" px={2} color="white" aria-label="Retail">Retail</Link>
          <Link as={RouterLink} to="/amenities" px={2} color="white" aria-label="Amenities">Amenities</Link>
          <Link as={RouterLink} to="/contact" px={2} color="white" aria-label="Contact">Contact</Link>
          <Link as={RouterLink} to="/application" px={2} color="white" aria-label="Application">Application</Link>
        </Flex>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex direction="column" display={{ base: "flex", md: "none" }} alignItems="center">
          <Link as={RouterLink} to="/" py={2} color="white" aria-label="Home">Home</Link>
          <Link as={RouterLink} to="/virtual-tours" py={2} color="white" aria-label="Virtual Tours">Virtual Tours</Link>
          <Link as={RouterLink} to="/gallery" py={2} color="white" aria-label="Gallery">Gallery</Link>
          <Link as={RouterLink} to="/neighborhood" py={2} color="white" aria-label="Neighborhood">Neighborhood</Link>
          <Link as={RouterLink} to="/retail" py={2} color="white" aria-label="Retail">Retail</Link>
          <Link as={RouterLink} to="/amenities" py={2} color="white" aria-label="Amenities">Amenities</Link>
          <Link as={RouterLink} to="/contact" py={2} color="white" aria-label="Contact">Contact</Link>
          <Link as={RouterLink} to="/application" py={2} color="white" aria-label="Application">Application</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;