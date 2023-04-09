import { PokeAPI } from "pokeapi-types";
import { convertThreeDigitNumber, imageBaseUrl, getIdFromUrl } from "@/utils";
import { CardContentWrapper } from "./CardContent.styles";

const CardContent = ({ item }: { item: PokeAPI.NamedAPIResource }) => {
  return (
    <CardContentWrapper data-testid="list-item">
      <h2>{item.name}</h2>
      <img
        loading="lazy"
        src={
          imageBaseUrl +
          convertThreeDigitNumber(getIdFromUrl(item.url)) +
          ".png"
        }
        alt="pokemon-image"
      />
    </CardContentWrapper>
  );
};

export default CardContent;
