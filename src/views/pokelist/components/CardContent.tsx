import { PokeAPI } from "pokeapi-types";
import { convertThreeDigitNumber, imageBaseUrl } from "@/utils";
import { CardContentWrapper } from "./CardContent.styles";

const CardContext = ({
  item,
  index,
}: {
  item: PokeAPI.NamedAPIResource;
  index: number;
}) => {
  return (
    <CardContentWrapper>
      <h2>{item.name}</h2>
      {/* <div>{item.url}</div> */}
      <img
        loading="lazy"
        src={imageBaseUrl + convertThreeDigitNumber(index + 1) + ".png"}
        alt=""
      />
    </CardContentWrapper>
  );
};

export default CardContext;
