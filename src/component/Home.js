import React from 'react'
import styles from '../../src/myStyles.module.css'
import gitimage from '../../src/Gitimage.png'
import resume from '../../src/Resume.jpg'
import Projects from './Projects';
import Skills from './Skills'
import About from './About'


function Home() {
    return (
        <div className = {styles.container} >

            <div>
                <p className={styles.homeContent}>Hi, my name is <br/> <div>VijayaKumar </div> <br/> I'm Full Stack <br/> Developer</p>                
            </div>
            <div className={styles.homeIconDisplay}>
                <a href="https://github.com/VijaiNatesh" target="_blank" title="GitHub" rel="noreferrer"> <img className={styles.contact} src={gitimage} alt="GitHub" /> </a>
                <a href="https://drive.google.com/file/d/1kcZ9Uc8enjhkScQEE2PZmeUjzPuwL9t1/view?usp=sharing" target="_blank" title="Resume" rel="noreferrer"> <img className={styles.contact} src={resume} alt="resume" /> </a>
            </div>
            <About />
            <Skills />
            <Projects/>
        </div>

    )
}

export default Home
