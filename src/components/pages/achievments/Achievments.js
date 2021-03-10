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


function Achievments() {
  useEffect(() => {
    AOS.init({duration :2000});
  }, []);

    const classes = useStyles();

    return (
        <div data-aos="fade-in">
            <div className={classes.root}>
              <Paper elevation={0}>
                <h1>Achievments</h1>
                <br/>
                <br/>
                <h3>
                  Srilanka Institute of Information Technology(SLIIT)
                </h3>
                <br/>
                <br/>
                <p>
                  I'm currently a 3rd year at SLIIT and I managed to excel at academics while managing to engage in many extra-curicular activities aswell.
              
                </p>
 
                <br/>
                <br/>
                <div className="divContainer2">
                  <div className="div12">
                  <div>
                    <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">

                      <div className="infoBoxIcon">
                        <img src={process.env.PUBLIC_URL + "/assets/SLIITlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Dean's List Year 01 Semester 01 - 2019
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              I was included in the deans list of Year 01 Semester 01 for my academic excellence during my first semester
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">

                      <div className="infoBoxIcon">
                        <img src={process.env.PUBLIC_URL + "/assets/SLIITlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Dean's List Year 01 Semester 02 - 2019
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              I was included in the deans list of Year 01 Semester 02 for my academic excellence during my first semester
                            </p>
                        </div>
                        </div>
                      </div>

                    
                      
                    
                    
                    </div>
                  </div>

                  <div className="div22">
                  <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">

                  <div className="infoBoxIcon">
                    <img src={process.env.PUBLIC_URL + "/assets/SLIITlogo.png"} />
                  </div>
                  <div className="infoBoxContent">
                    <div className="infoBoxHeading">
                        <h1>
                          Scholorship
                        </h1>
                    </div>
                    <div className="infoBoxdespription">
                        <p>
                          I was awarded a full Scholorship of 153,000/- for my academic excellence in the 1st year second semester
                        </p>
                    </div>
                    </div>
                  </div>
                    
                    
                  <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">

                    <div className="infoBoxIcon">
                      <img src={process.env.PUBLIC_URL + "/assets/SLIITlogo.png"} />
                    </div>
                    <div className="infoBoxContent">
                      <div className="infoBoxHeading">
                          <h1>
                            Scholorship
                          </h1>
                      </div>
                      <div className="infoBoxdespription">
                          <p>
                            I was awarded a Scholorship of 76,500/- for my academic excellence in the 1st year first semester
                          </p>
                      </div>
                      </div>
                    </div>
                  </div>
                
                </div>
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

                <br/>
                <br/>
                <h3>
                  Model United Nations
                </h3>
                <br/>
                <br/>
                <p>
                  Model United Nations is a gathering of young leaders to discuss the pervailing world issues such as global hunger and to come up with inovative solutions for these issues.
              
                </p>
 
                <br/>
                <br/>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/YMUNlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Yale-NUS college Asia Pacific Model UN 2017 - Best position paper
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was able to take the best position paper award representing the Belgium delegation at the Asia Pacific Model United Nations conference organized by Yale - National University of Singapore
                            </p>
                        </div>
                        </div>
                  </div>    
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/ISMUNlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                ISMUN 2017 - Best Delegate , Security Council
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was able to win the best delegate award in the Security council in the 6th edition of the Inter school Model united nations 2017
                            </p>
                        </div>
                        </div>
                  </div>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/ISMUNlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              ISMUN 2015 - Higher Recommendation award , UNHRC
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was able to win the Higher Recommendation award in the 4th edition of the Inter school Model united nations 2015
                            </p>
                        </div>
                        </div>
                  </div>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/ISMUNlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              ISMUN 2014
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was able to participate in the 3rd session of the Inter School Model United Nations representing the Russian delegation
                            </p>
                        </div>
                        </div>
                  </div>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/SYMUNlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                SYMUN 2014 - Higher Recommendation award
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                            I was able to win the Higher Recommendation award in the 2nd session of the Southern Youth Model united nations 2014
                            </p>
                        </div>
                        </div>
                  </div> 
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/SYMUNlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                SYMUN 2014 - Honorary mention
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was able to get an honorary mention in the 3rd session of the Southern Youth Model united nations 2015
                            </p>
                        </div>
                        </div>
                  </div>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/SLMUNlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                SLMUN 2016
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was able to participate at the 8th edition of the Srilanka Model United nations conference in the  Economics and Social Council
                            </p>
                        </div>
                        </div>
                  </div>
                  <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/RICHMUNlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                RichMun 2018 - Director , conference Protocol
                            </h1>
                        </div>
                        <br/>
                        <div className="infoBoxdespription">
                            <p>
                              I was the Director , conference Protocol at the 1st edition of RichMun 2018.
                            </p>
                        </div>
                        </div>
                  </div> 
                <br/>
                <br/>
                <h3>
                  Richmond College
                </h3>
                <br/>
                <br/>
                <p>
                  I was privillaged to be able to attend one of the most decorated schools in Srilanka from grade 1 - 13. In there I engaged in many co-curricular and extra curricular activities that helped be bloom as a person
              
                </p>
 
                <br/>
                <br/>
                <div className="divContainer2">
                  <div className="div12">
                  <div>
                    <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">

                      <div className="infoBoxIcon">
                        <img src={process.env.PUBLIC_URL + "/assets/Richmondlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Primary Prefect
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              I was a primary prefect at my school in grade 2007-2009
                            </p>
                        </div>
                        </div>
                    </div>
                      <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">
                        <div className="infoBoxIcon">
                          <img src={process.env.PUBLIC_URL + "/assets/Richmondlogo.png"} />  
                        </div>
                        <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              Junior Prefect
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                            I was a junior prefect at my school in grade 2010-2012
                            </p>
                        </div>
                        </div>
                      </div>

                    
                      <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/Richmondlogo.png"} />

                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Chess
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              I was in the chess team
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    
                    </div>
                  </div>

                  <div className="div22">

                    
                    
                    <div className="infoBox2" data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/Richmondlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                              IT society
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                                I was in the IT society at my school
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/Richmondlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                                Scrabbel
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              I was in the scrabbel team of my school
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="infoBox2"data-aos="flip-down" data-aos-duration="4000">
                      <div className="infoBoxIcon" >
                      <img src={process.env.PUBLIC_URL + "/assets/Richmondlogo.png"} />
                      </div>
                      <div className="infoBoxContent">
                        <div className="infoBoxHeading">
                            <h1>
                               Cricket
                            </h1>
                        </div>
                        <div className="infoBoxdespription">
                            <p>
                              I was in the U-13 cricket team of my school
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

export default Achievments
