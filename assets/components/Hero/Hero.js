import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { fleurimondColors } from '../theme';

const useStyles = makeStyles({
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    boxSizing: 'border-box',
    fontSize: '1rem',
    color: fleurimondColors.leapingLemon,
    lineHeight: 'normal',
    fontWeight: 600,
    padding: '64px 20px 48px',
    height: '550px',
    width: '100%',
    backgroundImage: `url("https://files.nc.gov/ncgov/styles/carousel___hero/public/stateemploygraphic.jpg?itok=FTlEThBT&timestamp=1543516794")` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    textAlign: 'center',
    display: 'block',
    overflow: 'hidden',
  },
});

const JFHero = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
  
    </div>
  );
};

export default JFHero;
