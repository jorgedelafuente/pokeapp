import { Flex } from "rebass";

import PokeIcon from "../../images/pokeicon.png";
import "./Loader.scss";

const Loader = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" textAlign="center">
      <br />
      <h3 className="loaderText">Generating Pokemon Team...</h3>
      <br />
      <img className="PokeIcon rotate" src={PokeIcon} alt="PokeLogo" />
    </Flex>
  );
};

export default Loader;
