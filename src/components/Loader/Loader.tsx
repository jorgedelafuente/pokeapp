import React from "react";
import PokeIcon from "../../images/pokeicon.png";
import "./Loader.scss";

const Loader = () => {
   return (
      <>
         <br />
         <h3 className='loaderText'>Generating Pokemon Team...</h3>
         <br />
         <img className='PokeIcon rotate' src={PokeIcon} alt='PokeLogo' />
      </>
   );
};

export default Loader;
