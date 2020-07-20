import React from 'react';
import {Box, Grid, Typography, Divider} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import '../styles/Styles.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import EmailIcon from '@material-ui/icons/Email';
import { purple } from '@material-ui/core/colors';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(2, 1),
      display: 'flex',
      margin: {
        margin: theme.spacing(1),
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      bott:{
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      },
     
    },
  }));  
  export default function CajitaBusca() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = event => {
        event.preventDefault();
      };
     
    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
               
                   <center> 
                    <Box ><br></br>
                        
                    <Typography variant="h5" component="h3">
                      Iniciar Sesión </Typography><br></br><Divider/><br></br>
                    </Box>
                   </center> 

                   <Box>
                <center> <FormControl className={classes.margin}>
                    <InputLabel >Email</InputLabel>
                     <Input  startAdornment={
                        <InputAdornment position="start" margin="normal">
                        <EmailIcon  />
                        </InputAdornment>
                          } />
                        </FormControl></center> 
                   </Box>
                   <br></br><br></br>
                   <Box>
                <center>
                   
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          id="adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl></center> 
                   </Box><br></br>
            <center><Box>
            <Button size="small" className={classes.button} ><h6>Olvidaste tu Contraseña</h6></Button>
            </Box></center><br></br><Divider/><br></br><br></br>
            <center>
                <Box>
                <Button  variant="contained" color="primary" disableRipple className={classes.bott}>
        INGRESAR
      </Button><br></br><br></br> <br></br><Divider/>
                </Box>
            </center><br></br><br></br>
            <center><Button size="small" className={classes.button} ><h5>Crear Cuenta</h5></Button>
            </center>
        </Grid>
               
            </Grid>
        </div>
    );
}
