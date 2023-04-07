import { Card, Footer } from "@/components";
import { useGetPokemonQuery } from "@/services";
import CardContent from "../components/CardContent";
import Button from "@/components/button/Button";

const PokelistContainer = () => {
  const { data } = useGetPokemonQuery(null);

  const nextPage = data?.next;
  const prevPage = data?.previous;

  const fetchNewPageData = (pathPage: string) => {
    console.log("TCL: fetchNewPageData -> pathPage", pathPage);
  };

  return (
    <>
      {data &&
        data.results.map((item, index) => (
          <Card key={item.url}>
            <CardContent item={item} index={index} />
          </Card>
        ))}
      <Footer>
        {nextPage && (
          <Button
            buttonText="Next Page"
            onClick={() => fetchNewPageData(nextPage)}
          />
        )}
        {prevPage && (
          <Button
            buttonText="Next Page"
            onClick={() => fetchNewPageData(prevPage)}
          />
        )}
      </Footer>
    </>
  );
};

export default PokelistContainer;
