import { PokeAPI } from "pokeapi-types";
import { convertThreeDigitNumber, imageBaseUrl, getIdFromUrl } from "@/utils";
import { CardContentWrapper } from "./CardContent.styles";

const CardContent = ({ item }: { item: PokeAPI.NamedAPIResource }) => {
  return (
    <CardContentWrapper data-testid="list-item">
      <h3>{item.name}</h3>
      <img
        loading="lazy"
        src={
          imageBaseUrl +
          convertThreeDigitNumber(getIdFromUrl(item.url)) +
          ".png"
        }
        alt={item.name}
      />
    </CardContentWrapper>
  );
};

export default CardContent;
