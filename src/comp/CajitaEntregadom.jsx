import React from 'react';
import {Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImEntregaDom from './ImEntregaDom';
import '../styles/Styles.css';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(29, 2),
      display: 'flex',
    },
  }));  
  export default function CajitaBusca() {
    const classes = useStyles();
    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
               
                   <center> 
                    <Box >
                      <Paper className={classes.root}>
                       </Paper>
                         <ImEntregaDom/> 
                    </Box>
                   </center> 
                </Grid>
               
            </Grid>
        </div>
    );
}
