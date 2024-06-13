import { Box, Flex, Link, Button, IconButton, useDisclosure, Collapse, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="gray.800" px={4} py={2} borderRadius="lg" boxShadow="lg">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Image src="/images/logo.png" alt="Estate Explorer Logo" boxSize="60px" mr={2} borderRadius="full" boxShadow="md" />
          <Box color="white" fontWeight="bold" fontSize="xl">Estate Explorer</Box>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/" px={2} color="white" aria-label="Home">Home</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/virtual-tours" px={2} color="white" aria-label="Virtual Tours">Virtual Tours</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/gallery" px={2} color="white" aria-label="Gallery">Gallery</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/pricing" px={2} color="white" aria-label="Pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/contact" px={2} color="white" aria-label="Contact">Contact</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/application" px={2} color="white" aria-label="Application">Application</Link>
          </Button>
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
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/" py={2} color="white" aria-label="Home">Home</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/virtual-tours" py={2} color="white" aria-label="Virtual Tours">Virtual Tours</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/gallery" py={2} color="white" aria-label="Gallery">Gallery</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/pricing" py={2} color="white" aria-label="Pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/contact" py={2} color="white" aria-label="Contact">Contact</Link>
          </Button>
          <Button variant="ghost" colorScheme="pink">
            <Link as={RouterLink} to="/application" py={2} color="white" aria-label="Application">Application</Link>
          </Button>
        </Flex>
      </Collapse>
    </Box>
  );
};

export default Navbar;