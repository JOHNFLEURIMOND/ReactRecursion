import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddEmployee from './AddEmployee';

import "./../../index.css";

import { fleurimondColors } from '../theme';

const useStyles = makeStyles({
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    boxSizing: 'border-box',
    fontSize: '1rem',
    margin: 0,
    color: fleurimondColors.black,
    lineHeight: 'normal',
    fontWeight: 600,
    width: '100%',
    backgroundColor: fleurimondColors.white,
    textAlign: 'center',
    display: 'block',
    padding: '5% 0 10% ',
  },

  cardImage: {
    paddingTop: '59%',
  },

  h2: {
    textAlign: 'center',
    padding: '23px 2px 13px 0 !important',
  },
  title: {
    paddingTop: '2rem !important',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    textAlign: 'center',
    display: 'block',
  },
  button: {
    marginTop: "5rem",
    fontSize: "13px",
    padding: "8px 11px",
    color: fleurimondColors.leapingLemon,
    backgroundColor: fleurimondColors.black,
    borderColor: fleurimondColors.black,
    borderRadius: '3px',
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: ' 0.02em',
    lineHeight: 1,

    '&:hover,&:active,&:focus': {
      backgroundColor: fleurimondColors.leapingLemon,
      borderColor: fleurimondColors.leapingLemon,
      color: fleurimondColors.black,
      textDecoration: 'none',
    },

    '&:disabled': {
      backgroundColor: fleurimondColors.foam,
      borderColor: fleurimondColors.foam,
      color: "#ecf0f3",
      opacity: 1,
      pointerEvents: 'none', // counterintuitive but this allows hover events to fire on disabled buttons (e.g. to show a tooltip) - https://jakearchibald.com/2017/events-and-disabled-form-fields/
    },
  }
});

const JFEmployeeList = () => {
  const classes = useStyles();

  const [listOfEmployees, setListOfEmployees] = useState([]);

  const addEmployee = (employee) => {
    console.log("this is a employee: ", employee)
    const newEmployee = [employee, ...listOfEmployees];

    setListOfEmployees(newEmployee)
    console.log("this is all the employees: ", newEmployee)
  }


  return (
    <div className={classes.container}>
      <AddEmployee onSubmit={addEmployee} />
    </div>
  );
};

export default JFEmployeeList;
