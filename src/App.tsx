import Pokedex from "./views/Pokedex/Pokedex";
import { Flex } from "rebass";

const App: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      width="auto"
    >
      <Pokedex />
    </Flex>
  );
};

export default App;
