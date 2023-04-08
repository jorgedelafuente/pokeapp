import { Footer, Header, Layout } from "./components";
import { PokelistContainer } from "./views/pokelist";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <PokelistContainer />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
