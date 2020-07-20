import React from 'react';
import Chip from '@material-ui/core/Chip';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Box, Grid, Divider, Typography} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import HomeIcon from '@material-ui/icons/Home';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
export default function Preferencias() {
   
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          padding: theme.spacing(0.5),
          margin: 0,
        },
        chip: {
          margin: theme.spacing(0.5),
        },
      }));
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Todo' },
        { key: 1, label: 'Hogar' },
        { key: 2, label: 'Parrillada' },
        { key: 3, label: 'Cortes' },
        { key: 4, label: 'Del mar' },
        
      ]);
      const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      };
    
   

    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <center><Box >
                    <br></br>
                        
                    <Typography variant="h5" component="h3">
                      Preferencias </Typography><br></br>
                    </Box><Divider/><br></br>
                    
                    
                    <center><Box>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                     <FormControlLabel
                            value="start"
                            control={<Switch color="primary" />}
                            label="Todo  --------------------------------------------"
                            labelPlacement="start"
                        /> </FormGroup>
                        </FormControl>
                    </Box></center><br></br>

                    <center><Box>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                     <FormControlLabel
                            value="start"
                            control={<Switch color="primary" />}
                            label="Hogar  --------------------------------------------"
                            labelPlacement="start"
                        /> </FormGroup>
                        </FormControl>
                    </Box></center><br></br>
                    <center><Box>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                     <FormControlLabel
                            value="start"
                            control={<Switch color="primary" />}
                            label="Parrillada  ----------------------------------------"
                            labelPlacement="start"
                        /> </FormGroup>
                        </FormControl>
                    </Box></center><br></br>
                    <center><Box>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                     <FormControlLabel
                            value="start"
                            control={<Switch color="primary" />}
                            label="Cortes  --------------------------------------------"
                            labelPlacement="start"
                        /> </FormGroup>
                        </FormControl>
                    </Box></center><br></br>
                    <center><Box>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                     <FormControlLabel
                            value="start"
                            control={<Switch color="primary" />}
                            label="Del mar -------------------------------------------"
                            labelPlacement="start"
                        /> </FormGroup>
                        </FormControl>
                    </Box></center><br></br> <Divider/><br></br><br></br>
                    <center><Box>
            <Button variant="contained" color="primary"  >Iniciar</Button>
            </Box></center><br></br><br></br><Divider/>
            <center></center><h6>Otra opción</h6>
            <Chip color="secondary" label="Todo " onDelete={handleDelete} icon={<RestaurantIcon />} />
            <Chip color="secondary" label="Hogar " onDelete={handleDelete} icon={<HomeIcon />} />
            <Chip color="secondary" label="Parrillada " onDelete={handleDelete} icon={<BeachAccessIcon />} />
                   
            <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              color="secondary"
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper> </center>
                </Grid>
            </Grid>

        </div>
    )
}

