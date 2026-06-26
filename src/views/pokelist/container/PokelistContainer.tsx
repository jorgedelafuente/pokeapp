import PokemonCard from "../../../components/pokemon-card/PokemonCard";
import { useGetPokemonQuery } from "../../../services/apiSlice";
import styles from "./PokelistContainer.module.css";

const PokelistContainer = () => {
  const { data } = useGetPokemonQuery(null);
  return (
    <div className={styles.grid}>
      {data &&
        data.results.map((item, index) => (
          <PokemonCard key={item.url} id={index + 1} />
        ))}
    </div>
  );
};

export default PokelistContainer;
