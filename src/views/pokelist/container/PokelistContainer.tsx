import { useEffect } from "react";
import { useLazyGetPokemonByPageQuery } from "@/services/apiSlice";
import { getPageFromURLPath } from "@/utils";
import PokeList from "../components/PokeList";
import PaginationBar from "../components/PaginationBar";

const PAGE_ONE = 0;

const PokelistContainer = () => {
  const [fetchNewPage, { data }] = useLazyGetPokemonByPageQuery();
  useEffect(() => {
    fetchNewPage(PAGE_ONE);
  }, []);

  const fetchNewPageData = (pageNum: number) => {
    fetchNewPage(pageNum);
  };

  return (
    <>
      <PaginationBar
        fetchNewPageData={fetchNewPageData}
        nextPage={getPageFromURLPath(data?.next)}
      />

      {data && <PokeList data={data} />}
    </>
  );
};

export default PokelistContainer;
