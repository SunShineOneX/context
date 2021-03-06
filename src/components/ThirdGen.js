import React from 'react';
import Fourthgen from './Fourthgen';
import { UsernameContext } from "../App";

class Thirdgen extends React.Component {
  render() {
    return (
      <div>
        <h1>Thirdgen component</h1>
        <UsernameContext.Provider value={ {name: "Angel in Thirdgen.js", lastName: "Juarez"} }>
          <Fourthgen />
        </UsernameContext.Provider>
      </div>
    )
  }
}

export default Thirdgen;
