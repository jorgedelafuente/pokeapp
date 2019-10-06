import React from "react";
import axios from "axios";

interface JokesProps {
   numJokesToGet: number;
}
interface JokesState {
   jokes: Array<number>;
   //    seenJokes: any;
   //    seenJokes: Array<number>;
   loading: Boolean;
}

class Jokes extends React.Component<JokesProps, JokesState, {}> {
   public static defaultProps = {
      numJokesToGet: 10
   };
   constructor(props: any) {
      super(props);
      this.state = {
         jokes: JSON.parse(window.localStorage.getItem("jokes")!) || [],
         loading: false
      };

      this.handleClick = this.handleClick.bind(this);
   }
   //    this.seenJokes = new Set(this.state.jokes.map(j => j.text));
   //    console.log(this.seenJokes);
   componentDidMount() {
      console.log(this.state.jokes.length);
      if (this.state.jokes.length === 0) {
         console.log("from api");
         this.getJokes();
      } else {
         console.log("from localstorage");
         //  this.getJokes();
      }
   }
   handleClick() {
      this.setState({ loading: true }, this.getJokes);
   }

   async getJokes() {
      let jokes = [];
      while (jokes.length < this.props.numJokesToGet) {
         let res = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" }
         });
         //  console.log(res);
         jokes.push(res.data.joke);
      }
      console.log(jokes);
      this.setState({
         loading: false,
         jokes: jokes
      });
      window.localStorage.setItem("jokes", JSON.stringify(jokes));
   }
   render() {
      if (this.state.loading) {
         return (
            <div className='spinner'>
               <i className='far fa-8x fa-laugh fa-spin' />
               <h3>Loading</h3>
            </div>
         );
      }
      return (
         <>
            <div>Dad Jokes</div>
            <button onClick={this.handleClick}>Get New Jokes</button>
         </>
      );
   }
}

export default Jokes;
