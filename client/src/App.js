import { ChakraProvider } from "@chakra-ui/react";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HomeScreen />
      </ChakraProvider>
    </div>
  );
}

export default App;
