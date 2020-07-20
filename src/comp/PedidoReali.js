import React from 'react';
import {Box, Grid, Divider, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import img from '../images/images (2).svg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default function Preferencias() {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          padding: theme.spacing(0.5),
          margin: 0,
        }, button: {
            margin: theme.spacing(1),
          },
      
      }));
    const classes = useStyles();

return(
    <div>
    
        <Grid container>
            <Grid item xs={12}>
                <center><Box >
                <br></br>
                    
                <Typography variant="h5" component="h3">
                  Pedido Realizado  </Typography><br></br><Divider/>


                  <Grid item xs={6}></Grid>
    <div className={classes.root}>
            </div>
                </Box></center>



                <Box>
                <div className="imgp">
           
           <img src={img} alt="simg r" class="center"
            height={210}
             width={210}></img><Divider/>
             <h4>Número de orden: #5678 </h4><Divider/>
            <h5>Esté pedido fue realizado con: éxito</h5> <CheckIcon style={{ color: green[500],fontSize: 40 }}   />

             <Box fontStyle="italic" m={1}>
                 
             Para obtener más detalle, consulte en la sección de MIS PEDIDOS
      </Box>   <Divider/><br></br>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<ArrowForwardIosIcon />}
      >
        Mis pedidos
      </Button><br></br><br></br> <br></br><Divider/>
   
       </div>
                </Box>
                </Grid>
            </Grid>

        </div>
    )
}
