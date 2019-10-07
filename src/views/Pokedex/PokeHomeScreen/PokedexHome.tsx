import React from "react";
import PokeLogo from "../../../components/PokeLogo/PokeLogo";
import PokeHeading from "../../../components/PokeHeading/PokeHeading";
import "./PokedexHome.scss";
import { Button } from "rebass";

interface props {
   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
   text: string;
}

const PokedexHome = (props: props) => {
   return (
      <>
         <PokeLogo />
         <PokeHeading text={props.text} />
         <Button onClick={props.onClick}>Generate New Pokemon Team</Button>
      </>
   );
};

export default PokedexHome;
