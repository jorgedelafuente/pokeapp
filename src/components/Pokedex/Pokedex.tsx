import React from "react";
import "./Pokedex.scss";
// import { Pokecard } from "../Pokecard/Pokecard";

interface PokedexProps {
   pokemon: Array<any>;
   id: number;
   name: string;
   type: string;
   exp: number;
}

class Pokedex extends React.Component<PokedexProps> {
   public static defaultProps: Partial<PokedexProps> = {
      pokemon: [
         { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
         { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
         { id: 133, name: "Eevee", type: "normal", base_experience: 22 }
      ]
   };

   public render() {
      // console.log(this.props);
      return (
         <>
            <div className='Pokedex'>
               <h1>PokeDex!</h1>
               {/* {this.props.pokemon.map(p => (
                  <Pokecard
                     key={p.id}
                     id={p.id}
                     name={p.name}
                     type={p.type}
                     exp={p.base_experience}
                  />
               ))} */}
            </div>
         </>
      );
   }
}

export default Pokedex;
