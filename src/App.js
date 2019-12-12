import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import './seedColors';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  function findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>} />
      <Route
        exact
        path='/palette/:id'
        render={routeParams => (
          <Palette
            palette={generatePalette(findPalette(routeParams.match.params.id))}
          />
        )}
      />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
