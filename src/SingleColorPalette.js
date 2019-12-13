import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { palette, colorId } = this.props;
    this._shades = this.gatherShades(palette, colorId);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = [
        ...shades,
        ...allColors[key].filter(color => color.id === colorToFilterBy)
      ];
    }
    return shades.slice(1);
  }

  render() {
    console.log(this._shades);
    const colorBoxes = this._shades.map((color, idx) => (
      <ColorBox
        key={`${color.id}-${idx}`}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));

    return (
      <div className='Palette'>
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
