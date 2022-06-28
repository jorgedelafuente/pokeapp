import "./PokeHeading.scss";

interface props {
  text: string;
}

const PokeHeading = (props: props) => {
  return <h1 className="PokeHeading">{props.text}</h1>;
};

export default PokeHeading;
