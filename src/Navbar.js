import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const val = e.target.value;
    this.setState({ format: val });
    this.props.changeFormat(val);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>colorpicker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select onChange={this.handleChange} value={format}>
            <MenuItem value='hex'>#ffffff</MenuItem>
            <MenuItem value='rgb'>rgb 255, 255, 255</MenuItem>
            <MenuItem value='rgba'>rgba 255, 255, 255, 1.0</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
