import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';

function PaletteMetaForm({ palettes, handleSavePalette, hideForm }) {
  const [open, setOpen] = React.useState('form');
  const [newPaletteName, setNewPaletteName] = React.useState('');

  const handlePaletteNameChange = evt => {
    setNewPaletteName(evt.target.value);
  };
  React.useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const handleClose = () => {
    setOpen('form');
    hideForm();
  };

  const showPicker = () => {
    setOpen('emoji');
  };

  const savePalette = emoji => {
    setOpen(false);
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native
    };
    handleSavePalette(newPalette);
  };

  return (
    <div>
      <Dialog open={open === 'emoji'} onClose={hideForm}>
        <DialogTitle id='form-dialog-title'>Choose a Palette Emoji</DialogTitle>
        <Picker onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={open === 'form'}
        onClose={hideForm}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette. Make sure it's unique!
            </DialogContentText>
            <TextValidator
              label='Palette Name'
              value={newPaletteName}
              onChange={handlePaletteNameChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
              fullWidth
              marginTop='normal'
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm;
