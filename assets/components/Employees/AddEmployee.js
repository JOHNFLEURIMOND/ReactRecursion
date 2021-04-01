import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { fleurimondColors } from '../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'block',
    },
    container: {
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        boxSizing: 'border-box',
        fontSize: '1rem',
        backgroundColor: fleurimondColors.white,
        lineHeight: 'normal',
        fontWeight: 600,
        height: '500px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        overflow: 'hidden',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    button: {
        margin: '5px auto',
        fontSize: "13px",
        padding: "8px 11px",
        color: fleurimondColors.leapingLemon,
        backgroundColor: fleurimondColors.black,
        borderColor: fleurimondColors.black,
        borderRadius: '3px',
        borderStyle: 'solid',
        borderWidth: '1px',
        cursor: 'pointer',
        display: 'block',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        letterSpacing: '0.02em',
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
    },
    chart: {
        display: 'block',
        backgroundColor: fleurimondColors.leapingLemon,
    },
}));


const AddEmployee = (props) => {
    const classes = useStyles();

    const [employee, setEmployee] = useState({ name: '', employeeID: '', managerID: '' });

    const handleChange = (event) => {
        const value = event.target.value;

        console.log("new value", value);
        setEmployee({
            ...employee,
            [event.target.name]: value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(employee)
        console.log(employee)
    };
    return (
        <div className={classes.container}>

            <Grid container >
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="name"
                            className={classes.textField}
                            label="Employee Name"
                            size="medium"
                            value={employee.name}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            name="employeeID"
                            className={classes.textField}
                            label="Employee ID"
                            size="medium"
                            type="number"
                            value={employee.employeeID}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            name="managerID"
                            className={classes.textField}
                            label="Manager ID"
                            size="medium"
                            type="number"
                            value={employee.managerID}
                            onChange={handleChange}
                        />
                        <button type="submit" className={classes.button}>Submit</button>
                    </Grid>

                    <div>
                        <h1>  {`${employee.name} \t ${employee.managerID}`}  </h1>
                    </div>

                </form>


            </Grid>

        </div >

    );
};

export default AddEmployee;
