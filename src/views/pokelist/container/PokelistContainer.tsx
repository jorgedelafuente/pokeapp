import Card from "../../../components/card/Card";
import { imageBaseUrl } from "../../../services";
import { useGetPokemonQuery } from "../../../services/apiSlice";

let convertThreeDigitNumber = (number: number): any => {
  if (number < 100) {
    return `00${number}`.slice(-3);
  } else {
    return number;
  }
};

const PokelistContainer = () => {
  const { data } = useGetPokemonQuery(null);
  console.log("TCL: data", data);
  return (
    <div>
      {data &&
        data.results.map((item, index) => (
          <Card key={item.url}>
            <h2>{item.name}</h2>
            <div>{item.url}</div>
            <img
              src={imageBaseUrl + convertThreeDigitNumber(index + 1) + ".png"}
              alt=""
            />
          </Card>
        ))}
    </div>
  );
};

export default PokelistContainer;
