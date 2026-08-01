import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Layout from './components/layout/layout/Layout'
import { usePageParam } from './hooks/usePageParam'
import { useGetPokemonQuery } from './services/apiSlice'
import { PokelistContainer } from './views/pokelist'

const PAGE_SIZE = 12

function App() {
  const [page, setPage] = usePageParam()
  const offset = (page - 1) * PAGE_SIZE

  const { data } = useGetPokemonQuery({ limit: PAGE_SIZE, offset })
  const totalPages = data ? Math.ceil(data.count / PAGE_SIZE) : 1

  return (
    <>
      <Header page={page} totalPages={totalPages} onChange={setPage} />
      <Layout>
        <PokelistContainer offset={offset} />
      </Layout>
      <Footer page={page} totalPages={totalPages} onChange={setPage} />
    </>
  )
}

export default App
