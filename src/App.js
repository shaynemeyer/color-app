import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  const [palettes, setPalettes] = React.useState(seedColors);
  function findPalette(id) {
    return palettes.find(palette => palette.id === id);
  }

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route
        exact
        path='/palette/new'
        render={routeProps => (
          <NewPaletteForm
            savePalette={savePalette}
            palettes={palettes}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path='/palette/:paletteId/:colorId'
        render={routeProps => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
      <Route
        exact
        path='/'
        render={routeProps => (
          <PaletteList palettes={palettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path='/palette/:id'
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
