import { useState } from 'react'
import Card from '@shared/card/Card'
import { useGetPokemonByIdQuery } from '@/services/apiSlice'
import PokemonModal from '@/components/pokemon-modal/PokemonModal'
import styles from './PokemonCard.module.css'

const STAT_LABELS: Record<string, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Speed',
}

interface Props {
  id: number
}

const PokemonCard = ({ id }: Props) => {
  const [showSprites, setShowSprites] = useState(false)
  const { data, isLoading, isError } = useGetPokemonByIdQuery(id)

  if (isLoading)
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    )
  if (isError || !data)
    return (
      <Card>
        <p>Failed to load #{id}</p>
      </Card>
    )

  const artwork = data.sprites.other['official-artwork'].front_default ?? data.sprites.front_default

  const { sprites } = data
  const allSprites = [
    { label: 'Official Art', url: sprites.other['official-artwork'].front_default },
    { label: 'Official Art Shiny', url: sprites.other['official-artwork'].front_shiny },
    { label: 'Front', url: sprites.front_default },
    { label: 'Back', url: sprites.back_default },
    { label: 'Front Shiny', url: sprites.front_shiny },
    { label: 'Back Shiny', url: sprites.back_shiny },
    { label: 'Front Female', url: sprites.front_female },
    { label: 'Back Female', url: sprites.back_female },
    { label: 'Front Shiny Female', url: sprites.front_shiny_female },
    { label: 'Back Shiny Female', url: sprites.back_shiny_female },
    { label: 'Home', url: sprites.other.home.front_default },
    { label: 'Home Shiny', url: sprites.other.home.front_shiny },
    { label: 'Home Female', url: sprites.other.home.front_female },
    { label: 'Home Shiny Female', url: sprites.other.home.front_shiny_female },
    { label: 'Dream World', url: sprites.other.dream_world.front_default },
    { label: 'Dream World Female', url: sprites.other.dream_world.front_female },
  ].filter((s): s is { label: string; url: string } => s.url !== null)

  return (
    <Card>
      <div className={styles.layout}>
        <button
          className={styles.infoIcon}
          aria-label="Show all sprites"
          onClick={() => setShowSprites(true)}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <text
              x="10"
              y="14.5"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill="currentColor"
            >
              i
            </text>
          </svg>
        </button>
        {showSprites && (
          <PokemonModal
            name={data.name}
            sprites={allSprites}
            onClose={() => setShowSprites(false)}
          />
        )}
        <div className={styles.spriteArea}>
          {artwork && <img src={artwork} alt={data.name} className={styles.sprite} />}
        </div>
        <div className={styles.content}>
          <div className={styles.nameRow}>
            <h2 className={styles.pokemonName}>{data.name}</h2>
            <p className={styles.pokedexId}>#{String(data.id).padStart(3, '0')}</p>
          </div>

          <h3 className={styles.sectionHeader}>Types</h3>
          <ul className={styles.typeList}>
            {data.types.map((t) => (
              <li key={t.slot} className={styles.typeTag}>
                {t.type.name}
              </li>
            ))}
          </ul>

          <div className={styles.statsAbilitiesRow}>
            <div className={styles.statsCol}>
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
            </div>

            <div className={styles.abilitiesCol}>
              <h3 className={styles.sectionHeader}>Abilities</h3>
              <ul className={styles.abilityList}>
                {data.abilities.map((a) => (
                  <li key={a.ability.name} className={styles.abilityItem}>
                    {a.ability.name}
                    {a.is_hidden && <span className={styles.hiddenBadge}>(hidden)</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className={styles.sectionHeader}>Size</h3>
          <div className={styles.sizeRow}>
            <span>Height: {(data.height / 10).toFixed(1)} m</span>
            <span>Weight: {(data.weight / 10).toFixed(1)} kg</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
