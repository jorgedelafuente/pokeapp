import { PokeAPI } from "pokeapi-types";
import { Card } from "@/components";
import CardContent from "./CardContent";

const PokeList = ({ data }: { data: PokeAPI.NamedAPIResourceList }) => {
  return (
    <>
      {data &&
        data.results.map((item) => (
          <Card key={item.url}>
            <CardContent item={item} />
          </Card>
        ))}
    </>
  );
};

export default PokeList;
