import Card from "../card/Card";
import { useGetPokemonByIdQuery } from "../../services/apiSlice";
import styles from "./PokemonCard.module.css";

const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

interface Props {
  id: number;
}

const PokemonCard = ({ id }: Props) => {
  const { data, isLoading, isError } = useGetPokemonByIdQuery(id);

  if (isLoading) return <Card><p>Loading...</p></Card>;
  if (isError || !data) return <Card><p>Failed to load #{id}</p></Card>;

  return (
    <Card>
      <div className={styles.spriteArea}>
        {[
          data.sprites.front_default,
          data.sprites.back_default,
          data.sprites.front_shiny,
          data.sprites.back_shiny,
          data.sprites.front_female,
          data.sprites.back_female,
          data.sprites.front_shiny_female,
          data.sprites.back_shiny_female,
          data.sprites.other["official-artwork"].front_default,
          data.sprites.other["official-artwork"].front_shiny,
          data.sprites.other.home.front_default,
          data.sprites.other.home.front_shiny,
          data.sprites.other.home.front_female,
          data.sprites.other.home.front_shiny_female,
          data.sprites.other.dream_world.front_default,
          data.sprites.other.dream_world.front_female,
        ]
          .filter((url): url is string => Boolean(url))
          .map((url) => (
            <img key={url} src={url} alt={data.name} className={styles.sprite} />
          ))}
      </div>
      <div className={styles.content}>
        <div className={styles.nameRow}>
          <h2 className={styles.pokemonName}>{data.name}</h2>
          <p className={styles.pokedexId}>#{String(data.id).padStart(3, "0")}</p>
        </div>

        <h3 className={styles.sectionHeader}>Types</h3>
        <ul className={styles.typeList}>
          {data.types.map((t) => (
            <li key={t.slot} className={styles.typeTag}>
              {t.type.name}
            </li>
          ))}
        </ul>

        <h3 className={styles.sectionHeader}>Stats</h3>
        <dl className={styles.statList}>
          {data.stats.map((s) => (
            <>
              <dt key={`label-${s.stat.name}`} className={styles.statLabel}>
                {STAT_LABELS[s.stat.name] ?? s.stat.name}
              </dt>
              <dd key={`value-${s.stat.name}`} className={styles.statValue}>
                {s.base_stat}
              </dd>
            </>
          ))}
        </dl>

        <h3 className={styles.sectionHeader}>Abilities</h3>
        <ul className={styles.abilityList}>
          {data.abilities.map((a) => (
            <li key={a.ability.name} className={styles.abilityItem}>
              {a.ability.name}
              {a.is_hidden && <span className={styles.hiddenBadge}>(hidden)</span>}
            </li>
          ))}
        </ul>

        <h3 className={styles.sectionHeader}>Size</h3>
        <div className={styles.sizeRow}>
          <span>Height: {(data.height / 10).toFixed(1)} m</span>
          <span>Weight: {(data.weight / 10).toFixed(1)} kg</span>
        </div>
      </div>
    </Card>
  );
};

export default PokemonCard;
