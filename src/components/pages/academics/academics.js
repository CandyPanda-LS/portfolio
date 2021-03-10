import React ,{useEffect}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "./academics.css"


import AOS from 'aos';
import 'aos/dist/aos.css';


import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';

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
                <div className="divContainer2">
                  <div className="div12">
                  <div>
                    <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">

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
                      <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">
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

                    
                      <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                        <BsIcons.BsBook />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Richmond College(2005-2018)
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              Primary / Secondary education
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    
                    </div>
                  </div>

                  <div className="div22">

                    
                    
                    <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                        <BsIcons.BsBook />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Ordinary Level Examination(2015)
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                                A-8 / B-1
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                        <BsIcons.BsBook />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Advanced level examination(2018)
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              B-3(Physical Science stream)
                            </p>
                        </div>
                        </div>
                    </div>
                  </div>
                
                </div>
                    </Paper>
                  

                </div>
            </div>
        )
}

export default Academics
