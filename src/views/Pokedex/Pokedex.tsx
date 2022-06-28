import React from "react";
import axios from "axios";
import { Pokecard } from "./Pokecard/Pokecard";
import PokedexHome from "./PokeHomeScreen/PokedexHome";
import Loader from "../../../src/components/Loader/Loader";
import { Button, Box } from "rebass";
import PokeTrainerImage from "./PokeHomeScreen/PokedexHomeImage";

import "./Pokedex.scss";

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
    PokemonTotalAmount: 807,
  };
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      pokemon: JSON.parse(window.localStorage.getItem("pokemon")!) || [],
    };
    this.getPokemonTeam = this.getPokemonTeam.bind(this);
    this.resetPokemonTeam = this.resetPokemonTeam.bind(this);
  }
  getPokemonTeam() {
    this.setState({ loading: true }, this.getPokemon);
  }

  resetPokemonTeam() {
    window.localStorage.clear();
    window.location.href = "/pokeapp/";
  }

  async getPokemon() {
    let numberArray: Array<number> = [];
    while (numberArray.length < this.props.PokemonTeamSize) {
      let number =
        Math.floor(Math.random() * this.props.PokemonTotalAmount) + 1;
      if (numberArray.indexOf(number) === -1) {
        numberArray.push(number);
      }
    }
    let pokemon = [];
    while (pokemon.length < numberArray.length) {
      let index: number = numberArray[pokemon.length];
      let res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + index, {
        headers: { Accept: "application/json" },
      });
      pokemon.push(res.data);
      this.setState({
        loading: false,
        pokemon: pokemon,
      });
      window.localStorage.setItem("pokemon", JSON.stringify(pokemon));
    }
  }
  render() {
    if (this.state.loading) {
      return (
        <>
          <PokedexHome
            text={"Pokemon Team Builder"}
            onClick={this.getPokemonTeam}
          />
          <Loader />
        </>
      );
    } else if (!this.state.loading && this.state.pokemon.length > 1) {
      return (
        <>
          <PokedexHome text={"Pokemon Team"} onClick={this.getPokemonTeam} />
          {this.state.pokemon.map((p) => (
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
              mt={3}
              mb={3}
              onClick={this.resetPokemonTeam}
            >
              Reset Pokemon Team
            </Button>
          </Box>
        </>
      );
    } else {
      return (
        <>
          <PokedexHome
            text={"Pokemon Team Builder"}
            onClick={this.getPokemonTeam}
          />
          <PokeTrainerImage />
        </>
      );
    }
  }
}

export default Pokedatabase;
