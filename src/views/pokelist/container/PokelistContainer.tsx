import { Card } from "@/components";
import { useGetPokemonQuery } from "@/services";
import { convertThreeDigitNumber, imageBaseUrl } from "@/utils";

const PokelistContainer = () => {
  const { data } = useGetPokemonQuery(null);
  return (
    <>
      {data &&
        data.results.map((item, index) => (
          <Card key={item.url}>
            <h2>{item.name}</h2>
            <div>{item.url}</div>
            <img
              loading="lazy"
              src={imageBaseUrl + convertThreeDigitNumber(index + 1) + ".png"}
              alt=""
            />
          </Card>
        ))}
    </>
  );
};

export default PokelistContainer;
