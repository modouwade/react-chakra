import { Container, Flex } from "@chakra-ui/react";
import Cart from "./components/Cart";
import Detail from "./components/Detail";

function App() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Detail />
        <Cart />
      </Flex>
    </Container>
  );
}

export default App;
