import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid} from '@material-ui/core';
import img from '../images/images (2).svg';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1), position: 'absolute', 
        left: '50%', 
        top: '50%',
        right:'50%',
        transform: 'translate(-50%, -50%)',
        width:'270px',
        '& > *': {
            margin: theme.spacing(1),
        },
        paper:{
        
          padding: theme.spacing(29, 2),
               
               
        }, button: {
          margin: theme.spacing(1),
          
        },
        input: {
          display: 'none',
        },
      },
    },
  }));



export default function ImCompra() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
  <div className="imgp">
           
           <img src={img} alt="simg r" class="center"
            height={240}
             width={240} >
                 
             </img>
  
  <center> <Typography variant="h5" component="h3">
          Compra</Typography><br></br>

          <Grid container>
          <Grid item xs={4}>
                   <Box >
                   <center><div className="circulo1"></div></center>
                   
                        </Box>
                        
                </Grid>
                <Grid item xs={4}>
                    <center><Box >
                    <div className="circulo"></div>
                   
                        </Box></center>
                        
                </Grid>
                 <Grid item xs={4}>
                    <center><Box>
                    <div className="circulo1"></div>
                   
                        </Box></center>
                        
                </Grid>
          </Grid>

  <br></br> <br></br>
   <Button variant="outlined" className={classes.button} >Saltar</Button></center>
       </div>
     
    </Paper>
    
  );
}
 


