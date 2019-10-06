import React from "react";
import axios from "axios";
import { Pokecard } from "../Pokecard/Pokecard";

interface PokedatabaseProps {
   PokemonTeamSize: number;
   PokemonTotalAmount: number;
}
interface PokedatabaseState {
   pokemon: Array<any>;
   loading: Boolean;
}

class Pokedatabase extends React.Component<
   PokedatabaseProps,
   PokedatabaseState,
   {}
> {
   public static defaultProps = {
      PokemonTeamSize: 5,
      PokemonTotalAmount: 807
   };
   constructor(props: any) {
      super(props);
      this.state = {
         loading: false,
         pokemon: JSON.parse(window.localStorage.getItem("pokemon")!) || []
      };
      this.handleClick = this.handleClick.bind(this);
   }
   //    this.seenJokes = new Set(this.state.jokes.map(j => j.text));
   //    console.log(this.seenJokes);

   //    componentDidMount() {
   //       console.log(this.state.jokes.length);
   //       if (this.state.jokes.length === 0) {
   //          console.log("from api");
   //          this.getJokes();
   //       } else {
   //          console.log("from localstorage");
   //          //  this.getJokes();
   //       }
   //    }
   handleClick() {
      this.setState({ loading: true }, this.getPokemon);
   }

   async getPokemon() {
      let numberArray: Array<number> = [];
      while (numberArray.length < this.props.PokemonTeamSize) {
         let number = Math.floor(Math.random() * 807) + 1;
         if (numberArray.indexOf(number) === -1) {
            numberArray.push(number);
         }
      }
      let pokemon = [];
      while (pokemon.length < numberArray.length) {
         let index: number = numberArray[pokemon.length];
         let res = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + index,
            {
               headers: { Accept: "application/json" }
            }
         );
         pokemon.push(res.data);
         this.setState({
            loading: false,
            pokemon: pokemon
         });
         window.localStorage.setItem("pokemon", JSON.stringify(pokemon));
      }
      console.log(pokemon);
   }
   render() {
      if (this.state.loading) {
         return (
            <div className='spinner'>
               <i className='fas fa-8x fa-spinner fa-spin' />
               {/* <i className='fas fa-8x fa-sync fa-spin' /> */}
               <h3>Loading</h3>
            </div>
         );
      } else if (!this.state.loading && this.state.pokemon.length > 1) {
         console.log(this.state.pokemon);
         return (
            <>
               <div>Pokemon Team</div>
               <button onClick={this.handleClick}>Get New Pokemon Team</button>
               {this.state.pokemon.map(p => (
                  <Pokecard
                     key={p.id}
                     id={p.id}
                     name={p.name}
                     exp={p.base_experience}
                     height={p.height}
                     weight={p.weight}
                     abilities={p.abilities}
                     types={p.types}
                     species={p.species.name}
                  />
               ))}
            </>
         );
      } else {
         return (
            <>
               <div>Pokemon Database</div>
               <button onClick={this.handleClick}>Get New Pokemon Team</button>
            </>
         );
      }
   }
}

export default Pokedatabase;
