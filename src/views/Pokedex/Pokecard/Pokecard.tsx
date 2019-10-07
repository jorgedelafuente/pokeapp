import React from "react";
import "./Pokecard.scss";
import { Card, Image, Flex, Box } from "rebass";

const PokeAPI =
   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const PokeAPIhr = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

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
      let imgSrchr = `${PokeAPIhr}${convertThreeDigitNumber(
         this.props.id
      )}.png`;
      return (
         <>
            <Card mt={2} width={[320, 480]} mx='auto'>
               <div className='card cardFont'>
                  <Flex>
                     <Box p={3} width={2 / 3}>
                        <h2 className='cardHeader'>
                           {capitalizeword(this.props.name)}
                        </h2>
                     </Box>
                     <Box p={3} width={1 / 3}>
                        <Image
                           className='imgAvatar'
                           src={imgSrc}
                           sx={{
                              width: 50,
                              height: 50,
                              borderRadius: 9999
                           }}
                        />
                     </Box>
                  </Flex>
                  <Flex>
                     <Box width={1 / 2}>
                        • Species: {capitalizeword(this.props.species)}
                     </Box>
                     <Box width={1 / 2}>
                        • Type:{" "}
                        {this.props.types.map((t, i) => (
                           <span key={i}>
                              {(i ? ", " : "") + capitalizeword(t.type.name)}
                           </span>
                        ))}
                     </Box>
                  </Flex>
                  <Flex>
                     <Box width={1 / 2}>• Height: {this.props.height}</Box>
                     <Box width={1 / 2}>• Weight: {this.props.weight}</Box>
                  </Flex>
                  <Flex>
                     <Box mb={2} width={1}>
                        • Abilities:{" "}
                        {this.props.abilities.map((a, i) => (
                           <span key={i}>
                              {(i ? ", " : "") + capitalizeword(a.ability.name)}
                           </span>
                        ))}
                     </Box>
                  </Flex>
                  <Flex>
                     <Box width={1}>
                        <Image className='imgMain' src={imgSrchr} />
                     </Box>
                  </Flex>
                  <Flex>
                     <Box mb={2} width={1}>
                        • Base Experience: {this.props.exp}
                     </Box>
                  </Flex>
               </div>
            </Card>
         </>
      );
   }
}
