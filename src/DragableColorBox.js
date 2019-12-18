import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px'
  }
};

function DragableColorBox({ color, name, classes }) {
  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      {name}
    </div>
  );
}

export default withStyles(styles)(DragableColorBox);
