import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../styles/Styles.css';
import img from '../images/images (2).svg';

const useStyles = makeStyles({
  root: {
    position: 'absolute', 
    alignContent: 'center',
    alignItems: 'center',
        left: '50%', 
        top: '50%',
        right:'50%',
        transform: 'translate(-50%, -50%)',
        justifyContent: 'center',
        width:'240px',
  },

});

export default function Inicio() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (

    <div className={classes.root}>
  <div className="imgp">
           
           <img src={img} alt="simg r" class="center"
            height={240}
             width={240}></img>
   
       </div>
      <LinearProgress variant="determinate" value={progress} />
      
    </div>
    
  );
}
 


