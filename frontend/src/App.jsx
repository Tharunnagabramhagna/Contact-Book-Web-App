import { Stack, Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";

function App() {
  return (
    <Stack
      minH="100vh"
      style={{ transform: "scale(0.8)", transformOrigin: "top center" }}
    >
      <Navbar />

      <Container maxW="1200px" my={4}>
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          letterSpacing="2px"
          textTransform="uppercase"
          textAlign="center"
          mb={8}
        >
          🚀{" "}
          <Text
            as="span"
            bgGradient={[
              "linear(to-tr, teal.300, yellow.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, orange.100, purple.300)",
            ]}
            bgClip="text"
          >
            My Bestfriends
          </Text>{" "}
          🚀
        </Text>


        <UserGrid />
      </Container>
    </Stack>
  );
}

export default App;
