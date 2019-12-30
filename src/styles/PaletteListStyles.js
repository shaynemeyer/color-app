import { down } from './sizes';
import bg from './bg.svg';

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#6b94aa',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    overflow: 'scroll'
  },
  heading: {
    fontSize: '2rem'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [down('xl')]: {
      width: '80%'
    },
    [down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    '& a': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem'
    }
  }
};

export default styles;
