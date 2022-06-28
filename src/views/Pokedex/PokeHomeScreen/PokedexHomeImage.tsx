import "./PokedexHome.scss";

const PokedexHomeImage = () => {
  return (
    <div>
      <img
        className="pokeTrainerImage"
        src={process.env.PUBLIC_URL + "/images/poketrainer.jpg"}
        alt="pokemon_trainer_amiibo"
      />
    </div>
  );
};

export default PokedexHomeImage;
