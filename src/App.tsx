import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChakraProvider theme={theme}>
          <Button colorScheme={"teal"}>ボタン</Button>
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
