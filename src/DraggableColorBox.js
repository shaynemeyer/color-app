import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBoxStyles';

function DraggableColorBox({ color, name, classes, handleDelete }) {
  const handleClick = () => {
    handleDelete(name);
  };
  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span>
          <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
        </span>
      </div>
    </div>
  );
}

export default SortableElement(withStyles(styles)(DraggableColorBox));
