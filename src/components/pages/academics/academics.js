import React ,{useEffect}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(1000),
        height: 'auto',
        background:'#050a2130',
        padding: '30px', 
      },
      
    },
  }));
function Academics() {
    useEffect(() => {
        AOS.init({duration :2000});
      }, []);
        const classes = useStyles();
    
        return (
            <div data-aos="fade-in">
                <div className={classes.root}>
                  <Paper elevation={0}>
                    <h1>Academics</h1>
                  </Paper>
                </div>
            </div>
        )
}

export default Academics
