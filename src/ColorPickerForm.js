import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import useStyles from './styles/ColorPickerFormStyles';

function ColorPickerForm({ paletteIsFull, addNewColor, colors }) {
  const classes = useStyles();
  const [selectedColor, setSelectedColor] = React.useState('#1CA848');
  const [newColorName, setNewColorName] = React.useState('');

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );

    ValidatorForm.addValidationRule('isColorUnique', value =>
      colors.every(({ color }) => color !== selectedColor)
    );
  });

  const handleColorChange = newColor => {
    setSelectedColor(newColor.hex);
  };

  const handleColorNameChange = evt => {
    setNewColorName(evt.target.value);
  };

  const handleSubmit = () => {
    const newColor = [
      {
        color: selectedColor,
        name: newColorName
      }
    ];
    addNewColor(newColor);
    setNewColorName('');
  };

  return (
    <div>
      <ChromePicker
        color={selectedColor}
        onChangeComplete={handleColorChange}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
        <TextValidator
          value={newColorName}
          onChange={handleColorNameChange}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique!',
            'Color already used!'
          ]}
          className={classes.colorNameInput}
          variant='filled'
          margin='normal'
          placeholder='Color Name'
        />
        <Button
          variant='contained'
          color='primary'
          disabled={paletteIsFull}
          style={{ backgroundColor: paletteIsFull ? 'grey' : selectedColor }}
          type='submit'
          className={classes.addColor}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default ColorPickerForm;
