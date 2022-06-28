import PokeLogo from "../../../components/PokeLogo/PokeLogo";
import PokeHeading from "../../../components/PokeHeading/PokeHeading";
import "./PokedexHome.scss";
import { Button, Box } from "rebass";

const PokedexHome = (props: any) => {
  return (
    <>
      <PokeLogo />
      <PokeHeading text={props.text} />
      <Box>
        <Button
          bg="red"
          sx={{
            borderWidth: "2.5px",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: 10,
            ":hover": {
              backgroundColor: "crimson",
              color: "white",
            },
          }}
          onClick={props.onClick}
        >
          Generate New Pokemon Team
        </Button>
      </Box>
    </>
  );
};

export default PokedexHome;
