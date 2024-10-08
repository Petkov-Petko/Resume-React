import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='leftSide'>
            <h3>About Me:</h3>
            <p>I&apos;m an enthusiastic 25 year old front-end developer based in Bulgaria, passionate Front End development. I have graduated from the Alpha JS program in Telerik Academy. I&apos;m driven by a thirst for knowledge and a passion for problem-solving, pushing myself to master new technologies and tackle challenges head-on.</p>
            <h3>Education</h3>
            <p>Telerik Academy (Alpha JavaScript Track) - June 2024</p>
            <p>Nikola Vaptsarov Naval Academy - Oct 2022</p>
            <h3>Licenses & certifications</h3>
            <a href='https://www.udemy.com/course/the-complete-web-development-bootcamp/' target='_blank'>Web Development Bootcamp(Udemy)</a>
            <a href='https://www.udemy.com/course/100-days-of-code/' target='_blank'>The Complete Python Pro Bootcamp(Udemy)</a>
            <a href='https://softuni.bg/certificates/details/175030/090451ca' target='_blank' >Programming Basics with Python</a>
        </div>
        <div className='rightSide'>
        <h3>Technical Proficiency:</h3>
        <p>Proficient in JavaScript, HTML, CSS, React, and Firebase. Currently expanding my skills in Next.js.</p>
        <h3>Languages and Tools:</h3>
        <div className="tools">
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Firebase</span>
            <span>Redux</span>
            <span>Tailwind</span>
            <span>SASS</span>
            <span>Git</span>
            <span>Jest</span>
            <span>Eslint</span>
            <span>Bootstrap</span>

          </div>
        </div>
        
    </div>
  )
}

export default About