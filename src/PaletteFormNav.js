import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import { useStyles } from './styles/PaletteFormNavStyles';

function PaletteFormNav({
  open,
  palettes,
  handleSavePalette,
  handleDrawerOpen
}) {
  const classes = useStyles();
  const [formShowing, setFormShowing] = React.useState(false);

  const showForm = () => {
    setFormShowing(true);
  };

  const hideForm = () => {
    setFormShowing(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ChevronRightIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Create a Palette
          </Typography>
        </Toolbar>
        <div className={classes.navButtons}>
          <Link to='/'>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant='contained'
            color='primary'
            onClick={showForm}
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          handleSavePalette={handleSavePalette}
          hideForm={hideForm}
        />
      )}
    </div>
  );
}

export default PaletteFormNav;
