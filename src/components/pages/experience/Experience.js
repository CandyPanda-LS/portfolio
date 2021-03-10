import React ,{useEffect}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


import AOS from 'aos';
import 'aos/dist/aos.css';

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


function Experience() {
  useEffect(() => {
    AOS.init({duration :2000});
  }, []);

    const classes = useStyles();

    return (
        <div data-aos="fade-in">
            <div className={classes.root}>
              <Paper elevation={0}>
                <h1>Experience</h1>
                <br/>
                <br/>
                <h3>
                  AIESEC
                </h3>
                <br/>
                <br/>
                <p>
                  AIESEC is a non political, non-for profit , youth governed organization which helps young people develop their leadership skills. I was privillaged to be a part of 
                  the membership at AIESEC in SLIIT and take part in many projects that help make the world a better place. 
                </p>
                <br/>
                <br/>
                <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/AIESEClogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Vice president - External Relations , Catalyst 2020
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">

                            <p>
                              I was the vice president - external relations for catalyst 2020. The first ever youth conference organized by AIESEC in SLIIT.
                              In here I had the privillage of working with a wonderful team an improve my network and meet many young volunteers who are passionate 
                              about changing the world.
                            </p>
                        </div>
                        </div>
                  </div>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/AIESEClogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Manager - Partership Development , AIESEC in SLIIT 20/21
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">

                            <p>
                              I was a manager for partnership development at AIESEC in SLIIT for the term 20/21. There I got the experience of approaching 
                              many companies to partner up with AIESEC. I also had the privillage of making many contacts within the industry itself through this process.
                            </p>
                        </div>
                        </div>
                  </div>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/AIESEClogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Team Leader - Incomming Global Entrepreneur , AIESEC in SLIIT 20/21
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">

                            <p>
                              I was privillaged to hold the team leader position for the Incomming Global Entrepreneur function for AIESEC in SLIIT for the term 20/21.
                              Incomming Global Entrepreneur(IGE) is an exchange process that helps foreign students to do an internship in Srilanka while also getting the experience of the Srilankan culture.
                              Although we weren't able to do any exchanges due to covid. I gained a lot of experience by working with my team in how to plan ad form stratergies
                            </p>
                        </div>
                        </div>
                  </div>

                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/AIESEClogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Team member - project 'Minisa'
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">

                            <p>
                              I was able to be a part of the team that organized the 8th edition of project 'Minisa' which helps uplift the lifestyle of kids suffering from down syndrome in Srilanka
                            </p>
                        </div>
                        </div>
                  </div>
                <br/>
                <br/>
                <h3>
                  Youth Governs Srilanka(YGSL)
                </h3>
                <br/>
                <br/>
                <p>
                  Youth Governs Srilanka is a youth led organization in Srilanka which gives professional services to fields of Academia, Industry, Research, Innovation and our general community.
                  Here I got the opportunity to work with undergraduates from many different Universities in Srilanka who are passionate about volunteering 
                </p>
                <br/>
                <br/>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/YGSL.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Member - Team Engineering and Technology
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was a member of the Engeering and Technology branch of YGSL and engaged in many projects. I was also in the bi-weekly blog team Artigos
                            </p>
                        </div>
                        </div>
                  </div>     
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/YGSL.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Member - IDLE team.
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was privillaged to be a part of team IDLE which organized a python workshop series for university undergraduates to improve their programming knowledge.
                            </p>
                        </div>
                        </div>
                  </div>

                  <br/>
                <br/>
                <h3>
                  Microsoft Club of SLIIT
                </h3>
 
                <br/>
                <br/>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/MSlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Member - Dev team
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I am a part of the developer team at MS club
                            </p>
                        </div>
                        </div>
                  </div>     
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/MSlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                OC - Return[C]ero
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was in the organizing committee of 'Return[C]ero' an introductory session to C programming. Me and my fellow colegues did 4 sessions in this programs covering different parts to fundermentals of programming
                            </p>
                        </div>
                        </div>
                  </div>     
              </Paper>
            </div>
        </div>
    )
}

export default Experience
