import React from "react";
import PokeLogo from "../../images/PokemonLogo.jpg";
import "./PokeLogo.scss";

const PokedexHome = () => {
   return (
      <>
         <img className='PokeLogo' src={PokeLogo} alt='PokeLogo' />
      </>
   );
};

export default PokedexHome;
