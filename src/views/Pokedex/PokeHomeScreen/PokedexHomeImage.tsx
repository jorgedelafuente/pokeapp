import React from "react";
import "./PokedexHome.scss";
import PokeTrainerImage from "../../../images/poketrainer.jpg";

const PokedexHomeImage = () => {
   return (
      <>
         <div>
            <img
               className='pokeTrainerImage'
               src={PokeTrainerImage}
               alt='pokemon_trainer_amiibo'
            />
         </div>
      </>
   );
};

export default PokedexHomeImage;
