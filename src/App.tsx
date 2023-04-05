import Header from "./components/layout/header/Header";
import Layout from "./components/layout/layout/Layout";
import PokelistContainer from "./views/pokelist/container/PokelistContainer";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <PokelistContainer />
      </Layout>
    </>
  );
}

export default App;
