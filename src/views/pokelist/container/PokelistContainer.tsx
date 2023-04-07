import { Card } from "@/components";
import { useGetPokemonQuery } from "@/services";
import CardContent from "../components/CardContent";

const PokelistContainer = () => {
  const { data } = useGetPokemonQuery(null);
  // console.log("TCL: PokelistContainer -> data", data);
  return (
    <>
      {data &&
        data.results.map((item, index) => (
          <Card key={item.url}>
            <CardContent item={item} index={index} />
          </Card>
        ))}
    </>
  );
};

export default PokelistContainer;
