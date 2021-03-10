import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './skills.css'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';
import * as GrIcons from 'react-icons/gr';
import * as CgIcons from 'react-icons/cg';




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

function Skills() {

  useEffect(() => {
    AOS.init({duration :2000});
  }, []);
    const classes = useStyles();

    return (
        <div data-aos="fade-in">
            <div className={classes.root}>
              <Paper elevation={0}>
                <h1>Skills</h1>
                <br/>
                <br/>
                <h3>
                  <b>
                    PROGRAMING LANGUAGES and FRAMEWORKS
                  </b>
                </h3>
                
                <div className="divContainerSkills">
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                      < AiIcons.AiFillHtml5 />
                      </div>
                      <p>
                        HTML
                      </p>
                   
                  </div>

                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                      < IoIcons.IoLogoCss3 />
                      </div>
                      <p>
                        CSS
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < DiIcons.DiJavascript1 />
                      </div>
                      <p>
                        JavaScript
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < DiIcons.DiJava />
                      </div>
                      <p>
                        Java
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaReact />
                      </div>
                      <p>
                        React
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaNodeJs />
                      </div>
                      <p>
                        NodeJs
                      </p>
                  </div>
                  
                  
                </div>

                <div className="divContainerSkills">
                  
                <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < AiIcons.AiFillAndroid />
                      </div>
                      <p>
                        Android
                      </p>
                  </div>

                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaDatabase />
                      </div>
                      <p>
                        SQL
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < SiIcons.SiPhp />
                      </div>
                      <p>
                        Php
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < BsIcons.BsFillBootstrapFill />
                      </div>
                      <p>
                        Bootstrap
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < SiIcons.SiPython />
                      </div>
                      <p>
                        Python
                      </p>
                  </div>

                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaCuttlefish />
                      </div>
                      <p>
                        C
                      </p>
                  </div>
                  
                </div>
                <br/>
                <br/>
                <h3>
                  <b>
                    Other technologies
                  </b>
                </h3>
                
                <div className="divContainerSkills">
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                      < ImIcons.ImGit />

                      </div>
                      <p>
                        Git
                      </p>
                   
                  </div>

                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                      < AiIcons.AiFillGithub />
                      </div>
                      <p>
                        Github
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < SiIcons.SiVisualstudio />
                      </div>
                      <p>
                        Vs code
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < AiIcons.AiFillFire />
                      </div>
                      <p>
                        FireBase
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < DiIcons.DiNpm />
                      </div>
                      <p>
                        npm
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaAws />
                      </div>
                      <p>
                        aws
                      </p>
                  </div>
                  
                </div>

                <div className="divContainerSkills">
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < SiIcons.SiMicrosoftazure />
                      </div>
                      <p>
                        Azure
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < DiIcons.DiPhotoshop />
                      </div>
                      <p>
                        Photoshop
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < DiIcons.DiIllustrator />
                      </div>
                      <p>
                        Illustrator
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaTerminal />
                      </div>
                      <p>
                        Powershell
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaTerminal />
                      </div>
                      <p>
                        Linux
                      </p>
                  </div>

                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < SiIcons.SiPostman />
                      </div>
                      <p>
                        Postman
                      </p>
                  </div>
                  
                </div>
                <div className="divContainerSkills">
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < GrIcons.GrHeroku />
                      </div>
                      <p>
                        Heroku
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < DiIcons.DiMongodb />
                      </div>
                      <p>
                        MongoDB
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < CgIcons.CgFigma />
                      </div>
                      <p>
                        Figma
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaMicrosoft />
                      </div>
                      <p>
                        O 365
                      </p>
                  </div>
                  
                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaTrello />
                      </div>
                      <p>
                        Trello
                      </p>
                  </div>

                  <div className="divSkills" data-aos="zoom-in">
                      <div className="skillIcons">
                        < FaIcons.FaDocker />
                      </div>
                      <p>
                        Docker
                      </p>
                  </div>
                  
                </div>

                
              </Paper>
            </div>
        </div>
    )
}

export default Skills
