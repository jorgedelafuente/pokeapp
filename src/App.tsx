import React from "react";
// import Pokedex from "./components/Pokedex/Pokedex";
// import Jokes from "./components/dadjokes";
import Pokedatabase from "./components/Pokedatabase/Pokedatabase";

import "./App.css";

// interface pokemon {
//    // id: any;
//    // key: any;
//    // name: string;
//    pokemon: Array<any>;
// }

const App: React.FC = () => {
   return (
      <div className='App'>
         {/* <Pokedex /> */}
         {/* <Jokes /> */}
         <Pokedatabase />
      </div>
   );
};

export default App;
