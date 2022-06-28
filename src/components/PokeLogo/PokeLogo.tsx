import { Image, Box } from "rebass";
import "./PokeLogo.scss";

const PokedexHome = () => {
  return (
    <Box>
      <Image
        sx={{
          width: ["300px"],
          borderRadius: 8,
        }}
        textAlign="center"
        className="PokeLogo"
        src={process.env.PUBLIC_URL + "/images/PokemonLogo.jpg"}
        alt="PokeLogo"
      />
    </Box>
  );
};

export default PokedexHome;
