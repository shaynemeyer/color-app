import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import MiniPalette from './MiniPalette';
import './seedColors';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  function findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }
  return (
    <div>
      <MiniPalette />
      <Switch>
        <Route
          exact
          path='/'
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeParams => (
            <Palette
              palette={generatePalette(
                findPalette(routeParams.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    </div>

    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
