import React from "react";
import "./Pokecard.scss";

const PokeAPI =
   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const PokeAPIhr = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const PokeAPIB =
   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";
// const PokeAPIS =
//    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
// const PokeAPIBS =
//    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/";

interface PokecardProps {
   id: number;
   name: string;
   key: number;
   abilities: Array<any>;
   types: Array<any>;
   exp: number;
   height: number;
   weight: number;
   species: string;
}

let convertThreeDigitNumber = (number: number): any => {
   if (number < 100) {
      return `00${number}`.slice(-3);
   } else {
      return number;
   }
};

let capitalizeword = (word: string): string => {
   return word.charAt(0).toUpperCase() + word.slice(1);
};

export class Pokecard extends React.Component<PokecardProps, {}> {
   render() {
      let imgSrc = `${PokeAPI}${this.props.id}.png`;
      let imgSrcB = `${PokeAPIB}${this.props.id}.png`;
      // let imgSrcBS = `${PokeAPIBS}${this.props.id}.png`;
      // let imgSrcS = `${PokeAPIS}${this.props.id}.png`;
      let imgSrchr = `${PokeAPIhr}${convertThreeDigitNumber(
         this.props.id
      )}.png`;
      return (
         <>
            <div className='card'>
               <h2>{this.props.name}</h2>
               <div>
                  <div>Species: {capitalizeword(this.props.species)}</div>
                  <div>Base EXP: {this.props.exp}</div>
                  <div>Height: {this.props.height}</div>
                  <div>Weight: {this.props.weight}</div>
                  <div>
                     Abilities:{" "}
                     {this.props.abilities.map((a, i) => (
                        <span key={i}>{capitalizeword(a.ability.name)} </span>
                     ))}
                  </div>
                  <div>
                     Types:{" "}
                     {this.props.types.map((t, i) => (
                        <span key={i}>{capitalizeword(t.type.name)} </span>
                     ))}
                  </div>
                  <div className='PokeImage'>
                     <img src={imgSrchr} alt={this.props.name} />
                     <img src={imgSrc} alt={this.props.name} />
                     <img src={imgSrcB} alt={this.props.name} />
                     {/* <img src={imgSrcBS} alt={this.props.name} />
                     <img src={imgSrcS} alt={this.props.name} /> */}
                  </div>
               </div>
            </div>
         </>
      );
   }
}
