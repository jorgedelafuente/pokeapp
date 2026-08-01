import { useState } from "react";
import Header from "./components/layout/header/Header";
import Layout from "./components/layout/layout/Layout";
import Pagination from "./components/pagination/Pagination";
import { useGetPokemonQuery } from "./services/apiSlice";
import { PokelistContainer } from "./views/pokelist";

const PAGE_SIZE = 12;

function App() {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * PAGE_SIZE;

  const { data } = useGetPokemonQuery({ limit: PAGE_SIZE, offset });
  const totalPages = data ? Math.ceil(data.count / PAGE_SIZE) : 1;

  return (
    <>
      <Header />
      <Pagination
        page={page}
        totalPages={totalPages}
        onFirst={() => setPage(1)}
        onPrev={() => setPage((p) => p - 1)}
        onPrev10={() => setPage((p) => Math.max(1, p - 10))}
        onNext10={() => setPage((p) => Math.min(totalPages, p + 10))}
        onNext={() => setPage((p) => p + 1)}
        onLast={() => setPage(totalPages)}
      />
      <Layout>
        <PokelistContainer offset={offset} />
      </Layout>
    </>
  );
}

export default App;
