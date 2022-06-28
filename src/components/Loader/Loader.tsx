import { Flex } from "rebass";
import "./Loader.scss";

const Loader = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" textAlign="center">
      <br />
      <h3 className="loaderText">Generating Pokemon Team...</h3>
      <br />
      <img
        className="PokeIcon rotate"
        src={process.env.PUBLIC_URL + "/images/pokeicon.png"}
        alt="PokeIcon"
      />
    </Flex>
  );
};

export default Loader;
