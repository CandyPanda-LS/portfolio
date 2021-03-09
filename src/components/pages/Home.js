import React from 'react';
import './home.css';
import Typical from 'react-typical'
import About from './about/About';
import Projects from './projects/Projects';
import Blogs from './blogs/Blogs';
import Experience from './experience/Experience';
import Skills from './skill/Skills';
import Academics from './academics/academics';

function Home() {
  return (
    <div className='home'>      
      <div className="homeBanner">
        <img src={process.env.PUBLIC_URL + "/assets/homeBanner2.gif"} />
      </div>
    <div className="homeBannerText">
    <Typical
        steps={[
          "Hello there ! I am Lasal Hettiarachchi....",
          4000,
          "A designer , a developer and a coffee dependent life form",
          4000
          
      ]}
        loop={Infinity}
        wrapper="h1"
      />
    </div>
      <About/>
      <Projects/>
      <Blogs/>
      <Academics/>
      <Experience/>
      <Skills/>
    </div>
  );
}

export default Home;
