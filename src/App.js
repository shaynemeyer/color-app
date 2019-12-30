import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = React.useState(savedPalettes || seedColors);

  function findPalette(id) {
    return palettes.find(palette => palette.id === id);
  }

  function savePalette(newPalette) {
    setPalettes([...palettes, newPalette]);
  }

  function deletePalette(id) {
    setPalettes([...palettes.filter(palette => palette.id !== id)]);
  }

  React.useEffect(() => {
    const syncPalettes = () => {
      window.localStorage.setItem('palettes', JSON.stringify(palettes));
    };
    syncPalettes();
  }, [palettes]);

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/palette/new'
                render={routeProps => (
                  <div className='page'>
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={routeProps => (
                  <div className='page'>
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path='/'
                render={routeProps => (
                  <div className='page'>
                    <PaletteList
                      palettes={palettes}
                      {...routeProps}
                      deletePalette={deletePalette}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/:id'
                render={routeProps => (
                  <div className='page'>
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
