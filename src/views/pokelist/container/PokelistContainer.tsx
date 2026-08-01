import PokemonCard from "../../../components/pokemon-card/PokemonCard";
import { useGetPokemonQuery } from "../../../services/apiSlice";
import styles from "./PokelistContainer.module.css";

const PAGE_SIZE = 12;

interface Props {
  offset: number;
}

const PokelistContainer = ({ offset }: Props) => {
  const { data } = useGetPokemonQuery({ limit: PAGE_SIZE, offset });

  return (
    <div className={styles.grid}>
      {data?.results.map((item, index) => (
        <PokemonCard key={item.url} id={offset + index + 1} />
      ))}
    </div>
  );
};

export default PokelistContainer;
