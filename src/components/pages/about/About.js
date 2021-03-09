import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import Paper from '@material-ui/core/Paper';
import './about.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import * as GiIcons from 'react-icons/gi';



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

function About() {

  useEffect(() => {
    AOS.init({duration :2000});
  }, []);

    const classes = useStyles();
    return (
        <div data-aos="fade-in" data-aos-duration="5000"> 
            <div className={classes.root}>
              <Paper elevation={0}>
                <h1>About</h1>
                <br/>
                <br/>

                <p>
                  I'm currently a second year undergraduate at University of Colombo, Faculty of science.I'm also a third year undergraduate at Sri Lanka Institute of Information technology(SLIIT).
                  I like to walk the mesterious path of the unexplored sciences and challenge myself to the limits. I am also a tech enthusist exploring Machine learning and IOT. I'm also a fullstack developer  
                  with the MERN stack as my forte. I'm a team player, a charismatic leader and a dedicated personality who beleives in hard work paying off. I'm 
                  also a volunteer who beleives in paying it foward.
                </p>
                <br/>
                <br/>
                <div className="divContainer">
                  <div className="div1">
                  <div>
                    <div className="infoBox">

                      <div className="infoBoxIcon">
                        <FaIcons.FaUserGraduate />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Degree(Reading)
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              Physical Science. Univertity of Colombo,Faculty of Science.
                            </p>
                        </div>
                        </div>
                    </div>
                      <div className="infoBox">
                        <div className="infoBoxIcon">
                        <FaIcons.FaUserGraduate />
                        </div>
                        <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Degree(Reading)
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              Software Engineering. Srilanka Institute of Information Technology.
                            </p>
                        </div>
                        </div>
                      </div>

                    <div className="infoBox">
                      <div className="infoBoxIcon">
                        <FaIcons.FaFileWord/>
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Languages
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              Sinhala(native), English(proffesional)
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="infoBox">
                      <div className="infoBoxIcon">
                        <GoIcons.GoLocation />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Address
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              716/3, Mountainhall estate, Ambalanwaththa , Galle , Srilanka.
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                  </div>

                  <div className="div2">

                    <div className="infoBox">
                      <div className="infoBoxIcon">
                        <GoIcons.GoCalendar />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Age
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              22
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="infoBox">
                      <div className="infoBoxIcon">
                        <GiIcons.GiCook />
                      </div>

                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                            interests
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              Cooking , Travelling , Photography.
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="infoBox">
                      <div className="infoBoxIcon">
                        <FaIcons.FaMobile />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Mobile number
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              +94 76 4694432
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="infoBox">
                      <div className="infoBoxIcon">
                        <AiIcons.AiOutlineMail />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Email address
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              lasalshettiarachchi458@gmail.com
                            </p>
                        </div>
                        </div>
                    </div>
                  </div>
                
                </div>
                <Button
                  variant="contained"
                  color="deepOrange"
                  className={classes.button}
                  startIcon={<AiIcons.AiOutlineCloudDownload />}
                >
                  Download CV      
                </Button> 
              </Paper>
            </div>
        </div>
    )
}

export default About;
